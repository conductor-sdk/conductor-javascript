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

/**
 * 
 */
export class HealthCheckResourceApi extends runtime.BaseAPI {

    /**
     */
    async doCheckRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<{ [key: string]: object; }>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Authorization"] = this.configuration.apiKey("X-Authorization"); // api_key authentication
        }

        const response = await this.request({
            path: `/health`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async doCheck(initOverrides?: RequestInit): Promise<{ [key: string]: object; }> {
        const response = await this.doCheckRaw(initOverrides);
        return await response.value();
    }

}
