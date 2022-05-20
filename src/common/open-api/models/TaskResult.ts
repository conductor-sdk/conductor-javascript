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
  status?: 'IN_PROGRESS' | 'FAILED' | 'FAILED_WITH_TERMINAL_ERROR' | 'COMPLETED';
  outputData?: Record<string, any>;
  logs?: Array<TaskExecLog>;
  externalOutputPayloadStoragePath?: string;
  subWorkflowId?: string;
};
