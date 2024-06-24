/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type WorkflowStatus = {
  correlationId?: string;
  output?: Record<string, Record<string, any>>;
  status?: 'RUNNING' | 'COMPLETED' | 'FAILED' | 'TIMED_OUT' | 'TERMINATED' | 'PAUSED';
  variables?: Record<string, Record<string, any>>;
  workflowId?: string;
};

