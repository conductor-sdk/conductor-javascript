/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StartWorkflowRequest } from './StartWorkflowRequest';

export type WorkflowScheduleExecutionModel = {
  executionId?: string;
  scheduleName?: string;
  scheduledTime?: number;
  executionTime?: number;
  workflowName?: string;
  workflowId?: string;
  reason?: string;
  stackTrace?: string;
  startWorkflowRequest?: StartWorkflowRequest;
  state?: 'POLLED' | 'FAILED' | 'EXECUTED';
};

