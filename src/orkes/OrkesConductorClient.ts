import { ConductorHttpRequest } from "../common";
import { request as baseRequest } from "./request/request";
import { baseOrkesConductorClient } from "./BaseOrkesConductorClient";
import { FetchFn } from "./types";

const fetchCache = require("./fetchImplementation");

const defaultRequestHandler: ConductorHttpRequest = (
  __request,
  config,
  options
) => baseRequest(config, options, fetch);

/**
 * Takes a config with keyId and keySecret returns a promise with an instance of ConductorClient
 *
 * @param config ConductorClientConfig with keyId and keySecret
 * @param requestHandler (optional) ConductorHttpRequest handler
 * @returns
 */
export const orkesConductorClient = baseOrkesConductorClient(
  //@ts-ignore
  fetchCache as FetchFn<RequestInit,Response>,
  defaultRequestHandler
);
