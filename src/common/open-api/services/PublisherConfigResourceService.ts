/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PublisherConfigResourceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get all publisher configurations
   * @returns any OK
   * @throws ApiError
   */
  public listAllConfigs(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/publishers',
    });
  }

  /**
   * Get a publisher config value by id
   * @param id
   * @returns string OK
   * @throws ApiError
   */
  public downloadConfig(
    id: string,
  ): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/publishers/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Put a publisher config value by id
   * @param id
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public uploadConfig(
    id: string,
    requestBody: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/publishers/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete a publisher config value by id
   * @param id
   * @returns any OK
   * @throws ApiError
   */
  public deleteConfig(
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/publishers/{id}',
      path: {
        'id': id,
      },
    });
  }

}
