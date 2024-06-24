/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StartWorkflowRequest } from './StartWorkflowRequest';
import type { Tag } from './Tag';
export type WorkflowScheduleModel = {
  createTime?: number;
  createdBy?: string;
  cronExpression?: string;
  description?: string;
  name?: string;
  paused?: boolean;
  pausedReason?: string;
  runCatchupScheduleInstances?: boolean;
  scheduleEndTime?: number;
  scheduleStartTime?: number;
  startWorkflowRequest?: StartWorkflowRequest;
  tags?: Array<Tag>;
  updatedBy?: string;
  updatedTime?: number;
  zoneId?: string;
};

