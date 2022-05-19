/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StartWorkflowRequest } from './StartWorkflowRequest';

export type SaveScheduleRequest = {
  name: string;
  cronExpression: string;
  runCatchupScheduleInstances?: boolean;
  paused?: boolean;
  startWorkflowRequest?: StartWorkflowRequest;
  createdBy?: string;
  updatedBy?: string;
  scheduleStartTime?: number;
  scheduleEndTime?: number;
};
