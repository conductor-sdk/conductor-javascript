/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkflowSummary = {
  workflowType?: string;
  version?: number;
  workflowId?: string;
  correlationId?: string;
  startTime?: string;
  updateTime?: string;
  endTime?: string;
  status?: WorkflowSummary.status;
  input?: string;
  output?: string;
  reasonForIncompletion?: string;
  executionTime?: number;
  event?: string;
  failedReferenceTaskNames?: string;
  externalInputPayloadStoragePath?: string;
  externalOutputPayloadStoragePath?: string;
  priority?: number;
  createdBy?: string;
  outputSize?: number;
  inputSize?: number;
};

export namespace WorkflowSummary {

  export enum status {
    RUNNING = 'RUNNING',
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED',
    TIMED_OUT = 'TIMED_OUT',
    TERMINATED = 'TERMINATED',
    PAUSED = 'PAUSED',
  }


}
