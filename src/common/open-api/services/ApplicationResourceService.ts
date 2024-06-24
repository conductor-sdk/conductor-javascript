/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateOrUpdateApplicationRequest } from '../models/CreateOrUpdateApplicationRequest';
import type { ExtendedConductorApplication } from '../models/ExtendedConductorApplication';
import type { Tag } from '../models/Tag';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ApplicationResourceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get all applications
   * @returns ExtendedConductorApplication OK
   * @throws ApiError
   */
  public listApplications(): CancelablePromise<Array<ExtendedConductorApplication>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/applications',
    });
  }
  /**
   * Create an application
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public createApplication(
    requestBody: CreateOrUpdateApplicationRequest,
  ): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/applications',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get application id by access key id
   * @param accessKeyId
   * @returns any OK
   * @throws ApiError
   */
  public getAppByAccessKeyId(
    accessKeyId: string,
  ): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/applications/key/{accessKeyId}',
      path: {
        'accessKeyId': accessKeyId,
      },
    });
  }
  /**
   * Delete an access key
   * @param applicationId
   * @param keyId
   * @returns any OK
   * @throws ApiError
   */
  public deleteAccessKey(
    applicationId: string,
    keyId: string,
  ): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/applications/{applicationId}/accessKeys/{keyId}',
      path: {
        'applicationId': applicationId,
        'keyId': keyId,
      },
    });
  }
  /**
   * Toggle the status of an access key
   * @param applicationId
   * @param keyId
   * @returns any OK
   * @throws ApiError
   */
  public toggleAccessKeyStatus(
    applicationId: string,
    keyId: string,
  ): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/applications/{applicationId}/accessKeys/{keyId}/status',
      path: {
        'applicationId': applicationId,
        'keyId': keyId,
      },
    });
  }
  /**
   * @param applicationId
   * @param role
   * @returns any OK
   * @throws ApiError
   */
  public removeRoleFromApplicationUser(
    applicationId: string,
    role: string,
  ): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/applications/{applicationId}/roles/{role}',
      path: {
        'applicationId': applicationId,
        'role': role,
      },
    });
  }
  /**
   * @param applicationId
   * @param role
   * @returns any OK
   * @throws ApiError
   */
  public addRoleToApplicationUser(
    applicationId: string,
    role: string,
  ): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/applications/{applicationId}/roles/{role}',
      path: {
        'applicationId': applicationId,
        'role': role,
      },
    });
  }
  /**
   * Delete an application
   * @param id
   * @returns any OK
   * @throws ApiError
   */
  public deleteApplication(
    id: string,
  ): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/applications/{id}',
      path: {
        'id': id,
      },
    });
  }
  /**
   * Get an application by id
   * @param id
   * @returns any OK
   * @throws ApiError
   */
  public getApplication(
    id: string,
  ): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/applications/{id}',
      path: {
        'id': id,
      },
    });
  }
  /**
   * Update an application
   * @param id
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public updateApplication(
    id: string,
    requestBody: CreateOrUpdateApplicationRequest,
  ): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/applications/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get application's access keys
   * @param id
   * @returns any OK
   * @throws ApiError
   */
  public getAccessKeys(
    id: string,
  ): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/applications/{id}/accessKeys',
      path: {
        'id': id,
      },
    });
  }
  /**
   * Create an access key for an application
   * @param id
   * @returns any OK
   * @throws ApiError
   */
  public createAccessKey(
    id: string,
  ): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/applications/{id}/accessKeys',
      path: {
        'id': id,
      },
    });
  }
  /**
   * Delete a tag for application
   * @param id
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public deleteTagForApplication(
    id: string,
    requestBody: Array<Tag>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/applications/{id}/tags',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get tags by application
   * @param id
   * @returns Tag OK
   * @throws ApiError
   */
  public getTagsForApplication(
    id: string,
  ): CancelablePromise<Array<Tag>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/applications/{id}/tags',
      path: {
        'id': id,
      },
    });
  }
  /**
   * Put a tag to application
   * @param id
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public putTagForApplication(
    id: string,
    requestBody: Array<Tag>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/applications/{id}/tags',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
