/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class LimitsResourceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any OK
   * @throws ApiError
   */
  public get1(): CancelablePromise<Record<string, Record<string, any>>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/limits',
    });
  }
}
