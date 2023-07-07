import { isIP } from "net";
import { DnsCacheResolver } from "./DnsCache";
import { FetchFn } from "./types";

type ModifiedUrlParameters = {
  host: string;
  port: string;
  protocol: string;
  hostname: string;
};

const isEmpty = (value?: string): boolean => {
  return value === undefined || value.trim().length === 0;
};

export const toMaybeUrl = (
  originalUrl: RequestInfo,
  modifiedParams: ModifiedUrlParameters
): URL => {
  const urlToHit = new URL(originalUrl.toString());
  urlToHit.host = isEmpty(modifiedParams.port)
    ? `${modifiedParams.host}:${modifiedParams.port}`
    : modifiedParams.host;

  return urlToHit;
};
type CatcherOptions = {
  dnsCache?: DnsCacheResolver;
  headerFactory?: (headers?: HeadersInit) => Headers;
};

const DEFAULT_OPTIONS: CatcherOptions = {
  dnsCache: new DnsCacheResolver(),
  headerFactory: (headers?: HeadersInit) => new Headers(headers || {}),
};

export const fetchCatchDns = (
  fetch: FetchFn,
  {
    dnsCache = new DnsCacheResolver(),
    headerFactory = (headers?: HeadersInit) => new Headers(headers || {}),
  }: CatcherOptions = DEFAULT_OPTIONS
): FetchFn => {
  const fetchWithDns: FetchFn = async (input, options) => {
    const parsedUrl = new URL(input.toString());
    const { hostname, host, port } = parsedUrl;
    if (isIP(hostname)) {
      return await fetch(input, options);
    }
    const maybeTargetIp = await dnsCache.resolve(hostname);
    // DNS resolution failed, let original fetch handle it
    if (isEmpty(maybeTargetIp)) {
      return await fetch(input, options);
    }

    const target = toMaybeUrl(input, {
      ...parsedUrl,
      host: maybeTargetIp!,
      port: port,
    });

    let headersOverride = headerFactory(options?.headers ?? {});
    // need to set this since we are hitting the ip
    if (!headersOverride.has("Host")) {
      headersOverride.set("Host", host);
    }
    const optionsOverride = {
      ...options,
      headers: headersOverride,
    };

    const res = await fetch(target.toString(), optionsOverride);

    return res;
  };
  return fetchWithDns;
};
