/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConductorUser } from '../models/ConductorUser';
import type { Response } from '../models/Response';
import type { UpsertUserRequest } from '../models/UpsertUserRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserResourceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get a user by id
   * @param id
   * @returns any OK
   * @throws ApiError
   */
  public getUser(
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/users/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Create or update a user
   * @param id
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public upsertUser(
    id: string,
    requestBody: UpsertUserRequest,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/users/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete a user
   * @param id
   * @returns Response OK
   * @throws ApiError
   */
  public deleteUser(
    id: string,
  ): CancelablePromise<Response> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/users/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get all users
   * @param apps
   * @returns ConductorUser OK
   * @throws ApiError
   */
  public listUsers(
    apps: boolean = false,
  ): CancelablePromise<Array<ConductorUser>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/users',
      query: {
        'apps': apps,
      },
    });
  }

  /**
   * Get the permissions this user has over workflows and tasks
   * @param userId
   * @returns any OK
   * @throws ApiError
   */
  public getGrantedPermissions1(
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/users/{userId}/permissions',
      path: {
        'userId': userId,
      },
    });
  }

}
