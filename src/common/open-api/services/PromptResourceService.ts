/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageTemplate } from '../models/MessageTemplate';
import type { PromptTemplateTestRequest } from '../models/PromptTemplateTestRequest';
import type { Tag } from '../models/Tag';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PromptResourceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get Templates
   * @returns MessageTemplate OK
   * @throws ApiError
   */
  public getMessageTemplates(): CancelablePromise<Array<MessageTemplate>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/prompts',
    });
  }
  /**
   * Create message templates in bulk
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public createMessageTemplates(
    requestBody: Array<MessageTemplate>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/prompts/',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Test Prompt Template
   * @param requestBody
   * @returns string OK
   * @throws ApiError
   */
  public testMessageTemplate(
    requestBody: PromptTemplateTestRequest,
  ): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/prompts/test',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Delete Template
   * @param name
   * @returns any OK
   * @throws ApiError
   */
  public deleteMessageTemplate(
    name: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/prompts/{name}',
      path: {
        'name': name,
      },
    });
  }
  /**
   * Get Template
   * @param name
   * @returns MessageTemplate OK
   * @throws ApiError
   */
  public getMessageTemplate(
    name: string,
  ): CancelablePromise<MessageTemplate> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/prompts/{name}',
      path: {
        'name': name,
      },
    });
  }
  /**
   * Create or Update a template
   * @param name
   * @param description
   * @param requestBody
   * @param models
   * @returns any OK
   * @throws ApiError
   */
  public saveMessageTemplate(
    name: string,
    description: string,
    requestBody: string,
    models?: Array<string>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/prompts/{name}',
      path: {
        'name': name,
      },
      query: {
        'description': description,
        'models': models,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Delete a tag for Prompt Template
   * @param name
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public deleteTagForPromptTemplate(
    name: string,
    requestBody: Array<Tag>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/prompts/{name}/tags',
      path: {
        'name': name,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get tags by Prompt Template
   * @param name
   * @returns Tag OK
   * @throws ApiError
   */
  public getTagsForPromptTemplate(
    name: string,
  ): CancelablePromise<Array<Tag>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/prompts/{name}/tags',
      path: {
        'name': name,
      },
    });
  }
  /**
   * Put a tag to Prompt Template
   * @param name
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public putTagForPromptTemplate(
    name: string,
    requestBody: Array<Tag>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/prompts/{name}/tags',
      path: {
        'name': name,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
