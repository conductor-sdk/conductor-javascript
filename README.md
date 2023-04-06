# Conductor Javascript SDK

This project provides client SDKs to interact with [Netflix](https://conductor.netflix.com/) and [Orkes](https://orkes.io/) conductor servers.

## Quick Start

1. [Setup](#Setup-conductor)
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
import {ConductorClient} from "@io-orkes/conductor-typescript";

const client = new ConductorClient({
  serverUrl: 'https://play.orkes.io/api',
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
