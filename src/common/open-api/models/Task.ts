/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskDef } from './TaskDef';
import type { WorkflowTask } from './WorkflowTask';
export type Task = {
  callbackAfterSeconds?: number;
  callbackFromWorker?: boolean;
  correlationId?: string;
  domain?: string;
  endTime?: number;
  executed?: boolean;
  executionNameSpace?: string;
  externalInputPayloadStoragePath?: string;
  externalOutputPayloadStoragePath?: string;
  inputData?: Record<string, any>;
  isolationGroupId?: string;
  iteration?: number;
  loopOverTask?: boolean;
  outputData?: Record<string, any>;
  parentTaskId?: string;
  pollCount?: number;
  queueWaitTime?: number;
  rateLimitFrequencyInSeconds?: number;
  rateLimitPerFrequency?: number;
  reasonForIncompletion?: string;
  referenceTaskName?: string;
  responseTimeoutSeconds?: number;
  retried?: boolean;
  retriedTaskId?: string;
  retryCount?: number;
  scheduledTime?: number;
  seq?: number;
  startDelayInSeconds?: number;
  startTime?: number;
  status?: 'IN_PROGRESS' | 'CANCELED' | 'FAILED' | 'FAILED_WITH_TERMINAL_ERROR' | 'COMPLETED' | 'COMPLETED_WITH_ERRORS' | 'SCHEDULED' | 'TIMED_OUT' | 'SKIPPED';
  subWorkflowId?: string;
  subworkflowChanged?: boolean;
  taskDefName?: string;
  taskDefinition?: TaskDef;
  taskId?: string;
  taskType?: string;
  updateTime?: number;
  workerId?: string;
  workflowInstanceId?: string;
  workflowPriority?: number;
  workflowTask?: WorkflowTask;
  workflowType?: string;
};

