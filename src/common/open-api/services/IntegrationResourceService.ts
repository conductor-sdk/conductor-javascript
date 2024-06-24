/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventLog } from '../models/EventLog';
import type { Integration } from '../models/Integration';
import type { IntegrationApi } from '../models/IntegrationApi';
import type { IntegrationApiUpdate } from '../models/IntegrationApiUpdate';
import type { IntegrationDef } from '../models/IntegrationDef';
import type { IntegrationUpdate } from '../models/IntegrationUpdate';
import type { MessageTemplate } from '../models/MessageTemplate';
import type { Tag } from '../models/Tag';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class IntegrationResourceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get all Integrations
   * @param category
   * @param activeOnly
   * @returns Integration OK
   * @throws ApiError
   */
  public getAllIntegrations(
    category?: string,
    activeOnly: boolean = true,
  ): CancelablePromise<Array<Integration>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/integrations/',
      query: {
        'category': category,
        'activeOnly': activeOnly,
      },
    });
  }
  /**
   * Save all Integrations
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public saveAllIntegrations(
    requestBody: Array<Integration>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/integrations/',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get Integrations Providers and Integrations combo
   * @param type
   * @param activeOnly
   * @returns string OK
   * @throws ApiError
   */
  public getProvidersAndIntegrations(
    type?: string,
    activeOnly: boolean = true,
  ): CancelablePromise<Array<string>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/integrations/all',
      query: {
        'type': type,
        'activeOnly': activeOnly,
      },
    });
  }
  /**
   * Get Integration provider definitions
   * @returns IntegrationDef OK
   * @throws ApiError
   */
  public getIntegrationProviderDefs(): CancelablePromise<Array<IntegrationDef>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/integrations/def',
    });
  }
  /**
   * Record Event Stats
   * @param type
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public recordEventStats(
    type: string,
    requestBody: Array<EventLog>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/integrations/eventStats/{type}',
      query: {
        'type': type,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get all Integrations Providers
   * @param category
   * @param activeOnly
   * @returns Integration OK
   * @throws ApiError
   */
  public getIntegrationProviders(
    category?: string,
    activeOnly: boolean = true,
  ): CancelablePromise<Array<Integration>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/integrations/provider',
      query: {
        'category': category,
        'activeOnly': activeOnly,
      },
    });
  }
  /**
   * Get the list of prompt templates associated with an integration
   * @param integrationProvider
   * @param integrationName
   * @returns MessageTemplate OK
   * @throws ApiError
   */
  public getPromptsWithIntegration(
    integrationProvider: string,
    integrationName: string,
  ): CancelablePromise<Array<MessageTemplate>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/integrations/provider/{integration_provider}/integration/{integration_name}/prompt',
      path: {
        'integration_provider': integrationProvider,
        'integration_name': integrationName,
      },
    });
  }
  /**
   * Associate a Prompt Template with an Integration
   * @param integrationProvider
   * @param integrationName
   * @param promptName
   * @returns any OK
   * @throws ApiError
   */
  public associatePromptWithIntegration(
    integrationProvider: string,
    integrationName: string,
    promptName: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/integrations/provider/{integration_provider}/integration/{integration_name}/prompt/{prompt_name}',
      path: {
        'integration_provider': integrationProvider,
        'integration_name': integrationName,
        'prompt_name': promptName,
      },
    });
  }
  /**
   * Delete an Integration Provider
   * @param name
   * @returns any OK
   * @throws ApiError
   */
  public deleteIntegrationProvider(
    name: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/integrations/provider/{name}',
      path: {
        'name': name,
      },
    });
  }
  /**
   * Get Integration provider
   * @param name
   * @returns Integration OK
   * @throws ApiError
   */
  public getIntegrationProvider(
    name: string,
  ): CancelablePromise<Integration> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/integrations/provider/{name}',
      path: {
        'name': name,
      },
    });
  }
  /**
   * Create or Update Integration provider
   * @param name
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public saveIntegrationProvider(
    name: string,
    requestBody: IntegrationUpdate,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/integrations/provider/{name}',
      path: {
        'name': name,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get Integrations of an Integration Provider
   * @param name
   * @param activeOnly
   * @returns IntegrationApi OK
   * @throws ApiError
   */
  public getIntegrationApis(
    name: string,
    activeOnly: boolean = true,
  ): CancelablePromise<Array<IntegrationApi>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/integrations/provider/{name}/integration',
      path: {
        'name': name,
      },
      query: {
        'activeOnly': activeOnly,
      },
    });
  }
  /**
   * Get Integrations Available for an Integration Provider
   * @param name
   * @returns string OK
   * @throws ApiError
   */
  public getIntegrationAvailableApis(
    name: string,
  ): CancelablePromise<Array<string>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/integrations/provider/{name}/integration/all',
      path: {
        'name': name,
      },
    });
  }
  /**
   * Delete an Integration
   * @param name
   * @param integrationName
   * @returns any OK
   * @throws ApiError
   */
  public deleteIntegrationApi(
    name: string,
    integrationName: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/integrations/provider/{name}/integration/{integration_name}',
      path: {
        'name': name,
        'integration_name': integrationName,
      },
    });
  }
  /**
   * Get Integration details
   * @param name
   * @param integrationName
   * @returns IntegrationApi OK
   * @throws ApiError
   */
  public getIntegrationApi(
    name: string,
    integrationName: string,
  ): CancelablePromise<IntegrationApi> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/integrations/provider/{name}/integration/{integration_name}',
      path: {
        'name': name,
        'integration_name': integrationName,
      },
    });
  }
  /**
   * Create or Update Integration
   * @param name
   * @param integrationName
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public saveIntegrationApi(
    name: string,
    integrationName: string,
    requestBody: IntegrationApiUpdate,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/integrations/provider/{name}/integration/{integration_name}',
      path: {
        'name': name,
        'integration_name': integrationName,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get Token Usage by Integration
   * @param name
   * @param integrationName
   * @returns number OK
   * @throws ApiError
   */
  public getTokenUsageForIntegration(
    name: string,
    integrationName: string,
  ): CancelablePromise<number> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/integrations/provider/{name}/integration/{integration_name}/metrics',
      path: {
        'name': name,
        'integration_name': integrationName,
      },
    });
  }
  /**
   * Register Token usage
   * @param name
   * @param integrationName
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public registerTokenUsage(
    name: string,
    integrationName: string,
    requestBody: number,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/integrations/provider/{name}/integration/{integration_name}/metrics',
      path: {
        'name': name,
        'integration_name': integrationName,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Delete a tag for Integration
   * @param name
   * @param integrationName
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public deleteTagForIntegration(
    name: string,
    integrationName: string,
    requestBody: Array<Tag>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/integrations/provider/{name}/integration/{integration_name}/tags',
      path: {
        'name': name,
        'integration_name': integrationName,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get tags by Integration
   * @param name
   * @param integrationName
   * @returns Tag OK
   * @throws ApiError
   */
  public getTagsForIntegration(
    name: string,
    integrationName: string,
  ): CancelablePromise<Array<Tag>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/integrations/provider/{name}/integration/{integration_name}/tags',
      path: {
        'name': name,
        'integration_name': integrationName,
      },
    });
  }
  /**
   * Put a tag to Integration
   * @param name
   * @param integrationName
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public putTagForIntegration(
    name: string,
    integrationName: string,
    requestBody: Array<Tag>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/integrations/provider/{name}/integration/{integration_name}/tags',
      path: {
        'name': name,
        'integration_name': integrationName,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get Token Usage by Integration Provider
   * @param name
   * @returns string OK
   * @throws ApiError
   */
  public getTokenUsageForIntegrationProvider(
    name: string,
  ): CancelablePromise<Record<string, string>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/integrations/provider/{name}/metrics',
      path: {
        'name': name,
      },
    });
  }
  /**
   * Delete a tag for Integration Provider
   * @param name
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public deleteTagForIntegrationProvider(
    name: string,
    requestBody: Array<Tag>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/integrations/provider/{name}/tags',
      path: {
        'name': name,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get tags by Integration Provider
   * @param name
   * @returns Tag OK
   * @throws ApiError
   */
  public getTagsForIntegrationProvider(
    name: string,
  ): CancelablePromise<Array<Tag>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/integrations/provider/{name}/tags',
      path: {
        'name': name,
      },
    });
  }
  /**
   * Put a tag to Integration Provider
   * @param name
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public putTagForIntegrationProvider(
    name: string,
    requestBody: Array<Tag>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/integrations/provider/{name}/tags',
      path: {
        'name': name,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
