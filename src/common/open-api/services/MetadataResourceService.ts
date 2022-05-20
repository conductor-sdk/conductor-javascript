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
   * Retrieves all workflow definition along with blueprint
   * @returns WorkflowDef OK
   * @throws ApiError
   */
  public getAll(): CancelablePromise<Array<WorkflowDef>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/metadata/workflow',
    });
  }

  /**
   * Create or update workflow definition
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public update(
    requestBody: Array<WorkflowDef>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/metadata/workflow',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Create a new workflow definition
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public create(
    requestBody: WorkflowDef,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/metadata/workflow',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Gets all task definition
   * @returns TaskDef OK
   * @throws ApiError
   */
  public getTaskDefs(): CancelablePromise<Array<TaskDef>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/metadata/taskdefs',
    });
  }

  /**
   * Update an existing task
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public registerTaskDef(
    requestBody: TaskDef,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/metadata/taskdefs',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Create new task definition(s)
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public registerTaskDef1(
    requestBody: Array<TaskDef>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/metadata/taskdefs',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Retrieves workflow definition along with blueprint
   * @param name
   * @param version
   * @returns WorkflowDef OK
   * @throws ApiError
   */
  public get(
    name: string,
    version?: number,
  ): CancelablePromise<WorkflowDef> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/metadata/workflow/{name}',
      path: {
        'name': name,
      },
      query: {
        'version': version,
      },
    });
  }

  /**
   * Gets the task definition
   * @param tasktype
   * @returns TaskDef OK
   * @throws ApiError
   */
  public getTaskDef(
    tasktype: string,
  ): CancelablePromise<TaskDef> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/metadata/taskdefs/{tasktype}',
      path: {
        'tasktype': tasktype,
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
      url: '/api/metadata/taskdefs/{tasktype}',
      path: {
        'tasktype': tasktype,
      },
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
      url: '/api/metadata/workflow/{name}/{version}',
      path: {
        'name': name,
        'version': version,
      },
    });
  }

}