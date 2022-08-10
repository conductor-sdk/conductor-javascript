/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class VersionResourceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get the server's version
   * @returns string OK
   * @throws ApiError
   */
  public getVersion(): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/version',
    });
  }

}
