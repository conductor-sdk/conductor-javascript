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
 * @interface TaskExecLog
 */
export interface TaskExecLog {
    /**
     * 
     * @type {string}
     * @memberof TaskExecLog
     */
    log?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskExecLog
     */
    taskId?: string;
    /**
     * 
     * @type {number}
     * @memberof TaskExecLog
     */
    createdTime?: number;
}

export function TaskExecLogFromJSON(json: any): TaskExecLog {
    return TaskExecLogFromJSONTyped(json, false);
}

export function TaskExecLogFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskExecLog {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'log': !exists(json, 'log') ? undefined : json['log'],
        'taskId': !exists(json, 'taskId') ? undefined : json['taskId'],
        'createdTime': !exists(json, 'createdTime') ? undefined : json['createdTime'],
    };
}

export function TaskExecLogToJSON(value?: TaskExecLog | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'log': value.log,
        'taskId': value.taskId,
        'createdTime': value.createdTime,
    };
}

