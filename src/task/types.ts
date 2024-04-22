import type { ConductorLogger } from "../common";
import type { ConductorWorker } from "./Worker";
import type { Task, TaskResourceService } from "../common/open-api";

export type TaskErrorHandler = (error: Error, task?: Task) => void;
export interface TaskRunnerOptions {
  workerID: string;
  domain: string | undefined;
  pollInterval?: number;
  concurrency?: number;
  batchPollingTimeout?: number;
}
export interface RunnerArgs {
  worker: ConductorWorker;
  taskResource: TaskResourceService;
  options: TaskRunnerOptions;
  logger?: ConductorLogger;
  onError?: TaskErrorHandler;
  concurrency?: number;
  maxRetries?: number;
}
