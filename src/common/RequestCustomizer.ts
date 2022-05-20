import {NodeHttpRequest} from "./open-api/core/NodeHttpRequest"

/**
 * Useful for customizing the behavior of `http` calls using the `ConductorClient`.
 *
 * @remarks
 * Customizing the request URL
 * ```
 * class Customizer extends RequestCustomizer {
 *  request(options) {
 *    const url = options.url.replace(/^\/api/, '')
 *    return super.request({...options, url });
 *  }
 *}
 * const config = { BASE: "https://my-api.com"}
 * const client = new ConductorClient(config, Customizer)
 * ```
 */
export class RequestCustomizer extends NodeHttpRequest {}
