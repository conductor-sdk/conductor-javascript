# Netflix Conductor SDK

`conductor-typescript` repository provides the client SDKs to build Task workers with Typescript

## Quick Start

1. [Setup conductor-typescript](#Setup-conductor)
2. [Create and run Task Workers](docs/worker/README.md)
3. [Create workflows using Code](docs/workflow/README.md)
4. [Api Docs](docs/api/README.md)

### Setup conductor

Simple connection to conductor

```typescript
const client = new ConductorClient({
  serverUrl: "https://play.orkes.io/api",
});

```
#### Using TLS

The client uses `node-fetch` which supports node.js's [`httpsAgent` options](https://nodejs.org/api/https.html#new-agentoptions). For example:

```typescript
import {Agent} from "https"
import {ConductorClient} from "@io-orkes/conductor-typescript";

const agentOptions = {
  key: "<buffer>",
  cert: "<buffer>",
  ca: "<buffer>",
  servername: 'play.orkes.io',
  // ...
}

const client = new ConductorClient({
  serverUrl: 'https://play.orkes.io/api',
  AGENT: new Agent(agentOptions)
})

const taskManager = new TaskManager(client, [ /* workers */ ])
taskManager.startPolling()
```

#### Connect to conductor using Orkes

```typescript

/**
 * Application keys generated from the Application menu > Create Application
 * then edit and create Access Keys
 *
 */
import { OrkesApiConfig, orkesConductorClient } from "@io-orkes/conductor-typescript";

const config: Partial<OrkesApiConfig> = {
  keyId: "XXX",
  keySecret: "XXXX",
  serverUrl: "https://play.orkes.io/api",
};

orkesConductorClient(config).then(client => ..... );

```
