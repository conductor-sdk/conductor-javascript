import { ConductorHttpRequest } from "../common/RequestCustomizer";
import { fetchCache } from "./request/fetchCatchDns";
import { request as baseRequest } from "./request";
import { baseOrkesConductorClient } from "./BaseOrkesConductorClient";


const defaultRequestHandler: ConductorHttpRequest = (
  __request,
  config,
  options
) => baseRequest(config, options, fetchCache);
/**
 * Takes a config with keyId and keySecret returns a promise with an instance of ConductorClient
 *
 * @param config ConductorClientConfig with keyId and keySecret
 * @param requestHandler (optional) ConductorHttpRequest handler
 * @returns
 */
export const orkesConductorClient = baseOrkesConductorClient(
  fetchCache,
  defaultRequestHandler
);
