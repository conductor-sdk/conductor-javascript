/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TaskDef = {
  ownerApp?: string;
  createTime?: number;
  updateTime?: number;
  createdBy?: string;
  updatedBy?: string;
  name: string;
  description?: string;
  retryCount?: number;
  timeoutSeconds: number;
  inputKeys?: Array<string>;
  outputKeys?: Array<string>;
  timeoutPolicy?: TaskDef.timeoutPolicy;
  retryLogic?: TaskDef.retryLogic;
  retryDelaySeconds?: number;
  responseTimeoutSeconds?: number;
  concurrentExecLimit?: number;
  inputTemplate?: Record<string, any>;
  rateLimitPerFrequency?: number;
  rateLimitFrequencyInSeconds?: number;
  isolationGroupId?: string;
  executionNameSpace?: string;
  ownerEmail?: string;
  pollTimeoutSeconds?: number;
  backoffScaleFactor?: number;
};

export namespace TaskDef {

  export enum timeoutPolicy {
    RETRY = 'RETRY',
    TIME_OUT_WF = 'TIME_OUT_WF',
    ALERT_ONLY = 'ALERT_ONLY',
  }

  export enum retryLogic {
    FIXED = 'FIXED',
    EXPONENTIAL_BACKOFF = 'EXPONENTIAL_BACKOFF',
    LINEAR_BACKOFF = 'LINEAR_BACKOFF',
  }


}
