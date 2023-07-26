import { ConductorLogger, noopLogger } from "../common";
import { ConductorWorker } from "./Worker";
import { Task, TaskResourceService, TaskResult } from "../common/open-api";
import { Poller } from "./Poller";

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
  taskResource: TaskResourceService;
  worker: ConductorWorker;
  private logger: ConductorLogger;
  private options: Required<TaskRunnerOptions>;
  errorHandler: TaskErrorHandler;
  private poller: Poller<Task>;

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
    this.poller = new Poller(
      this.batchPoll,
      this.executeTask,
      { concurrency: options.concurrency, pollInterval: options.pollInterval },
      this.logger
    );
  }

  get isPolling() {
    return this.poller.isPolling;
  }

  /**
   * Starts polling for work
   */
  startPolling = () => {
    this.poller.startPolling();
  };
  /**
   * Stops Polling for work
   */
  stopPolling = async () => {
    await this.poller.stopPolling();
  };

  updateOptions(options: Partial<TaskRunnerOptions>) {
    const newOptions = { ...this.options, ...options };
    this.poller.updateOptions({
      concurrency: newOptions.concurrency,
      pollInterval: newOptions.pollInterval,
    });
    this.options = newOptions;
  }

  get getOptions(): TaskRunnerOptions {
    return this.options;
  }

  private batchPoll = async (count: number): Promise<Task[]> => {
    const { workerID } = this.options;
    const task = await this.taskResource.batchPoll(
      this.worker.taskDefName,
      workerID,
      this.worker.domain ?? this.options.domain,
      count
    );
    return task;
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

  private executeTask = async (task: Task) => {
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
