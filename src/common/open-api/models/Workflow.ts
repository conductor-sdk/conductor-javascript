/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Task } from './Task';
import type { WorkflowDef } from './WorkflowDef';

export type Workflow = {
  ownerApp?: string;
  createTime?: number;
  updateTime?: number;
  createdBy?: string;
  updatedBy?: string;
  status?: Workflow.status;
  endTime?: number;
  workflowId?: string;
  parentWorkflowId?: string;
  parentWorkflowTaskId?: string;
  tasks?: Array<Task>;
  input?: Record<string, any>;
  output?: Record<string, any>;
  correlationId?: string;
  reRunFromWorkflowId?: string;
  reasonForIncompletion?: string;
  event?: string;
  taskToDomain?: Record<string, string>;
  failedReferenceTaskNames?: Array<string>;
  workflowDefinition?: WorkflowDef;
  externalInputPayloadStoragePath?: string;
  externalOutputPayloadStoragePath?: string;
  priority?: number;
  variables?: Record<string, any>;
  lastRetriedTime?: number;
  workflowName?: string;
  workflowVersion?: number;
  startTime?: number;
};

export namespace Workflow {

  export enum status {
    RUNNING = 'RUNNING',
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED',
    TIMED_OUT = 'TIMED_OUT',
    TERMINATED = 'TERMINATED',
    PAUSED = 'PAUSED',
  }


}
