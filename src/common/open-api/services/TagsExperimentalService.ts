/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TagObject } from '../models/TagObject';
import type { TagString } from '../models/TagString';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TagsExperimentalService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Returns all the tags of the workflow
   * @param name
   * @returns TagObject OK
   * @throws ApiError
   */
  public getWorkflowTags(
    name: string,
  ): CancelablePromise<Array<TagObject>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metadata/workflow/{name}/tags',
      path: {
        'name': name,
      },
    });
  }

  /**
   * Set the tags of the workflow
   * @param name
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public setWorkflowTags(
    name: string,
    requestBody: Array<TagObject>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/metadata/workflow/{name}/tags',
      path: {
        'name': name,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Adds the tag to the workflow
   * @param name
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public addWorkflowTag(
    name: string,
    requestBody: TagObject,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/metadata/workflow/{name}/tags',
      path: {
        'name': name,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Removes the tag of the workflow
   * @param name
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public deleteWorkflowTag(
    name: string,
    requestBody: TagObject,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/metadata/workflow/{name}/tags',
      path: {
        'name': name,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Returns all the tags of the task
   * @param taskName
   * @returns TagObject OK
   * @throws ApiError
   */
  public getTaskTags(
    taskName: string,
  ): CancelablePromise<Array<TagObject>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metadata/task/{taskName}/tags',
      path: {
        'taskName': taskName,
      },
    });
  }

  /**
   * Adds the tag to the task
   * @param taskName
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public setTaskTags(
    taskName: string,
    requestBody: Array<TagObject>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/metadata/task/{taskName}/tags',
      path: {
        'taskName': taskName,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Adds the tag to the task
   * @param taskName
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public addTaskTag(
    taskName: string,
    requestBody: TagObject,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/metadata/task/{taskName}/tags',
      path: {
        'taskName': taskName,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Removes the tag of the task
   * @param taskName
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public deleteTaskTag(
    taskName: string,
    requestBody: TagString,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/metadata/task/{taskName}/tags',
      path: {
        'taskName': taskName,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
