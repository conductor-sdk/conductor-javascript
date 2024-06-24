/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SubWorkflowParams = {
  idempotencyKey?: string;
  idempotencyStrategy?: 'FAIL' | 'RETURN_EXISTING';
  name?: string;
  taskToDomain?: Record<string, string>;
  version?: number;
  workflowDefinition?: Record<string, any>;
};

