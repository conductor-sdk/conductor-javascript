/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Task } from './Task';
export type WorkflowRun = {
  correlationId?: string;
  createTime?: number;
  createdBy?: string;
  input?: Record<string, Record<string, any>>;
  output?: Record<string, Record<string, any>>;
  priority?: number;
  requestId?: string;
  status?: 'RUNNING' | 'COMPLETED' | 'FAILED' | 'TIMED_OUT' | 'TERMINATED' | 'PAUSED';
  tasks?: Array<Task>;
  updateTime?: number;
  variables?: Record<string, Record<string, any>>;
  workflowId?: string;
};

