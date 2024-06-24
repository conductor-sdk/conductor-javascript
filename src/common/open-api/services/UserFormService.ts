/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HumanTaskTemplate } from '../models/HumanTaskTemplate';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UserFormService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * List all user form templates or get templates by name, or a template by name and version
   * @param name
   * @param version
   * @returns HumanTaskTemplate OK
   * @throws ApiError
   */
  public getAllTemplates(
    name?: string,
    version?: number,
  ): CancelablePromise<Array<HumanTaskTemplate>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/human/template',
      query: {
        'name': name,
        'version': version,
      },
    });
  }
  /**
   * Save user form template
   * @param requestBody
   * @param newVersion
   * @returns HumanTaskTemplate OK
   * @throws ApiError
   */
  public saveTemplate(
    requestBody: HumanTaskTemplate,
    newVersion: boolean = false,
  ): CancelablePromise<HumanTaskTemplate> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/human/template',
      query: {
        'newVersion': newVersion,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Save user form template
   * @param requestBody
   * @param newVersion
   * @returns HumanTaskTemplate OK
   * @throws ApiError
   */
  public saveTemplates(
    requestBody: Array<HumanTaskTemplate>,
    newVersion: boolean = false,
  ): CancelablePromise<Array<HumanTaskTemplate>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/human/template/bulk',
      query: {
        'newVersion': newVersion,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get user form by human task id
   * @param humanTaskId
   * @returns HumanTaskTemplate OK
   * @throws ApiError
   */
  public getTemplateByTaskId(
    humanTaskId: string,
  ): CancelablePromise<HumanTaskTemplate> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/human/template/{humanTaskId}',
      path: {
        'humanTaskId': humanTaskId,
      },
    });
  }
  /**
   * Delete all versions of user form template by name
   * @param name
   * @returns any OK
   * @throws ApiError
   */
  public deleteTemplateByName(
    name: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/human/template/{name}',
      path: {
        'name': name,
      },
    });
  }
  /**
   * Get user form template by name and version
   * @param name
   * @param version
   * @returns HumanTaskTemplate OK
   * @throws ApiError
   */
  public getTemplateByNameAndVersion(
    name: string,
    version: number,
  ): CancelablePromise<HumanTaskTemplate> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/human/template/{name}/{version}',
      path: {
        'name': name,
        'version': version,
      },
    });
  }
}
