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
    Workflow,
    WorkflowFromJSON,
    WorkflowFromJSONTyped,
    WorkflowToJSON,
} from './Workflow';

/**
 * 
 * @export
 * @interface SearchResultWorkflow
 */
export interface SearchResultWorkflow {
    /**
     * 
     * @type {number}
     * @memberof SearchResultWorkflow
     */
    totalHits?: number;
    /**
     * 
     * @type {Array<Workflow>}
     * @memberof SearchResultWorkflow
     */
    results?: Array<Workflow>;
}

export function SearchResultWorkflowFromJSON(json: any): SearchResultWorkflow {
    return SearchResultWorkflowFromJSONTyped(json, false);
}

export function SearchResultWorkflowFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchResultWorkflow {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalHits': !exists(json, 'totalHits') ? undefined : json['totalHits'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(WorkflowFromJSON)),
    };
}

export function SearchResultWorkflowToJSON(value?: SearchResultWorkflow | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalHits': value.totalHits,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(WorkflowToJSON)),
    };
}

