import {Agent, AgentOptions} from 'https'
import fetch, {Headers, RequestInit} from "node-fetch"
import {ConductorLogger, DefaultLogger} from "../common/ConductorLogger"

export interface RequestOptions extends RequestInit {
  json?: any
}

export interface JSONOptions {
  parseResponse: boolean
}

// TODO(@orkes): add orkes auth support?
interface HttpConfig {
  baseURL: string
  /*
  Options passed to an [`https` Agent](https://nodejs.org/docs/latest-v16.x/api/https.html#class-httpsagent)
   */
  httpsAgentOptions?: AgentOptions
}

export class HttpBaseClient {
  private readonly agent: Agent | undefined
  private readonly config: HttpConfig
  private readonly logger: ConductorLogger

  constructor(config: HttpConfig, logger?: ConductorLogger) {
    if (config.httpsAgentOptions) {
      this.agent = new Agent(config.httpsAgentOptions)
    }
    this.config = config
    this.logger = logger ?? new DefaultLogger()
  }

  json = async (url: string, options: RequestOptions  = {}, jsonOptions: JSONOptions = { parseResponse : true}) => {
    const headers = new Headers(options.headers)
    headers.set('Content-Type','application/json')
    const response = await this.request(url, {
      ...options,
      headers,
      body: JSON.stringify(options.json)
    })
    if (jsonOptions.parseResponse) {
      return response.json()
    } else {
      return response
    }
  }

  request = async (url: string, options: RequestOptions = {}) => {
    const fetchUrl = url.startsWith("/") ? url : `${this.config.baseURL}/${url}`
    const res = await fetch(fetchUrl, {
      ...options,
      agent: this.agent ?? undefined
    })

    if (!res.ok) {
      let body = await res.text().catch(e => e.message)
      throw new Error(`Non successful response ${res.status}. ${body}`)
    }
    return res
  }
}
