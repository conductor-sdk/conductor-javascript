import { ConductorHttpRequest } from "../RequestCustomizer";
import {
  ConductorClient,
  ConductorClientAPIConfig,
} from "../open-api/ConductorClient";
import { GenerateTokenRequest } from "../open-api";
import { FetchFn } from "./request";

export type OrkesApiConfig = ConductorClientAPIConfig & GenerateTokenRequest;

const defaultRequestHandler: ConductorHttpRequest = (
  request,
  config,
  options
) => request(config, options);
/*
Returns an orkes conductor client creator function.
Usefull if you want to use your own fetch. like Got or Axios
 */
export const baseOrkesConductorClient = (
  fetchFn: FetchFn,
  baseRequestHandler: ConductorHttpRequest = defaultRequestHandler
) => {
  return async (
    config?: Partial<OrkesApiConfig>,
    requestHandler: ConductorHttpRequest = baseRequestHandler
  ): Promise<ConductorClient> => {
    if (config?.keySecret != null && config?.keyId != null) {
      const { serverUrl, keyId, keySecret } = config;
      const tokenUrl = `${serverUrl}/token`;
      const res = await fetchFn(tokenUrl, {
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
      return new ConductorClient(config, requestHandler);
    }
  };
};
