import { ConductorHttpRequest } from "../common";
import { fetchCatchDns } from "./request/fetchCatchDns";
import { request as baseRequest } from "./request/request";
import { baseOrkesConductorClient } from "./BaseOrkesConductorClient";
import { FetchFn } from "./types";
import fetch, { Headers, RequestInit, Response } from "node-fetch";
import http from "http";
import https from "https";

const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });

const agent = (_parsedURL: URL) =>
  _parsedURL.protocol == "http:" ? httpAgent : httpsAgent;

const nodeFetchWrapper: FetchFn<RequestInit, Response> = async (
  input,
  options = {}
) => {
  const res = await fetch(input.toString(), {
    ...options,
    agent,
  } as RequestInit);
  return res;
};

const fetchCache = fetchCatchDns<{ headers: Record<string, string> }, Response>(
  nodeFetchWrapper,
  {
    //@ts-ignore
    headerFactory: (headers?: HeadersInit) =>
      new Headers((headers as Record<string, string>) || {}),
  }
);

const defaultRequestHandler: ConductorHttpRequest = (
  __request,
  config,
  options
) => baseRequest(config, options, fetchCache as unknown as FetchFn);

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
