import { ConductorLogger } from "../common";
import { ConductorWorker } from "./Worker";
import { Task, TaskResourceService, TaskResult } from "../common/open-api";

const DEFAULT_ERROR_MESSAGE = "An unknown error occurred";
const MAX_RETRIES = 3;

export type TaskErrorHandler = (error: Error, task?: Task) => void;

export interface TaskRunnerOptions {
  workerID: string;
  domain: string | undefined;
  pollInterval?: number;
  concurrency?: number;
}
export interface RunnerArgs {
  worker: ConductorWorker;
  taskResource: TaskResourceService;
  options: Required<TaskRunnerOptions>;
  logger?: ConductorLogger;
  onError?: TaskErrorHandler;
  concurrency?: number;
}

//eslint-disable-next-line
export const noopErrorHandler: TaskErrorHandler = (__error: Error) => {};

const noopLogger: ConductorLogger = {
  //eslint-disable-next-line
  debug: (...args: any) => {},
  //eslint-disable-next-line
  info: (...args: any) => {},
  //eslint-disable-next-line
  error: (...args: any) => {},
};

/**
 * Responsible for polling and executing tasks from a queue.
 *
 * Because a `poll` in conductor "pops" a task off of a conductor queue,
 * each runner participates in the poll -> work -> update loop.
 * We could potentially split this work into a separate "poller" and "worker" pools
 * but that could lead to picking up more work than the pool of workers are actually able to handle.
 *
 */
export class TaskRunner {
  isPolling = false;
  taskResource: TaskResourceService;
  worker: ConductorWorker;
  logger: ConductorLogger;
  options: Required<TaskRunnerOptions>;
  errorHandler: TaskErrorHandler;
  private concurrentCalls: Array<{
    promise: Promise<void>;
    stop: () => void;
  }> = [];

  constructor({
    worker,
    taskResource,
    options,
    logger = noopLogger,
    onError: errorHandler = noopErrorHandler,
  }: RunnerArgs) {
    this.taskResource = taskResource;
    this.logger = logger;
    this.worker = worker;
    this.options = options;
    this.errorHandler = errorHandler;
  }

  /**
   * Starts polling for work
   */
  startPolling = () => {
    if (this.isPolling) {
      throw new Error("Runner is already started");
    }

    return this.poll();
  };
  /**
   * Stops Polling for work
   */
  stopPolling = () => {
    this.isPolling = false;
    this.concurrentCalls.forEach((call) => call.stop());
  };

  updateOptions(options: Partial<TaskRunnerOptions>) {
    const newOptions = { ...this.options, ...options };
    this.updateConcurrency(newOptions.concurrency);
    this.options = newOptions;
  }

  private updateConcurrency(concurrency: number) {
    if (concurrency > 0 && concurrency !== this.options.concurrency) {
      if (concurrency < this.options.concurrency) {
        const result = this.concurrentCalls.splice(
          0,
          this.options.concurrency - concurrency
        );
        result.forEach((call) => {
          call.stop();
          this.logger.debug("stopping some spawned calls");
        });
      } else {
        for (let i = 0; i < concurrency - this.options.concurrency; i++) {
          this.concurrentCalls.push(this.singlePoll());
          this.logger.debug("spawning additional poll calls");
        }
      }
      this.options.concurrency = concurrency;
    }
  }

  get getOptions(): TaskRunnerOptions {
    return this.options;
  }

  private singlePoll = () => {
    let poll = this.isPolling;
    let timeout: NodeJS.Timeout;
    const pollingCall = async () => {
      while (poll) {
        try {
          const { workerID } = this.options;
          const task = await this.taskResource.poll(
            this.worker.taskDefName,
            workerID,
            this.worker.domain ?? this.options.domain
          );
          if (task && task.taskId) {
            await this.executeTask(task);
          } else {
            this.logger.debug(`No tasks for ${this.worker.taskDefName}`);
          }
        } catch (unknownError: unknown) {
          this.handleUnknownError(unknownError);
          this.errorHandler(unknownError as Error);
        }

        await new Promise(
          (r) =>
            (timeout = setTimeout(() => r(true), this.options.pollInterval))
        );
      }
    };

    return {
      promise: pollingCall(),
      stop: () => {
        clearTimeout(timeout);
        poll = false;
      },
    };
  };

  poll = async () => {
    if (!this.isPolling) {
      this.isPolling = true;
      for (let i = 0; i < this.options.concurrency; i++) {
        this.concurrentCalls.push(this.singlePoll());
      }
    }
  };

  updateTaskWithRetry = async (task: Task, taskResult: TaskResult) => {
    let retryCount = 0;
    while (retryCount < MAX_RETRIES) {
      try {
        await this.taskResource.updateTask1(taskResult);
        return;
      } catch (error: unknown) {
        this.errorHandler(error as Error, task);
        this.logger.error(
          `Error updating task ${taskResult.taskId} on retry ${retryCount}`,
          error
        );
        retryCount++;
        await new Promise((r) => setTimeout(() => r(true), retryCount * 10));
      }
    }
    this.logger.error(
      `Unable to update task ${taskResult.taskId} after ${retryCount} retries`
    );
  };

  executeTask = async (task: Task) => {
    try {
      const result = await this.worker.execute(task);
      await this.updateTaskWithRetry(task, {
        ...result,
        workflowInstanceId: task.workflowInstanceId!,
        taskId: task.taskId!,
      });
      this.logger.debug(`Finished polling for task ${task.taskId}`);
    } catch (error: unknown) {
      await this.updateTaskWithRetry(task, {
        workflowInstanceId: task.workflowInstanceId!,
        taskId: task.taskId!,
        reasonForIncompletion:
          (error as Record<string, string>)?.message ?? DEFAULT_ERROR_MESSAGE,
        status: "FAILED",
        outputData: {},
      });
      this.errorHandler(error as Error, task);
      this.logger.error(`Error executing ${task.taskId}`, error);
    }
  };

  handleUnknownError = (unknownError: unknown) => {
    let message = "";
    let stack: string | undefined = "";
    if ((unknownError as Error).stack) {
      stack = (unknownError as Error).stack;
    }
    if ((unknownError as Error).message) {
      message = (unknownError as Error).message;
    }
    this.logger.error(
      `Error for ${this.worker.taskDefName}: error: ${message}, stack: ${stack}`
    );
  };
}
