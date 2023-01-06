import { ConductorHttpRequest } from "../RequestCustomizer";
import {
  ConductorClient,
  ConductorClientAPIConfig,
} from "../open-api/ConductorClient";
import { GenerateTokenRequest } from "../open-api";

export type OrkesApiConfig = ConductorClientAPIConfig & GenerateTokenRequest;

const defaultRequestHandler: ConductorHttpRequest = (
  request,
  config,
  options
) => request(config, options);
/**
 * Takes a config with keyId and keySecret returns a promise with an instance of ConductorClient
 *
 * @param config ConductorClientConfig with keyId and keySecret
 * @param requestHandler (optional) ConductorHttpRequest handler
 * @returns
 */
export const orkesConductorClient = async (
  config?: Partial<OrkesApiConfig>,
  requestHandler: ConductorHttpRequest = defaultRequestHandler
): Promise<ConductorClient> => {
  if (config?.keySecret != null && config?.keyId != null) {
    const { serverUrl, keyId, keySecret } = config;
    const tokenUrl = `${serverUrl}/token`;
    const res = await fetch(tokenUrl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ keyId, keySecret }),
      method: "POST",
    });
    const { token } = await res.json();
    return new ConductorClient({ ...config, TOKEN: token }, requestHandler);
  } else {
    return Promise.resolve(new ConductorClient(config, requestHandler));
  }
};
