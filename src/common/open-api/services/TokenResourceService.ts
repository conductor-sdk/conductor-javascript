/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenerateTokenRequest } from '../models/GenerateTokenRequest';
import type { Response } from '../models/Response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TokenResourceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Generate JWT with the given access key
   * @param requestBody
   * @returns Response OK
   * @throws ApiError
   */
  public generateToken(
    requestBody: GenerateTokenRequest,
  ): CancelablePromise<Response> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/token',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get the user info from the token
   * @param principal
   * @returns any OK
   * @throws ApiError
   */
  public getUserInfo(
    principal: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/token/userInfo',
      query: {
        'principal': principal,
      },
    });
  }

}