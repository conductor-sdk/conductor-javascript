/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowTask } from './WorkflowTask';

export type WorkflowDef = {
  ownerApp?: string;
  createTime?: number;
  updateTime?: number;
  createdBy?: string;
  updatedBy?: string;
  name: string;
  description?: string;
  version?: number;
  tasks: Array<WorkflowTask>;
  inputParameters?: Array<string>;
  outputParameters?: Record<string, any>;
  failureWorkflow?: string;
  schemaVersion?: number;
  restartable?: boolean;
  workflowStatusListenerEnabled?: boolean;
  ownerEmail?: string;
  timeoutPolicy?: WorkflowDef.timeoutPolicy;
  timeoutSeconds: number;
  variables?: Record<string, any>;
  inputTemplate?: Record<string, any>;
};

export namespace WorkflowDef {

  export enum timeoutPolicy {
    TIME_OUT_WF = 'TIME_OUT_WF',
    ALERT_ONLY = 'ALERT_ONLY',
  }


}
