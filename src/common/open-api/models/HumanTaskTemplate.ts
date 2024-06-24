/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Tag } from './Tag';
export type HumanTaskTemplate = {
  createdBy?: string;
  createdOn?: number;
  jsonSchema: Record<string, Record<string, any>>;
  name: string;
  tags?: Array<Tag>;
  templateUI: Record<string, Record<string, any>>;
  updatedBy?: string;
  updatedOn?: number;
  version: number;
};

