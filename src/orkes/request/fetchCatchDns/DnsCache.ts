import { dnsResolver } from "./DnsResolver";

export class DnsCacheResolver {
  private _cache: Map<string, string> = new Map<string, string>();
  constructor({ initialCache = new Map<string, string>() } = {}) {
    this._cache = initialCache;
  }

  public async resolve(host: string): Promise<string | undefined> {
    const cachedIp = this._cache.get(host);
    if (cachedIp) {
      return cachedIp;
    }
    const ip = await dnsResolver(host);
    if (ip != undefined) {
      this._cache.set(host, ip);
    }
    return ip;
  }

  public clearCache() {
    this._cache.clear();
  }

  public get cache() {
    return this._cache;
  }
}
