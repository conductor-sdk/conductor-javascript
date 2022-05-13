/* tslint:disable */
/* eslint-disable */
/**
 * Conductor API Server
 * Conductor API Server
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    EventHandler,
    EventHandlerFromJSON,
    EventHandlerToJSON,
} from '../models';

export interface AddEventHandlerRequest {
    eventHandler: EventHandler;
}

export interface GetEventHandlersForEventRequest {
    event: string;
    activeOnly?: boolean;
}

export interface RemoveEventHandlerStatusRequest {
    name: string;
}

export interface UpdateEventHandlerRequest {
    eventHandler: EventHandler;
}

/**
 * 
 */
export class EventResourceApi extends runtime.BaseAPI {

    /**
     * Add a new event handler.
     */
    async addEventHandlerRaw(requestParameters: AddEventHandlerRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.eventHandler === null || requestParameters.eventHandler === undefined) {
            throw new runtime.RequiredError('eventHandler','Required parameter requestParameters.eventHandler was null or undefined when calling addEventHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Authorization"] = this.configuration.apiKey("X-Authorization"); // api_key authentication
        }

        const response = await this.request({
            path: `/api/event`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EventHandlerToJSON(requestParameters.eventHandler),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Add a new event handler.
     */
    async addEventHandler(requestParameters: AddEventHandlerRequest, initOverrides?: RequestInit): Promise<void> {
        await this.addEventHandlerRaw(requestParameters, initOverrides);
    }

    /**
     * Get all the event handlers
     */
    async getEventHandlersRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<EventHandler>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Authorization"] = this.configuration.apiKey("X-Authorization"); // api_key authentication
        }

        const response = await this.request({
            path: `/api/event`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EventHandlerFromJSON));
    }

    /**
     * Get all the event handlers
     */
    async getEventHandlers(initOverrides?: RequestInit): Promise<Array<EventHandler>> {
        const response = await this.getEventHandlersRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get event handlers for a given event
     */
    async getEventHandlersForEventRaw(requestParameters: GetEventHandlersForEventRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<EventHandler>>> {
        if (requestParameters.event === null || requestParameters.event === undefined) {
            throw new runtime.RequiredError('event','Required parameter requestParameters.event was null or undefined when calling getEventHandlersForEvent.');
        }

        const queryParameters: any = {};

        if (requestParameters.activeOnly !== undefined) {
            queryParameters['activeOnly'] = requestParameters.activeOnly;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Authorization"] = this.configuration.apiKey("X-Authorization"); // api_key authentication
        }

        const response = await this.request({
            path: `/api/event/{event}`.replace(`{${"event"}}`, encodeURIComponent(String(requestParameters.event))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EventHandlerFromJSON));
    }

    /**
     * Get event handlers for a given event
     */
    async getEventHandlersForEvent(requestParameters: GetEventHandlersForEventRequest, initOverrides?: RequestInit): Promise<Array<EventHandler>> {
        const response = await this.getEventHandlersForEventRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove an event handler
     */
    async removeEventHandlerStatusRaw(requestParameters: RemoveEventHandlerStatusRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling removeEventHandlerStatus.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Authorization"] = this.configuration.apiKey("X-Authorization"); // api_key authentication
        }

        const response = await this.request({
            path: `/api/event/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Remove an event handler
     */
    async removeEventHandlerStatus(requestParameters: RemoveEventHandlerStatusRequest, initOverrides?: RequestInit): Promise<void> {
        await this.removeEventHandlerStatusRaw(requestParameters, initOverrides);
    }

    /**
     * Update an existing event handler.
     */
    async updateEventHandlerRaw(requestParameters: UpdateEventHandlerRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.eventHandler === null || requestParameters.eventHandler === undefined) {
            throw new runtime.RequiredError('eventHandler','Required parameter requestParameters.eventHandler was null or undefined when calling updateEventHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Authorization"] = this.configuration.apiKey("X-Authorization"); // api_key authentication
        }

        const response = await this.request({
            path: `/api/event`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: EventHandlerToJSON(requestParameters.eventHandler),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update an existing event handler.
     */
    async updateEventHandler(requestParameters: UpdateEventHandlerRequest, initOverrides?: RequestInit): Promise<void> {
        await this.updateEventHandlerRaw(requestParameters, initOverrides);
    }

}
