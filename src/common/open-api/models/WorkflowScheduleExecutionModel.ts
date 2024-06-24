/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StartWorkflowRequest } from './StartWorkflowRequest';
export type WorkflowScheduleExecutionModel = {
  executionId?: string;
  executionTime?: number;
  reason?: string;
  scheduleName?: string;
  scheduledTime?: number;
  stackTrace?: string;
  startWorkflowRequest?: StartWorkflowRequest;
  state?: 'POLLED' | 'FAILED' | 'EXECUTED';
  workflowId?: string;
  workflowName?: string;
  zoneId?: string;
};

