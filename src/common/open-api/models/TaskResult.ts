/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskExecLog } from './TaskExecLog';

export type TaskResult = {
  workflowInstanceId: string;
  taskId: string;
  reasonForIncompletion?: string;
  callbackAfterSeconds?: number;
  workerId?: string;
  status?: TaskResult.status;
  outputData?: Record<string, any>;
  logs?: Array<TaskExecLog>;
  externalOutputPayloadStoragePath?: string;
  subWorkflowId?: string;
};

export namespace TaskResult {

  export enum status {
    IN_PROGRESS = 'IN_PROGRESS',
    FAILED = 'FAILED',
    FAILED_WITH_TERMINAL_ERROR = 'FAILED_WITH_TERMINAL_ERROR',
    COMPLETED = 'COMPLETED',
  }


}
