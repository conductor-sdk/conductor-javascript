import {ApiRequestOptions} from "./open-api/core/ApiRequestOptions"
import {CancelablePromise} from "./open-api/core/CancelablePromise"
import {OpenAPIConfig} from "./open-api/core/OpenAPI"
import {request as baseRequest} from "./open-api/core/request"

/**
 * A handler to modify requests made by ConductorClient. Useful for metrics/option transformation/etc.
 *
 * @remarks
 * Example: Customizing the request URL
 * ```
 *
 * const requestCustomizer = (request, config, options) =>  {
 *  const url = options.url.replace(/^\/api/, '')
 *  return request(config, {...options, url });
 * }
 * const config = { BASE: "https://my-api.com"}
 * const client = new ConductorClient(config, requestCustomizer)
 * ```
 *
 * @param request the underlying node-fetch powered function
 * @param config @see OpenAPIConfig
 * @param options {see ApiRequestOptions}
 */
export type ConductorHttpRequest = <T>(request: typeof baseRequest, config: OpenAPIConfig, options: ApiRequestOptions) => CancelablePromise<T>
