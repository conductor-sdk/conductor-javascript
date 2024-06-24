/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskExecLog } from './TaskExecLog';
export type TaskResult = {
  callbackAfterSeconds?: number;
  externalOutputPayloadStoragePath?: string;
  logs?: Array<TaskExecLog>;
  outputData?: Record<string, any>;
  reasonForIncompletion?: string;
  status?: 'IN_PROGRESS' | 'FAILED' | 'FAILED_WITH_TERMINAL_ERROR' | 'COMPLETED';
  subWorkflowId?: string;
  taskId: string;
  workerId?: string;
  workflowInstanceId: string;
};

