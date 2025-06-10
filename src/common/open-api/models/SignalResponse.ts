/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { Task } from './Task';

export interface SignalResponse {
    // Common fields in all responses
    responseType?: string;
    targetWorkflowId?: string;
    targetWorkflowStatus?: string;
    workflowId?: string;
    input?: Record<string, any>;
    output?: Record<string, any>;
    priority?: number;
    variables?: Record<string, any>;

    // Fields specific to TARGET_WORKFLOW & BLOCKING_WORKFLOW
    tasks?: Array<Task>;
    createdBy?: string;
    createTime?: number;
    status?: string;
    updateTime?: number;

    // Fields specific to BLOCKING_TASK & BLOCKING_TASK_INPUT
    taskType?: string;
    taskId?: string;
    referenceTaskName?: string;
    retryCount?: number;
    taskDefName?: string;
    workflowType?: string;
}