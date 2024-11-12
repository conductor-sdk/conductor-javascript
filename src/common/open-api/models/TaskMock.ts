/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TaskMock = {
  executionTime?: number;
  output?: Record<string, Record<string, any>>;
  queueWaitTime?: number;
  status?:
    | "IN_PROGRESS"
    | "FAILED"
    | "FAILED_WITH_TERMINAL_ERROR"
    | "COMPLETED";
};
