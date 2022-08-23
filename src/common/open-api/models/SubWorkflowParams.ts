/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowDef } from './WorkflowDef';

export type SubWorkflowParams = {
  name: string;
  version?: number;
  taskToDomain?: Record<string, string>;
  workflowDefinition?: WorkflowDef;
};

