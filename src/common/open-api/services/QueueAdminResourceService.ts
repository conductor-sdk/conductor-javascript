/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class QueueAdminResourceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get Queue Names
   * @returns string OK
   * @throws ApiError
   */
  public names(): CancelablePromise<Record<string, string>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/queue/',
    });
  }
  /**
   * Get the queue length
   * @returns number OK
   * @throws ApiError
   */
  public size1(): CancelablePromise<Record<string, Record<string, number>>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/queue/size',
    });
  }
}
