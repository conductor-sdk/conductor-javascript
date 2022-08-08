import { WorkflowDef } from "../common";

export interface StartWorkflowRequest<I = Record<string, any>> {
  name: string;
  version: number;
  correlationId?: string;
  input?: I;
  taskToDomain?: Record<string, string>;
  workflowDef?: WorkflowDef; // TODO ask someone
  externalInputPayloadStoragePath?: string;
  priority?: number;
}

export interface RerunWorkflowRequest<I = Record<string, any>> {
  rerunFromWorkflowId: string;
  workflowInput: I;
  rerunFromTaskId?: Record<string, any>;
  taskInput: Record<string, any>;
  correlationId: string;
}

export interface SkipTaskRequest {
  taskInput: Record<string, any>;
  taskOutput: Record<string, any>;
}

export class ConductorError extends Error {
  private _trace;
  private __proto__: any;

  constructor(message?: string, innerError?: Error) {
    super(message);
    this._trace = innerError;
    const actualProto = new.target.prototype;

    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
  }
}

export enum TaskResult {
  IN_PROGRESS = "IN_PROGRESS",
  FAILED = "FAILED",
  FAILED_WITH_TERMINAL_ERROR = "FAILED_WITH_TERMINAL_ERROR",
  COMPLETED = "COMPLETED",
}
