/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HumanTaskUser } from './HumanTaskUser';
export type HumanTaskSearch = {
  assignees?: Array<HumanTaskUser>;
  claimants?: Array<HumanTaskUser>;
  definitionNames?: Array<string>;
  displayNames?: Array<string>;
  fullTextQuery?: string;
  searchType?: 'ADMIN' | 'INBOX';
  size?: number;
  start?: number;
  states?: Array<'PENDING' | 'ASSIGNED' | 'IN_PROGRESS' | 'COMPLETED' | 'TIMED_OUT' | 'DELETED'>;
  taskInputQuery?: string;
  taskOutputQuery?: string;
  taskRefNames?: Array<string>;
  updateEndTime?: number;
  updateStartTime?: number;
  workflowNames?: Array<string>;
};

