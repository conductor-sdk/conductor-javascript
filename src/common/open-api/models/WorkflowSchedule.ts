/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StartWorkflowRequest } from './StartWorkflowRequest';

export type WorkflowSchedule = {
  name?: string;
  cronExpression?: string;
  runCatchupScheduleInstances?: boolean;
  paused?: boolean;
  startWorkflowRequest?: StartWorkflowRequest;
  scheduleStartTime?: number;
  scheduleEndTime?: number;
  createTime?: number;
  updatedTime?: number;
  createdBy?: string;
  updatedBy?: string;
};

