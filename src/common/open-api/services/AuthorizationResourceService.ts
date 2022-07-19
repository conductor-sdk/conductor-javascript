/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthorizationRequest } from '../models/AuthorizationRequest';
import type { Response } from '../models/Response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuthorizationResourceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Grant access to a user over the target
   * @param requestBody
   * @returns Response OK
   * @throws ApiError
   */
  public grantPermissions(
    requestBody: AuthorizationRequest,
  ): CancelablePromise<Response> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/auth/authorization',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Remove user's access over the target
   * @param requestBody
   * @returns Response OK
   * @throws ApiError
   */
  public removePermissions(
    requestBody: AuthorizationRequest,
  ): CancelablePromise<Response> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/auth/authorization',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get the access that have been granted over the given object
   * @param type
   * @param id
   * @returns any OK
   * @throws ApiError
   */
  public getPermissions(
    type: string,
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/auth/authorization/{type}/{id}',
      path: {
        'type': type,
        'id': id,
      },
    });
  }

}
