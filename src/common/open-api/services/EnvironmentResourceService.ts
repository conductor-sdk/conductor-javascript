/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvironmentVariable } from '../models/EnvironmentVariable';
import type { Tag } from '../models/Tag';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EnvironmentResourceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * List all the environment variables
   * @returns EnvironmentVariable OK
   * @throws ApiError
   */
  public getAll(): CancelablePromise<Array<EnvironmentVariable>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/environment',
    });
  }
  /**
   * Delete an environment variable (requires metadata or admin role)
   * @param key
   * @returns string OK
   * @throws ApiError
   */
  public deleteEnvVariable(
    key: string,
  ): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/environment/{key}',
      path: {
        'key': key,
      },
    });
  }
  /**
   * Get the environment value by key
   * @param key
   * @returns string OK
   * @throws ApiError
   */
  public get2(
    key: string,
  ): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/environment/{key}',
      path: {
        'key': key,
      },
    });
  }
  /**
   * Create or update an environment variable (requires metadata or admin role)
   * @param key
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public createOrUpdateEnvVariable(
    key: string,
    requestBody: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/environment/{key}',
      path: {
        'key': key,
      },
      body: requestBody,
      mediaType: 'text/plain',
    });
  }
  /**
   * Delete a tag for environment variable name
   * @param name
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public deleteTagForEnvVar(
    name: string,
    requestBody: Array<Tag>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/environment/{name}/tags',
      path: {
        'name': name,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get tags by environment variable name
   * @param name
   * @returns Tag OK
   * @throws ApiError
   */
  public getTagsForEnvVar(
    name: string,
  ): CancelablePromise<Array<Tag>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/environment/{name}/tags',
      path: {
        'name': name,
      },
    });
  }
  /**
   * Put a tag to environment variable name
   * @param name
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public putTagForEnvVar(
    name: string,
    requestBody: Array<Tag>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/environment/{name}/tags',
      path: {
        'name': name,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
