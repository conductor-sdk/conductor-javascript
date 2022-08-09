# Netflix Conductor SDK

`conductor-typescript` repository provides the client SDKs to build Task workers with Typescript

## Quick Start

1. [Setup conductor-typescript](#Setup-conductor)
2. [Create and run Task Workers](docs/worker/README.md)
3. [Create workflows using Code](docs/workflow/README.md)

### Setup conductor

Simple connection to conductor

```typescript
const client = new ConductorClient({
  BASE: "https://your.server.name",
});

```
Using TLS

The client uses `node-fetch` which supports node.js's [`httpsAgent` options](https://nodejs.org/api/https.html#new-agentoptions). For example:

```typescript
import {Agent} from "https"

const agentOptions = {
  key: "<buffer>",
  cert: "<buffer>",
  ca: "<buffer>",
  servername: 'your.server.name',
  // ...
}

const client = new ConductorClient({
  BASE: 'https://your.server.name',
  AGENT: new Agent(agentOptions)
})

const taskManager = new TaskManager(client, [ /* workers */ ])
taskManager.startPolling()
```

Connect to conductor using Orkes

```typescript

/**
 * Application keys generated from the Application menu > Create Application
 * then edit and create Access Keys
 *
 */
import { OrkesApiConfig, orkesConductorClient } from "@io-orkes/conductor-typescript";

const config: Partial<OrkesApiConfig> = {
  keyId: "aa17000e-a478-48cd-ae5c-d54c0fd850de",
  keySecret: "HUh57n1Q4DT5psfU0A42PDpwxID4ln5OgwNcSSWXXXzRqsJA",
  BASE: "https://play.orkes.io",
};

orkesConductorClient(config).then(client => ..... );

```