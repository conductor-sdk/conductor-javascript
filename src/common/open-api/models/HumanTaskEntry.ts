/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HumanTaskDefinition } from './HumanTaskDefinition';
import type { HumanTaskUser } from './HumanTaskUser';
export type HumanTaskEntry = {
  assignee?: HumanTaskUser;
  claimant?: HumanTaskUser;
  createdBy?: string;
  createdOn?: number;
  definitionName?: string;
  displayName?: string;
  humanTaskDef?: HumanTaskDefinition;
  input?: Record<string, Record<string, any>>;
  output?: Record<string, Record<string, any>>;
  state?: 'PENDING' | 'ASSIGNED' | 'IN_PROGRESS' | 'COMPLETED' | 'TIMED_OUT' | 'DELETED';
  taskId?: string;
  taskRefName?: string;
  updatedBy?: string;
  updatedOn?: number;
  workflowId?: string;
  workflowName?: string;
};

