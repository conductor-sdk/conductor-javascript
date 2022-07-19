import type { OpenAPIConfig } from "../open-api/core/OpenAPI";
import { ConductorHttpRequest } from "../RequestCustomizer";
import { ConductorClient } from "../open-api/ConductorClient";
import fetch from "node-fetch";

export interface OrkesApiConfig extends OpenAPIConfig {
  keyId?: string;
  keySecret?: string;
}

const defaultRequestHandler: ConductorHttpRequest = (
  request,
  config,
  options
) => request(config, options);

export const orkesConductorClient = async (
  config?: Partial<OrkesApiConfig>,
  requestHandler: ConductorHttpRequest = defaultRequestHandler
): Promise<ConductorClient> => {
  if (config?.keySecret != null && config?.keyId != null) {
    const { BASE, keyId, keySecret } = config;
    const tokenUrl = `${BASE}/api/token`;
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
