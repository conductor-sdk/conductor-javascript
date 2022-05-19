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
  status?: TaskSummary.status;
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

export namespace TaskSummary {

  export enum status {
    IN_PROGRESS = 'IN_PROGRESS',
    CANCELED = 'CANCELED',
    FAILED = 'FAILED',
    FAILED_WITH_TERMINAL_ERROR = 'FAILED_WITH_TERMINAL_ERROR',
    COMPLETED = 'COMPLETED',
    COMPLETED_WITH_ERRORS = 'COMPLETED_WITH_ERRORS',
    SCHEDULED = 'SCHEDULED',
    TIMED_OUT = 'TIMED_OUT',
    SKIPPED = 'SKIPPED',
  }


}
