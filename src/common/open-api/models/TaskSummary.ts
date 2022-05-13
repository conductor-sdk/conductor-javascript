/* tslint:disable */
/* eslint-disable */
/**
 * Conductor API Server
 * Conductor API Server
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TaskSummary
 */
export interface TaskSummary {
    /**
     * 
     * @type {string}
     * @memberof TaskSummary
     */
    workflowId?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskSummary
     */
    workflowType?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskSummary
     */
    correlationId?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskSummary
     */
    scheduledTime?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskSummary
     */
    startTime?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskSummary
     */
    updateTime?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskSummary
     */
    endTime?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskSummary
     */
    status?: TaskSummaryStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof TaskSummary
     */
    reasonForIncompletion?: string;
    /**
     * 
     * @type {number}
     * @memberof TaskSummary
     */
    executionTime?: number;
    /**
     * 
     * @type {number}
     * @memberof TaskSummary
     */
    queueWaitTime?: number;
    /**
     * 
     * @type {string}
     * @memberof TaskSummary
     */
    taskDefName?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskSummary
     */
    taskType?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskSummary
     */
    input?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskSummary
     */
    output?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskSummary
     */
    taskId?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskSummary
     */
    externalInputPayloadStoragePath?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskSummary
     */
    externalOutputPayloadStoragePath?: string;
    /**
     * 
     * @type {number}
     * @memberof TaskSummary
     */
    workflowPriority?: number;
}

/**
* @export
* @enum {string}
*/
export enum TaskSummaryStatusEnum {
    InProgress = 'IN_PROGRESS',
    Canceled = 'CANCELED',
    Failed = 'FAILED',
    FailedWithTerminalError = 'FAILED_WITH_TERMINAL_ERROR',
    Completed = 'COMPLETED',
    CompletedWithErrors = 'COMPLETED_WITH_ERRORS',
    Scheduled = 'SCHEDULED',
    TimedOut = 'TIMED_OUT',
    Skipped = 'SKIPPED'
}

export function TaskSummaryFromJSON(json: any): TaskSummary {
    return TaskSummaryFromJSONTyped(json, false);
}

export function TaskSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskSummary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'workflowId': !exists(json, 'workflowId') ? undefined : json['workflowId'],
        'workflowType': !exists(json, 'workflowType') ? undefined : json['workflowType'],
        'correlationId': !exists(json, 'correlationId') ? undefined : json['correlationId'],
        'scheduledTime': !exists(json, 'scheduledTime') ? undefined : json['scheduledTime'],
        'startTime': !exists(json, 'startTime') ? undefined : json['startTime'],
        'updateTime': !exists(json, 'updateTime') ? undefined : json['updateTime'],
        'endTime': !exists(json, 'endTime') ? undefined : json['endTime'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'reasonForIncompletion': !exists(json, 'reasonForIncompletion') ? undefined : json['reasonForIncompletion'],
        'executionTime': !exists(json, 'executionTime') ? undefined : json['executionTime'],
        'queueWaitTime': !exists(json, 'queueWaitTime') ? undefined : json['queueWaitTime'],
        'taskDefName': !exists(json, 'taskDefName') ? undefined : json['taskDefName'],
        'taskType': !exists(json, 'taskType') ? undefined : json['taskType'],
        'input': !exists(json, 'input') ? undefined : json['input'],
        'output': !exists(json, 'output') ? undefined : json['output'],
        'taskId': !exists(json, 'taskId') ? undefined : json['taskId'],
        'externalInputPayloadStoragePath': !exists(json, 'externalInputPayloadStoragePath') ? undefined : json['externalInputPayloadStoragePath'],
        'externalOutputPayloadStoragePath': !exists(json, 'externalOutputPayloadStoragePath') ? undefined : json['externalOutputPayloadStoragePath'],
        'workflowPriority': !exists(json, 'workflowPriority') ? undefined : json['workflowPriority'],
    };
}

export function TaskSummaryToJSON(value?: TaskSummary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'workflowId': value.workflowId,
        'workflowType': value.workflowType,
        'correlationId': value.correlationId,
        'scheduledTime': value.scheduledTime,
        'startTime': value.startTime,
        'updateTime': value.updateTime,
        'endTime': value.endTime,
        'status': value.status,
        'reasonForIncompletion': value.reasonForIncompletion,
        'executionTime': value.executionTime,
        'queueWaitTime': value.queueWaitTime,
        'taskDefName': value.taskDefName,
        'taskType': value.taskType,
        'input': value.input,
        'output': value.output,
        'taskId': value.taskId,
        'externalInputPayloadStoragePath': value.externalInputPayloadStoragePath,
        'externalOutputPayloadStoragePath': value.externalOutputPayloadStoragePath,
        'workflowPriority': value.workflowPriority,
    };
}

