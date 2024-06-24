/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IntegrationApi } from './IntegrationApi';
import type { Tag } from './Tag';
export type Integration = {
  apis?: Array<IntegrationApi>;
  category?: 'API' | 'AI_MODEL' | 'VECTOR_DB' | 'RELATIONAL_DB' | 'MESSAGE_BROKER';
  configuration?: Record<string, Record<string, any>>;
  createdBy?: string;
  createdOn?: number;
  description?: string;
  enabled?: boolean;
  modelsCount?: number;
  name?: string;
  tags?: Array<Tag>;
  type?: string;
  updatedBy?: string;
  updatedOn?: number;
};

