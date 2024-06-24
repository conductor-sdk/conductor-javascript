/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Task } from './Task';
import type { WorkflowDef } from './WorkflowDef';
export type Workflow = {
  correlationId?: string;
  createTime?: number;
  createdBy?: string;
  endTime?: number;
  event?: string;
  externalInputPayloadStoragePath?: string;
  externalOutputPayloadStoragePath?: string;
  failedReferenceTaskNames?: Array<string>;
  history?: Array<Workflow>;
  idempotencyKey?: string;
  input?: Record<string, Record<string, any>>;
  lastRetriedTime?: number;
  output?: Record<string, Record<string, any>>;
  ownerApp?: string;
  parentWorkflowId?: string;
  parentWorkflowTaskId?: string;
  priority?: number;
  rateLimitKey?: string;
  rateLimited?: boolean;
  reRunFromWorkflowId?: string;
  reasonForIncompletion?: string;
  startTime?: number;
  status?: 'RUNNING' | 'COMPLETED' | 'FAILED' | 'TIMED_OUT' | 'TERMINATED' | 'PAUSED';
  taskToDomain?: Record<string, string>;
  tasks?: Array<Task>;
  updateTime?: number;
  updatedBy?: string;
  variables?: Record<string, Record<string, any>>;
  workflowDefinition?: WorkflowDef;
  workflowId?: string;
  workflowName?: string;
  workflowVersion?: number;
};

