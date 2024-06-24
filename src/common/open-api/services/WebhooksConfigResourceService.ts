/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Tag } from '../models/Tag';
import type { WebhookConfig } from '../models/WebhookConfig';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WebhooksConfigResourceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns WebhookConfig OK
   * @throws ApiError
   */
  public getAllWebhook(): CancelablePromise<Array<WebhookConfig>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metadata/webhook',
    });
  }
  /**
   * @param requestBody
   * @returns WebhookConfig OK
   * @throws ApiError
   */
  public createWebhook(
    requestBody: WebhookConfig,
  ): CancelablePromise<WebhookConfig> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/metadata/webhook',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * @param id
   * @returns any OK
   * @throws ApiError
   */
  public deleteWebhook(
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/metadata/webhook/{id}',
      path: {
        'id': id,
      },
    });
  }
  /**
   * @param id
   * @returns WebhookConfig OK
   * @throws ApiError
   */
  public getWebhook(
    id: string,
  ): CancelablePromise<WebhookConfig> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metadata/webhook/{id}',
      path: {
        'id': id,
      },
    });
  }
  /**
   * @param id
   * @param requestBody
   * @returns WebhookConfig OK
   * @throws ApiError
   */
  public updateWebhook(
    id: string,
    requestBody: WebhookConfig,
  ): CancelablePromise<WebhookConfig> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/metadata/webhook/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Delete a tag for webhook id
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public deleteTagForWebhook(
    requestBody: Array<Tag>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/metadata/webhook/{id}/tags',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get tags by webhook id
   * @param id
   * @returns Tag OK
   * @throws ApiError
   */
  public getTagsForWebhook(
    id: string,
  ): CancelablePromise<Array<Tag>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metadata/webhook/{id}/tags',
      path: {
        'id': id,
      },
    });
  }
  /**
   * Put a tag to webhook id
   * @param id
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public putTagForWebhook(
    id: string,
    requestBody: Array<Tag>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/metadata/webhook/{id}/tags',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
