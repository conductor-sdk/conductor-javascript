/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkflowStatus = {
  workflowId?: string;
  correlationId?: string;
  output?: Record<string, any>;
  variables?: Record<string, any>;
  status?: 'RUNNING' | 'COMPLETED' | 'FAILED' | 'TIMED_OUT' | 'TERMINATED' | 'PAUSED';
};

