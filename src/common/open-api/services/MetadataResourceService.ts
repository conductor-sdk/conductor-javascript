/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskDef } from '../models/TaskDef';
import type { WorkflowDef } from '../models/WorkflowDef';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MetadataResourceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Gets the task definition
   * @param tasktype
   * @param metadata
   * @returns TaskDef OK
   * @throws ApiError
   */
  public getTaskDef(
    tasktype: string,
    metadata: boolean = false,
  ): CancelablePromise<TaskDef> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metadata/taskdefs/{tasktype}',
      path: {
        'tasktype': tasktype,
      },
      query: {
        'metadata': metadata,
      },
    });
  }

  /**
   * Remove a task definition
   * @param tasktype
   * @returns any OK
   * @throws ApiError
   */
  public unregisterTaskDef(
    tasktype: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/metadata/taskdefs/{tasktype}',
      path: {
        'tasktype': tasktype,
      },
    });
  }

  /**
   * Retrieves all workflow definition along with blueprint
   * @param access
   * @param metadata
   * @param tagKey
   * @param tagValue
   * @returns WorkflowDef OK
   * @throws ApiError
   */
  public getAllWorkflows(
    access: string = 'READ',
    metadata: boolean = false,
    tagKey?: string,
    tagValue?: string,
  ): CancelablePromise<Array<WorkflowDef>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metadata/workflow',
      query: {
        'access': access,
        'metadata': metadata,
        'tagKey': tagKey,
        'tagValue': tagValue,
      },
    });
  }

  /**
   * Create or update workflow definition(s)
   * @param requestBody
   * @param overwrite
   * @returns any OK
   * @throws ApiError
   */
  public update(
    requestBody: Array<WorkflowDef>,
    overwrite: boolean = true,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/metadata/workflow',
      query: {
        'overwrite': overwrite,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Create a new workflow definition
   * @param requestBody
   * @param overwrite
   * @returns any OK
   * @throws ApiError
   */
  public create(
    requestBody: WorkflowDef,
    overwrite: boolean = false,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/metadata/workflow',
      query: {
        'overwrite': overwrite,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Gets all task definition
   * @param access
   * @param metadata
   * @param tagKey
   * @param tagValue
   * @returns TaskDef OK
   * @throws ApiError
   */
  public getTaskDefs(
    access: string = 'READ',
    metadata: boolean = false,
    tagKey?: string,
    tagValue?: string,
  ): CancelablePromise<Array<TaskDef>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metadata/taskdefs',
      query: {
        'access': access,
        'metadata': metadata,
        'tagKey': tagKey,
        'tagValue': tagValue,
      },
    });
  }

  /**
   * Update an existing task
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public updateTaskDef(
    requestBody: TaskDef,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/metadata/taskdefs',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Create or update task definition(s)
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public registerTaskDef(
    requestBody: Array<TaskDef>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/metadata/taskdefs',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Removes workflow definition. It does not remove workflows associated with the definition.
   * @param name
   * @param version
   * @returns any OK
   * @throws ApiError
   */
  public unregisterWorkflowDef(
    name: string,
    version: number,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/metadata/workflow/{name}/{version}',
      path: {
        'name': name,
        'version': version,
      },
    });
  }

  /**
   * Retrieves workflow definition along with blueprint
   * @param name
   * @param version
   * @param metadata
   * @returns WorkflowDef OK
   * @throws ApiError
   */
  public get(
    name: string,
    version?: number,
    metadata: boolean = false,
  ): CancelablePromise<WorkflowDef> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metadata/workflow/{name}',
      path: {
        'name': name,
      },
      query: {
        'version': version,
        'metadata': metadata,
      },
    });
  }

}
