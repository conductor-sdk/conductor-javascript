import { ConductorLogger, noopLogger } from "../common";

interface PollerOptions {
  pollInterval?: number;
  concurrency: number;
}

export class Poller<T> {
  private timeoutHandler?: NodeJS.Timeout;
  private pollFunction: (count: number) => Promise<T[]>;
  private performWorkFunction: (work: T) => Promise<void> = async () => {};
  private polling = false;
  private _tasksInProcess = 0;
  options: PollerOptions = {
    pollInterval: 1000,
    concurrency: 1,
  };
  logger: ConductorLogger = noopLogger;

  constructor(
    pollFunction: (count: number) => Promise<T[]>,
    performWorkFunction: (work: T) => Promise<void>,
    pollerOptions?: Partial<PollerOptions>,
    logger?: ConductorLogger
  ) {
    this.pollFunction = pollFunction;
    this.performWorkFunction = performWorkFunction;
    this.options = { ...this.options, ...pollerOptions };
    this.logger = logger || noopLogger;
  }

  get isPolling() {
    return this.polling;
  }

  get tasksInProcess() {
    return this._tasksInProcess;
  }

  /**
   * Starts polling for work
   */
  startPolling = () => {
    if (this.polling) {
      throw new Error("Runner is already started");
    }
    this.polling = true;
    this.poll();
  };

  /**
   * Stops Polling for work
   */
  stopPolling = async () => {
    this.polling = false;
    clearTimeout(this.timeoutHandler!);
  };

  private performWork = async (work: T) => {
    await this.performWorkFunction(work);
    this._tasksInProcess--;
  };

  updateOptions(options: Partial<PollerOptions>) {
    const newOptions = { ...this.options, ...options };
    this.options = newOptions;
  }

  private poll = async () => {
    while (this.isPolling) {
      // Concurrency could have been updated. Accounting for that
      const count =
        this.options.concurrency > this._tasksInProcess
          ? this.options.concurrency - this._tasksInProcess
          : this._tasksInProcess;
      const taskResult: T[] = await this.pollFunction(count);

      this._tasksInProcess = taskResult.length;

      // Dont wait for the tasks to finish only 'listen' to the number of tasks being processes
      taskResult.forEach(this.performWork);

      await new Promise((r) =>
        this.isPolling
          ? (this.timeoutHandler = setTimeout(
              () => r(true),
              this.options.pollInterval
            ))
          : r(true)
      );
    }
  };
}
