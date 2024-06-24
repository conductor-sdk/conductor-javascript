/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RateLimitConfig } from './RateLimitConfig';
import type { Tag } from './Tag';
import type { WorkflowTask } from './WorkflowTask';
export type ExtendedWorkflowDef = {
  createTime?: number;
  createdBy?: string;
  description?: string;
  failureWorkflow?: string;
  inputParameters?: Array<string>;
  inputTemplate?: Record<string, Record<string, any>>;
  name: string;
  outputParameters?: Record<string, Record<string, any>>;
  overwriteTags?: boolean;
  ownerApp?: string;
  ownerEmail?: string;
  rateLimitConfig?: RateLimitConfig;
  restartable?: boolean;
  schemaVersion?: number;
  tags?: Array<Tag>;
  tasks: Array<WorkflowTask>;
  timeoutPolicy?: 'TIME_OUT_WF' | 'ALERT_ONLY';
  timeoutSeconds: number;
  updateTime?: number;
  updatedBy?: string;
  variables?: Record<string, Record<string, any>>;
  version?: number;
  workflowStatusListenerEnabled?: boolean;
  workflowStatusListenerSink?: string;
};

