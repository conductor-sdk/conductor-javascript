/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IntegrationDefFormField } from './IntegrationDefFormField';
export type IntegrationDef = {
  category?: 'API' | 'AI_MODEL' | 'VECTOR_DB' | 'RELATIONAL_DB' | 'MESSAGE_BROKER';
  categoryLabel?: string;
  configuration?: Array<IntegrationDefFormField>;
  description?: string;
  enabled?: boolean;
  iconName?: string;
  name?: string;
  tags?: Array<string>;
  type?: string;
};

