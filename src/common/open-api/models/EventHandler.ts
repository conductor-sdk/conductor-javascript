/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Action } from './Action';
import type { Tag } from './Tag';
export type EventHandler = {
  actions?: Array<Action>;
  active?: boolean;
  condition?: string;
  createdBy?: string;
  description?: string;
  evaluatorType?: string;
  event?: string;
  name?: string;
  tags?: Array<Tag>;
};

