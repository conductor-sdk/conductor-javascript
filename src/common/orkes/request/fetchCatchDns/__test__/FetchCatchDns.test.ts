import { expect, describe, test, jest } from "@jest/globals";
import { fetchCatchDns } from "../fetchCatchDns";
import { DnsCacheResolver } from "../DnsCache";
import { FetchFn } from "../types";

describe("fetchCatchDns", () => {
  test("Should call original fetch if the target is an ip, no param modification", async () => {
    const fakeResponse: Response = new Response();
    const mockFetch = jest
      .fn()
      .mockReturnValue(new Promise((r) => r(fakeResponse)));
    const fetchWithDns = fetchCatchDns(mockFetch as FetchFn);
    const options = {};
    const fakeIp = "http://192.168.0.1";
    const result = await fetchWithDns(fakeIp, options);
    expect(result).toBe(fakeResponse);
    expect(mockFetch).toBeCalledTimes(1);
    expect(mockFetch).toHaveBeenLastCalledWith(fakeIp, options);
  });
  test("Should call fetch with modified params if the target is a hostname that can be resolves", async () => {
    const host = "orkes.io";
    const targetUrl = `http://${host}`;
    const dnsResolver = new DnsCacheResolver();
    const fakeResponse: Response = new Response();
    const mockFetch = jest
      .fn()
      .mockReturnValue(new Promise((r) => r(fakeResponse)));
    const options = {};
    const fetchWithDns = fetchCatchDns(mockFetch as FetchFn, {dnsCache:dnsResolver});
    const result = await fetchWithDns(targetUrl, options);
    expect(result).toBe(fakeResponse);
    expect(mockFetch).toBeCalledTimes(1);

    // it was chatched
    expect(dnsResolver.cache.has(host)).toBe(true);

    const targetIp = dnsResolver.cache.get(host);
    const firstArgument = mockFetch.mock.calls[0][0];
    const secondArgArgument = mockFetch.mock.calls[0][1] as RequestInit;
    const headers: Headers = secondArgArgument.headers as Headers;

    //It hit by ip
    expect(firstArgument).toEqual(`http://${targetIp}/`);
    //It included the host header
    expect(headers.get("host")).toEqual(host);
  });

  test("Should use fetch directly if host could not be resolved", async () => {
    const host = "non-existing-domain.orkes.io";
    const targetUrl = `http://${host}`;
    const dnsResolver = new DnsCacheResolver();
    const fakeResponse: Response = new Response();
    const mockFetch = jest
      .fn()
      .mockReturnValue(new Promise((r) => r(fakeResponse)));
    const options = {};
    const fetchWithDns = fetchCatchDns(mockFetch as FetchFn, {dnsCache:dnsResolver});
    const result = await fetchWithDns(targetUrl, options);
    expect(result).toBe(fakeResponse);
    expect(mockFetch).toBeCalledTimes(1);

    // should not be catched
    expect(dnsResolver.cache.has(host)).toBe(false);

    const firstArgument = mockFetch.mock.calls[0][0];
    const secondArgArgument = mockFetch.mock.calls[0][1] as RequestInit;

    // Should hit original params
    expect(firstArgument).toEqual(targetUrl);
    //It included the host header
    expect(secondArgArgument).toEqual(options);
  });
});
