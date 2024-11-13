/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskMock } from "./TaskMock";
import type { WorkflowDef } from "./WorkflowDef";
export type WorkflowTestRequest = {
  correlationId?: string;
  createdBy?: string;
  externalInputPayloadStoragePath?: string;
  idempotencyKey?: string;
  idempotencyStrategy?: "FAIL" | "RETURN_EXISTING";
  input?: Record<string, Record<string, any>>;
  name: string;
  priority?: number;
  subWorkflowTestRequest?: Record<string, WorkflowTestRequest>;
  taskRefToMockOutput?: Record<string, Array<TaskMock>>;
  taskToDomain?: Record<string, string>;
  version?: number;
  workflowDef?: WorkflowDef;
};
