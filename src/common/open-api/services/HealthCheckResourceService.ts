/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class HealthCheckResourceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any OK
   * @throws ApiError
   */
  public doCheck(): CancelablePromise<Record<string, Record<string, any>>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/health',
    });
  }
}
