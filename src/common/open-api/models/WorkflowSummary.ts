/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type WorkflowSummary = {
  correlationId?: string;
  createdBy?: string;
  endTime?: string;
  event?: string;
  executionTime?: number;
  externalInputPayloadStoragePath?: string;
  externalOutputPayloadStoragePath?: string;
  failedReferenceTaskNames?: string;
  input?: string;
  inputSize?: number;
  output?: string;
  outputSize?: number;
  priority?: number;
  reasonForIncompletion?: string;
  startTime?: string;
  status?: 'RUNNING' | 'COMPLETED' | 'FAILED' | 'TIMED_OUT' | 'TERMINATED' | 'PAUSED';
  updateTime?: string;
  version?: number;
  workflowId?: string;
  workflowType?: string;
};

