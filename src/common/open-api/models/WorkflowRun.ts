/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { Task } from './Task';

export type WorkflowRun = {
  correlationId?: string;
  createTime?: number;
  createdBy?: string;
  priority?: number;
  requestId?: string;
  status?: string;
  tasks?: Array<Task>;
  updateTime?: number;
  workflowId?: string;
  variables?: Record<string, object>;
  input?: Record<string, object>;
  output?: Record<string, object>;
}