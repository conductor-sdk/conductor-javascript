/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GrantedAccessResponse } from '../models/GrantedAccessResponse';
import type { Group } from '../models/Group';
import type { Response } from '../models/Response';
import type { UpsertGroupRequest } from '../models/UpsertGroupRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GroupResourceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get all groups
   * @returns Group OK
   * @throws ApiError
   */
  public listGroups(): CancelablePromise<Array<Group>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/groups',
    });
  }
  /**
   * Get the permissions this group has over workflows and tasks
   * @param groupId
   * @returns GrantedAccessResponse OK
   * @throws ApiError
   */
  public getGrantedPermissions1(
    groupId: string,
  ): CancelablePromise<GrantedAccessResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/groups/{groupId}/permissions',
      path: {
        'groupId': groupId,
      },
    });
  }
  /**
   * Remove users from group
   * @param groupId
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public removeUsersFromGroup(
    groupId: string,
    requestBody: Array<string>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/groups/{groupId}/users',
      path: {
        'groupId': groupId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Add users to group
   * @param groupId
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public addUsersToGroup(
    groupId: string,
    requestBody: Array<string>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/groups/{groupId}/users',
      path: {
        'groupId': groupId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Remove user from group
   * @param groupId
   * @param userId
   * @returns any OK
   * @throws ApiError
   */
  public removeUserFromGroup(
    groupId: string,
    userId: string,
  ): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/groups/{groupId}/users/{userId}',
      path: {
        'groupId': groupId,
        'userId': userId,
      },
    });
  }
  /**
   * Add user to group
   * @param groupId
   * @param userId
   * @returns any OK
   * @throws ApiError
   */
  public addUserToGroup(
    groupId: string,
    userId: string,
  ): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/groups/{groupId}/users/{userId}',
      path: {
        'groupId': groupId,
        'userId': userId,
      },
    });
  }
  /**
   * Delete a group
   * @param id
   * @returns Response OK
   * @throws ApiError
   */
  public deleteGroup(
    id: string,
  ): CancelablePromise<Response> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/groups/{id}',
      path: {
        'id': id,
      },
    });
  }
  /**
   * Get a group by id
   * @param id
   * @returns any OK
   * @throws ApiError
   */
  public getGroup(
    id: string,
  ): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/groups/{id}',
      path: {
        'id': id,
      },
    });
  }
  /**
   * Create or update a group
   * @param id
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public upsertGroup(
    id: string,
    requestBody: UpsertGroupRequest,
  ): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/groups/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get all users in group
   * @param id
   * @returns any OK
   * @throws ApiError
   */
  public getUsersInGroup(
    id: string,
  ): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/groups/{id}/users',
      path: {
        'id': id,
      },
    });
  }
}
