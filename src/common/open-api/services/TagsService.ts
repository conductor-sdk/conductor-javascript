/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Tag } from '../models/Tag';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TagsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * List all tags
   * @returns Tag OK
   * @throws ApiError
   */
  public getTags1(): CancelablePromise<Array<Tag>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metadata/tags',
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
    requestBody: Tag,
  ): CancelablePromise<Record<string, any>> {
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
  /**
   * Returns all the tags of the task
   * @param taskName
   * @returns Tag OK
   * @throws ApiError
   */
  public getTaskTags(
    taskName: string,
  ): CancelablePromise<Array<Tag>> {
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
  public addTaskTag(
    taskName: string,
    requestBody: Tag,
  ): CancelablePromise<Record<string, any>> {
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
   * Sets (replaces existing) the tags to the task
   * @param taskName
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public setTaskTags(
    taskName: string,
    requestBody: Array<Tag>,
  ): CancelablePromise<Record<string, any>> {
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
   * Removes the tag of the workflow
   * @param name
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public deleteWorkflowTag(
    name: string,
    requestBody: Tag,
  ): CancelablePromise<Record<string, any>> {
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
   * Returns all the tags of the workflow
   * @param name
   * @returns Tag OK
   * @throws ApiError
   */
  public getWorkflowTags(
    name: string,
  ): CancelablePromise<Array<Tag>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metadata/workflow/{name}/tags',
      path: {
        'name': name,
      },
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
    requestBody: Tag,
  ): CancelablePromise<Record<string, any>> {
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
   * Set (replaces all existing) the tags of the workflow
   * @param name
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public setWorkflowTags(
    name: string,
    requestBody: Array<Tag>,
  ): CancelablePromise<Record<string, any>> {
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
}
