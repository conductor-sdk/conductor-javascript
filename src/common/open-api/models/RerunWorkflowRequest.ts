/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RerunWorkflowRequest = {
  reRunFromWorkflowId?: string;
  workflowInput?: Record<string, any>;
  reRunFromTaskId?: string;
  taskInput?: Record<string, any>;
  correlationId?: string;
};

