/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowDef } from './WorkflowDef';

export type StartWorkflowRequest = {
  name: string;
  version?: number;
  correlationId?: string;
  input?: Record<string, any>;
  taskToDomain?: Record<string, string>;
  workflowDef?: WorkflowDef;
  externalInputPayloadStoragePath?: string;
  idempotencyKey?: string;
  idempotencyStrategy?: 'FAIL' | 'RETURN_EXISTING';
  priority?: number;
  createdBy?: string;
};

