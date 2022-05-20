/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StartWorkflow = {
  name?: string;
  version?: number;
  correlationId?: string;
  input?: Record<string, any>;
  taskToDomain?: Record<string, string>;
};
