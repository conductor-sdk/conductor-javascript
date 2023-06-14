import os from "os";
import {
  TaskRunner,
  TaskRunnerOptions,
  TaskErrorHandler,
  noopErrorHandler,
} from "./TaskRunner";
import { ConductorLogger, DefaultLogger } from "../common";
import { ConductorWorker } from "./Worker";
import { ConductorClient } from "../common/open-api";

export interface TaskManagerConfig {
  logger?: ConductorLogger;
  options?: Partial<TaskRunnerOptions>;
  onError?: TaskErrorHandler;
}

const defaultManagerOptions: Required<TaskRunnerOptions> = {
  workerID: "",
  pollInterval: 1000,
  domain: undefined,
  concurrency: 1,
};

function workerId(options: Partial<TaskRunnerOptions>) {
  return options.workerID ?? os.hostname();
}

/**
 * Responsible for initializing and managing the runners that poll and work different task queues.
 */
export class TaskManager {
  private tasks: Record<string, Array<TaskRunner>> = {};
  private readonly client: ConductorClient;
  private readonly logger: ConductorLogger;
  private readonly errorHandler: TaskErrorHandler;
  private workers: Array<ConductorWorker>;
  private readonly taskManageOptions: Required<TaskRunnerOptions>;

  constructor(
    client: ConductorClient,
    workers: Array<ConductorWorker>,
    config: TaskManagerConfig = {}
  ) {
    if (!workers) {
      throw new Error(
        "No workers supplied to TaskManager. Please pass an array of workers."
      );
    }
    this.client = client;
    this.logger = config.logger ?? new DefaultLogger();
    this.errorHandler = config.onError ?? noopErrorHandler;
    this.workers = workers;
    const providedOptions = config.options ?? {};
    this.taskManageOptions = {
      ...defaultManagerOptions,
      ...providedOptions,
      workerID: workerId(providedOptions),
    };
  }

  private workerManagerWorkerOptions = (
    worker: ConductorWorker
  ): Required<TaskRunnerOptions> => {
    return {
      ...this.taskManageOptions,
      concurrency: worker.concurrency ?? this.taskManageOptions.concurrency,
      domain: worker.domain ?? this.taskManageOptions.domain,
    };
  };

  /**
   * new options will get merged to existing options
   * @param options new options to update polling options
   */
  updatePollingOptions = (options: Partial<TaskRunnerOptions>) => {
    this.workers.forEach((worker) => {
      const newOptions = {
        ...this.workerManagerWorkerOptions(worker),
        ...options,
      };
      const runners = this.tasks[worker.taskDefName];
      runners.forEach((runner) => {
        runner.updateOptions(newOptions);
      });
    });
  };

  /**
   * Start polling for tasks
   */
  startPolling = () => {
    this.workers.forEach((worker) => {
      this.tasks[worker.taskDefName] = [];
      const options = this.workerManagerWorkerOptions(worker);
      this.logger.debug(
        `Starting taskDefName=${worker.taskDefName} concurrency=${options.concurrency} domain=${options.domain}`
      );
      const runner = new TaskRunner({
        worker,
        options,
        taskResource: this.client.taskResource,
        logger: this.logger,
        onError: this.errorHandler,
      });
      runner.startPolling();
      this.tasks[worker.taskDefName].push(runner);
    });
  };
  /**
   * Stops polling for tasks
   */
  stopPolling = () => {
    for (const taskType in this.tasks) {
      this.tasks[taskType].forEach((runner) => runner.stopPolling());
      this.tasks[taskType] = [];
    }
  };
}
