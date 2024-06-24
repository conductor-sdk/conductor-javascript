/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtendedTaskDef } from '../models/ExtendedTaskDef';
import type { ExtendedWorkflowDef } from '../models/ExtendedWorkflowDef';
import type { TaskDef } from '../models/TaskDef';
import type { WorkflowDef } from '../models/WorkflowDef';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MetadataResourceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
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
   * Create or update task definition(s)
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public registerTaskDef(
    requestBody: Array<ExtendedTaskDef>,
  ): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/metadata/taskdefs',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Update an existing task
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public updateTaskDef(
    requestBody: ExtendedTaskDef,
  ): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/metadata/taskdefs',
      body: requestBody,
      mediaType: 'application/json',
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
   * Gets the task definition
   * @param tasktype
   * @param metadata
   * @returns any OK
   * @throws ApiError
   */
  public getTaskDef(
    tasktype: string,
    metadata: boolean = false,
  ): CancelablePromise<Record<string, any>> {
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
   * Retrieves all workflow definition along with blueprint
   * @param access
   * @param metadata
   * @param tagKey
   * @param tagValue
   * @param name
   * @param short
   * @returns WorkflowDef OK
   * @throws ApiError
   */
  public getWorkflowDefs(
    access: string = 'READ',
    metadata: boolean = false,
    tagKey?: string,
    tagValue?: string,
    name?: string,
    short: boolean = false,
  ): CancelablePromise<Array<WorkflowDef>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metadata/workflow',
      query: {
        'access': access,
        'metadata': metadata,
        'tagKey': tagKey,
        'tagValue': tagValue,
        'name': name,
        'short': short,
      },
    });
  }
  /**
   * Create a new workflow definition
   * @param requestBody
   * @param overwrite
   * @param newVersion
   * @returns any OK
   * @throws ApiError
   */
  public create(
    requestBody: ExtendedWorkflowDef,
    overwrite: boolean = false,
    newVersion: boolean = false,
  ): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/metadata/workflow',
      query: {
        'overwrite': overwrite,
        'newVersion': newVersion,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Create or update workflow definition(s)
   * @param requestBody
   * @param overwrite
   * @param newVersion
   * @returns any OK
   * @throws ApiError
   */
  public update(
    requestBody: Array<ExtendedWorkflowDef>,
    overwrite: boolean = true,
    newVersion: boolean = false,
  ): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/metadata/workflow',
      query: {
        'overwrite': overwrite,
        'newVersion': newVersion,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Upload all workflows and tasks definitions to Object storage if configured
   * @returns any OK
   * @throws ApiError
   */
  public uploadWorkflowsAndTasksDefinitionsToS3(): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/metadata/workflow-task-defs/upload',
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
}
