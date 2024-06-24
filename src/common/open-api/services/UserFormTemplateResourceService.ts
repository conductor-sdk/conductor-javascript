/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Tag } from '../models/Tag';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UserFormTemplateResourceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Delete a tag for template name
   * @param name
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public deleteTagForUserFormTemplate(
    name: string,
    requestBody: Array<Tag>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/human/template/{name}/tags',
      path: {
        'name': name,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get tags by template name
   * @param name
   * @returns Tag OK
   * @throws ApiError
   */
  public getTagsForUserFormTemplate(
    name: string,
  ): CancelablePromise<Array<Tag>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/human/template/{name}/tags',
      path: {
        'name': name,
      },
    });
  }
  /**
   * Put a tag to template name
   * @param name
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public putTagForUserFormTemplate(
    name: string,
    requestBody: Array<Tag>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/human/template/{name}/tags',
      path: {
        'name': name,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
