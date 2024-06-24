/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConnectivityTestInput } from '../models/ConnectivityTestInput';
import type { ConnectivityTestResult } from '../models/ConnectivityTestResult';
import type { EventHandler } from '../models/EventHandler';
import type { Tag } from '../models/Tag';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EventResourceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get all the event handlers
   * @returns EventHandler OK
   * @throws ApiError
   */
  public getEventHandlers(): CancelablePromise<Array<EventHandler>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/event',
    });
  }
  /**
   * Add a new event handler.
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public addEventHandler(
    requestBody: Array<EventHandler>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/event',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Update an existing event handler.
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public updateEventHandler(
    requestBody: EventHandler,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/event',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Handle an incoming event
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public handleIncomingEvent(
    requestBody: Record<string, Record<string, any>>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/event/handleIncomingEvent',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get event handler by name
   * @param name
   * @returns EventHandler OK
   * @throws ApiError
   */
  public getEventHandlerByName(
    name: string,
  ): CancelablePromise<EventHandler> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/event/handler/{name}',
      path: {
        'name': name,
      },
    });
  }
  /**
   * Get all queue configs
   * @returns string OK
   * @throws ApiError
   */
  public getQueueNames(): CancelablePromise<Record<string, string>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/event/queue/config',
    });
  }
  /**
   * Delete queue config by name
   * @param queueType
   * @param queueName
   * @returns any OK
   * @throws ApiError
   */
  public deleteQueueConfig(
    queueType: string,
    queueName: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/event/queue/config/{queueType}/{queueName}',
      path: {
        'queueType': queueType,
        'queueName': queueName,
      },
    });
  }
  /**
   * Get queue config by name
   * @param queueType
   * @param queueName
   * @returns any OK
   * @throws ApiError
   */
  public getQueueConfig(
    queueType: string,
    queueName: string,
  ): CancelablePromise<Record<string, Record<string, any>>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/event/queue/config/{queueType}/{queueName}',
      path: {
        'queueType': queueType,
        'queueName': queueName,
      },
    });
  }
  /**
   * @deprecated
   * Create or update queue config by name
   * @param queueType
   * @param queueName
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public putQueueConfig(
    queueType: string,
    queueName: string,
    requestBody: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/event/queue/config/{queueType}/{queueName}',
      path: {
        'queueType': queueType,
        'queueName': queueName,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Test connectivity for a given queue using a workflow with EVENT task and an EventHandler
   * @param requestBody
   * @returns ConnectivityTestResult OK
   * @throws ApiError
   */
  public testConnectivity(
    requestBody: ConnectivityTestInput,
  ): CancelablePromise<ConnectivityTestResult> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/event/queue/connectivity',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get event handlers for a given event
   * @param event
   * @param activeOnly
   * @returns EventHandler OK
   * @throws ApiError
   */
  public getEventHandlersForEvent(
    event: string,
    activeOnly: boolean = true,
  ): CancelablePromise<Array<EventHandler>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/event/{event}',
      path: {
        'event': event,
      },
      query: {
        'activeOnly': activeOnly,
      },
    });
  }
  /**
   * Remove an event handler
   * @param name
   * @returns any OK
   * @throws ApiError
   */
  public removeEventHandlerStatus(
    name: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/event/{name}',
      path: {
        'name': name,
      },
    });
  }
  /**
   * Delete a tag for event handler
   * @param name
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public deleteTagForEventHandler(
    name: string,
    requestBody: Array<Tag>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/event/{name}/tags',
      path: {
        'name': name,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get tags by event handler
   * @param name
   * @returns Tag OK
   * @throws ApiError
   */
  public getTagsForEventHandler(
    name: string,
  ): CancelablePromise<Array<Tag>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/event/{name}/tags',
      path: {
        'name': name,
      },
    });
  }
  /**
   * Put a tag to event handler
   * @param name
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public putTagForEventHandler(
    name: string,
    requestBody: Array<Tag>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/event/{name}/tags',
      path: {
        'name': name,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
