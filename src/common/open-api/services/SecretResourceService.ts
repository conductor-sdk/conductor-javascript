/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SecretResourceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get secret value by key
   * @param key
   * @returns any OK
   * @throws ApiError
   */
  public getSecret(
    key: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/secrets/{key}',
      path: {
        'key': key,
      },
    });
  }

  /**
   * Put a secret value by key
   * @param key
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public putSecret(
    key: string,
    requestBody: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/secrets/{key}',
      path: {
        'key': key,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete a secret value by key
   * @param key
   * @returns any OK
   * @throws ApiError
   */
  public deleteSecret(
    key: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/secrets/{key}',
      path: {
        'key': key,
      },
    });
  }

  /**
   * List all secret names user can grant access to
   * @returns string OK
   * @throws ApiError
   */
  public listSecretsThatUserCanGrantAccessTo(): CancelablePromise<Array<string>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/secrets',
    });
  }

  /**
   * List all secret names
   * @returns any OK
   * @throws ApiError
   */
  public listAllSecretNames(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/secrets',
    });
  }

  /**
   * Check if secret exists
   * @param key
   * @returns any OK
   * @throws ApiError
   */
  public secretExists(
    key: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/secrets/{key}/exists',
      path: {
        'key': key,
      },
    });
  }

}
