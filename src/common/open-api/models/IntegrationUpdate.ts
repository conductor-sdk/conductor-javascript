/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type IntegrationUpdate = {
  category?: 'API' | 'AI_MODEL' | 'VECTOR_DB' | 'RELATIONAL_DB' | 'MESSAGE_BROKER';
  configuration?: Record<string, Record<string, any>>;
  description?: string;
  enabled?: boolean;
  type?: string;
};

