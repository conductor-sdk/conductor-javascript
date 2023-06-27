import { ConductorLogger } from "../common";
import { noopLogger } from "./helpers";

interface PollerOptions {
  pollInterval?: number;
  concurrency: number;
}

export class Poller {
  private concurrentCalls: Array<{
    promise: Promise<void>;
    stop: () => void;
  }> = [];
  private pollFunction: () => Promise<void> = async () => {};
  private isPolling = false;
  options: PollerOptions = {
    pollInterval: 1000,
    concurrency: 1,
  };
  logger: ConductorLogger = noopLogger;

  constructor(
    pollFunction: () => Promise<void>,
    pollerOptions?: Partial<PollerOptions>,
    logger?: ConductorLogger
  ) {
    this.pollFunction = pollFunction;
    this.options = { ...this.options, ...pollerOptions };
    this.logger = logger || noopLogger;
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

 /**
  * adds or shuts down concurrent calls based on the concurrency setting
  * @param concurrency 
  */ 
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

  updateOptions(options: Partial<PollerOptions>) {
    const newOptions = { ...this.options, ...options };
    this.updateConcurrency(newOptions.concurrency);
    this.options = newOptions;
  }

  private poll = async () => {
    if (!this.isPolling) {
      this.isPolling = true;
      for (let i = 0; i < this.options.concurrency; i++) {
        this.concurrentCalls.push(this.singlePoll());
      }
    }
  };

  private singlePoll = () => {
    let poll = this.isPolling;
    let timeout: NodeJS.Timeout;
    const pollingCall = async () => {
      while (poll) {
        await this.pollFunction();
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
        this.logger.debug("stopping single poll call");
      },
    };
  };
}
