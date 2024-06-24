/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowDef } from './WorkflowDef';
export type StartWorkflowRequest = {
  correlationId?: string;
  createdBy?: string;
  externalInputPayloadStoragePath?: string;
  idempotencyKey?: string;
  idempotencyStrategy?: 'FAIL' | 'RETURN_EXISTING';
  input?: Record<string, unknown>;
  name: string;
  priority?: number;
  taskToDomain?: Record<string, string>;
  version?: number;
  workflowDef?: WorkflowDef;
};

