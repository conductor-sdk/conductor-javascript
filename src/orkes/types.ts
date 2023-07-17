import type {
  ConductorClientAPIConfig,
  GenerateTokenRequest,
} from "../common";

export type FetchFn<
  T = RequestInit,
  R extends { json: () => Promise<any> } = Response
> = (input: RequestInfo, init?: T) => Promise<R>;

export type OrkesApiConfig = ConductorClientAPIConfig & GenerateTokenRequest;
