/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import {SignalResponse} from "./SignalResponse";
import {Task} from "./Task";

export interface TaskRun extends SignalResponse {
    taskType?: string;
    taskId?: string;
    referenceTaskName?: string;
    retryCount?: number;
    taskDefName?: string;
    retriedTaskId?: string;
    workflowType?: string;
    reasonForIncompletion?: string;
    priority?: number;
    variables?: Record<string, any>;
    tasks?: Array<Task>;
    createdBy?: string;
    createTime?: number;
    updateTime?: number;
    status?: string;
    inputData?: Record<string, any>;
    outputData?: Record<string, any>;
}