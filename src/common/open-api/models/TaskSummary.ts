/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TaskSummary = {
  workflowId?: string;
  workflowType?: string;
  correlationId?: string;
  scheduledTime?: string;
  startTime?: string;
  updateTime?: string;
  endTime?: string;
  status?: 'IN_PROGRESS' | 'CANCELED' | 'FAILED' | 'FAILED_WITH_TERMINAL_ERROR' | 'COMPLETED' | 'COMPLETED_WITH_ERRORS' | 'SCHEDULED' | 'TIMED_OUT' | 'SKIPPED';
  reasonForIncompletion?: string;
  executionTime?: number;
  queueWaitTime?: number;
  taskDefName?: string;
  taskType?: string;
  input?: string;
  output?: string;
  taskId?: string;
  externalInputPayloadStoragePath?: string;
  externalOutputPayloadStoragePath?: string;
  workflowPriority?: number;
};

