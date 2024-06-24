/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtendedSecret } from '../models/ExtendedSecret';
import type { Tag } from '../models/Tag';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SecretResourceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * List all secret names user can grant access to
   * @returns string OK
   * @throws ApiError
   */
  public listSecretsThatUserCanGrantAccessTo(): CancelablePromise<Array<string>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/secrets',
    });
  }
  /**
   * List all secret names
   * @returns string OK
   * @throws ApiError
   */
  public listAllSecretNames(): CancelablePromise<Array<string>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/secrets',
    });
  }
  /**
   * List all secret names along with tags user can grant access to
   * @returns ExtendedSecret OK
   * @throws ApiError
   */
  public listSecretsWithTagsThatUserCanGrantAccessTo(): CancelablePromise<Array<ExtendedSecret>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/secrets-v2',
    });
  }
  /**
   * Clear local cache
   * @returns string OK
   * @throws ApiError
   */
  public clearLocalCache(): CancelablePromise<Record<string, string>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/secrets/clearLocalCache',
    });
  }
  /**
   * Clear redis cache
   * @returns string OK
   * @throws ApiError
   */
  public clearRedisCache(): CancelablePromise<Record<string, string>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/secrets/clearRedisCache',
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
  ): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/secrets/{key}',
      path: {
        'key': key,
      },
    });
  }
  /**
   * Get secret value by key
   * @param key
   * @returns string OK
   * @throws ApiError
   */
  public getSecret(
    key: string,
  ): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/secrets/{key}',
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
  ): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/secrets/{key}',
      path: {
        'key': key,
      },
      body: requestBody,
      mediaType: 'application/json',
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
  ): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/secrets/{key}/exists',
      path: {
        'key': key,
      },
    });
  }
  /**
   * Delete tags of the secret
   * @param key
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public deleteTagForSecret(
    key: string,
    requestBody: Array<Tag>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/secrets/{key}/tags',
      path: {
        'key': key,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get tags by secret
   * @param key
   * @returns Tag OK
   * @throws ApiError
   */
  public getTags(
    key: string,
  ): CancelablePromise<Array<Tag>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/secrets/{key}/tags',
      path: {
        'key': key,
      },
    });
  }
  /**
   * Tag a secret
   * @param key
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public putTagForSecret(
    key: string,
    requestBody: Array<Tag>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/secrets/{key}/tags',
      path: {
        'key': key,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
