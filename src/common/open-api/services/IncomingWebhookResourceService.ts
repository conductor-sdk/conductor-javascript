/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class IncomingWebhookResourceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @param id
   * @param requestParams
   * @returns string OK
   * @throws ApiError
   */
  public handleWebhook1(
    id: string,
    requestParams: Record<string, Record<string, any>>,
  ): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/webhook/{id}',
      path: {
        'id': id,
      },
      query: {
        'requestParams': requestParams,
      },
    });
  }
  /**
   * @param id
   * @param requestParams
   * @param requestBody
   * @returns string OK
   * @throws ApiError
   */
  public handleWebhook(
    id: string,
    requestParams: Record<string, Record<string, any>>,
    requestBody: string,
  ): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/webhook/{id}',
      path: {
        'id': id,
      },
      query: {
        'requestParams': requestParams,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
