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
import {
    StartWorkflowRequest,
    StartWorkflowRequestFromJSON,
    StartWorkflowRequestFromJSONTyped,
    StartWorkflowRequestToJSON,
} from './StartWorkflowRequest';

/**
 * 
 * @export
 * @interface SaveScheduleRequest
 */
export interface SaveScheduleRequest {
    /**
     * 
     * @type {string}
     * @memberof SaveScheduleRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SaveScheduleRequest
     */
    cronExpression: string;
    /**
     * 
     * @type {boolean}
     * @memberof SaveScheduleRequest
     */
    runCatchupScheduleInstances?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SaveScheduleRequest
     */
    paused?: boolean;
    /**
     * 
     * @type {StartWorkflowRequest}
     * @memberof SaveScheduleRequest
     */
    startWorkflowRequest?: StartWorkflowRequest;
    /**
     * 
     * @type {string}
     * @memberof SaveScheduleRequest
     */
    createdBy?: string;
    /**
     * 
     * @type {string}
     * @memberof SaveScheduleRequest
     */
    updatedBy?: string;
    /**
     * 
     * @type {number}
     * @memberof SaveScheduleRequest
     */
    scheduleStartTime?: number;
    /**
     * 
     * @type {number}
     * @memberof SaveScheduleRequest
     */
    scheduleEndTime?: number;
}

export function SaveScheduleRequestFromJSON(json: any): SaveScheduleRequest {
    return SaveScheduleRequestFromJSONTyped(json, false);
}

export function SaveScheduleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveScheduleRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'cronExpression': json['cronExpression'],
        'runCatchupScheduleInstances': !exists(json, 'runCatchupScheduleInstances') ? undefined : json['runCatchupScheduleInstances'],
        'paused': !exists(json, 'paused') ? undefined : json['paused'],
        'startWorkflowRequest': !exists(json, 'startWorkflowRequest') ? undefined : StartWorkflowRequestFromJSON(json['startWorkflowRequest']),
        'createdBy': !exists(json, 'createdBy') ? undefined : json['createdBy'],
        'updatedBy': !exists(json, 'updatedBy') ? undefined : json['updatedBy'],
        'scheduleStartTime': !exists(json, 'scheduleStartTime') ? undefined : json['scheduleStartTime'],
        'scheduleEndTime': !exists(json, 'scheduleEndTime') ? undefined : json['scheduleEndTime'],
    };
}

export function SaveScheduleRequestToJSON(value?: SaveScheduleRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'cronExpression': value.cronExpression,
        'runCatchupScheduleInstances': value.runCatchupScheduleInstances,
        'paused': value.paused,
        'startWorkflowRequest': StartWorkflowRequestToJSON(value.startWorkflowRequest),
        'createdBy': value.createdBy,
        'updatedBy': value.updatedBy,
        'scheduleStartTime': value.scheduleStartTime,
        'scheduleEndTime': value.scheduleEndTime,
    };
}

