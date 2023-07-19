import type { ConductorHttpRequest, ConductorClientAPIConfig } from "../common";
import { ConductorClient } from "../common";
import { FetchFn, OrkesApiConfig } from "./types";

const defaultRequestHandler: ConductorHttpRequest = (
  request,
  config,
  options
) => request(config, options);

const REFRESH_TOKEN_IN_MILLISECONDS = 30 * 60 * 1000;

export class AuthConductorClient extends ConductorClient {
  public intervalId?: NodeJS.Timeout;
  constructor(
    config?: Partial<ConductorClientAPIConfig>,
    requestHandler: ConductorHttpRequest = defaultRequestHandler
  ) {
    super(config, requestHandler);
  }
  /**
   * Stops the interval that refreshes the token
   */
  stop(): void {
    if (this.intervalId != null) {
      clearInterval(this.intervalId);
    }
  }
}
/*
Returns an orkes conductor client creator function.
Usefull if you want to use your own fetch. like Got or Axios
 */
export const baseOrkesConductorClient = <
  T = RequestInit,
  R extends { json: () => Promise<any> } = Response
>(
  fetchFn: FetchFn<T, R>,
  baseRequestHandler: ConductorHttpRequest = defaultRequestHandler
) => {
  const requestTokenForKeySecret = (
    keyId: string,
    keySecret: string,
    tokenUrl: string
  ) =>
    fetchFn(tokenUrl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ keyId, keySecret }),
      method: "POST",
    } as any);

  return async (
    config?: Partial<OrkesApiConfig>,
    requestHandler: ConductorHttpRequest = baseRequestHandler
  ): Promise<ConductorClient> => {
    if (config?.keySecret != null && config?.keyId != null) {
      const {
        serverUrl,
        keyId,
        keySecret,
        refreshTokenInterval = REFRESH_TOKEN_IN_MILLISECONDS,
      } = config;
      const tokenUrl = `${serverUrl}/token`;
      const res = await requestTokenForKeySecret(keyId, keySecret, tokenUrl);
      const { token } = await (res as R).json();

      const conductorClientInstance = new AuthConductorClient(
        { ...config, TOKEN: token },
        requestHandler
      );

      if (token != null && refreshTokenInterval > 0) {
        const intervalId = setInterval(async () => {
          const res = await requestTokenForKeySecret(
            keyId,
            keySecret,
            tokenUrl
          );
          const { token } = await res.json();
          conductorClientInstance.token = token;
        }, refreshTokenInterval);
        conductorClientInstance.intervalId = intervalId;
      }

      return conductorClientInstance;
    } else {
      return new ConductorClient(config, requestHandler);
    }
  };
};
