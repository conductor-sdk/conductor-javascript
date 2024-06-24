/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StartWorkflowRequest } from './StartWorkflowRequest';
export type SaveScheduleRequest = {
  createdBy?: string;
  cronExpression: string;
  description?: string;
  name: string;
  paused?: boolean;
  runCatchupScheduleInstances?: boolean;
  scheduleEndTime?: number;
  scheduleStartTime?: number;
  startWorkflowRequest: StartWorkflowRequest;
  updatedBy?: string;
  zoneId?: string;
};

