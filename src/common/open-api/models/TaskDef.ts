/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TaskDef = {
  backoffScaleFactor?: number;
  baseType?: string;
  concurrentExecLimit?: number;
  createTime?: number;
  createdBy?: string;
  description?: string;
  executionNameSpace?: string;
  inputKeys?: Array<string>;
  inputTemplate?: Record<string, unknown>;
  isolationGroupId?: string;
  name: string;
  outputKeys?: Array<string>;
  ownerApp?: string;
  ownerEmail?: string;
  pollTimeoutSeconds?: number;
  rateLimitFrequencyInSeconds?: number;
  rateLimitPerFrequency?: number;
  responseTimeoutSeconds?: number;
  retryCount?: number;
  retryDelaySeconds?: number;
  retryLogic?: 'FIXED' | 'EXPONENTIAL_BACKOFF' | 'LINEAR_BACKOFF';
  timeoutPolicy?: 'RETRY' | 'TIME_OUT_WF' | 'ALERT_ONLY';
  timeoutSeconds: number;
  updateTime?: number;
  updatedBy?: string;
};

