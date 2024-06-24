/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TaskSummary = {
  correlationId?: string;
  endTime?: string;
  executionTime?: number;
  externalInputPayloadStoragePath?: string;
  externalOutputPayloadStoragePath?: string;
  input?: string;
  output?: string;
  queueWaitTime?: number;
  reasonForIncompletion?: string;
  scheduledTime?: string;
  startTime?: string;
  status?: 'IN_PROGRESS' | 'CANCELED' | 'FAILED' | 'FAILED_WITH_TERMINAL_ERROR' | 'COMPLETED' | 'COMPLETED_WITH_ERRORS' | 'SCHEDULED' | 'TIMED_OUT' | 'SKIPPED';
  taskDefName?: string;
  taskId?: string;
  taskReferenceName?: string;
  taskType?: string;
  updateTime?: string;
  workflowId?: string;
  workflowPriority?: number;
  workflowType?: string;
};

