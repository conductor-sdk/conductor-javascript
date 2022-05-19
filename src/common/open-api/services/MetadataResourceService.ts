/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConductorUser } from '../models/ConductorUser';
import type { TaskDef } from '../models/TaskDef';
import type { WorkflowDef } from '../models/WorkflowDef';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MetadataResourceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

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

  /**
   * Retrieves all workflow definition along with blueprint
   * @param access
   * @returns WorkflowDef OK
   * @throws ApiError
   */
  public getAllWorkflows(
    access: string = 'READ',
  ): CancelablePromise<Array<WorkflowDef>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/metadata/workflow',
      query: {
        'access': access,
      },
    });
  }

  /**
   * Create or update workflow definition(s)
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public update1(
    requestBody: {
      user?: ConductorUser;
      workflowDefs?: Array<WorkflowDef>;
    },
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
    requestBody: {
      user?: ConductorUser;
      workflowDef?: WorkflowDef;
    },
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
   * @param access
   * @returns TaskDef OK
   * @throws ApiError
   */
  public getTaskDefs(
    access: string = 'READ',
  ): CancelablePromise<Array<TaskDef>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/metadata/taskdefs',
      query: {
        'access': access,
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
    requestBody: {
      user?: ConductorUser;
      taskDef?: TaskDef;
    },
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/metadata/taskdefs',
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
    requestBody: {
      user?: ConductorUser;
      taskDefs?: Array<TaskDef>;
    },
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/metadata/taskdefs',
      body: requestBody,
      mediaType: 'application/json',
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

}