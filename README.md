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

### Running Custom Workers

```typescript
import {ConductorClient} from "@io-orkes/conductor-typescript";

const clientPromise = new ConductorClient({
  serverUrl: 'https://play.orkes.io/api',
})

const client = await clientPromise;

const taskManager = new TaskRunner({
    taskResource: client.taskResource,
    worker: {
      taskDefName: "MyCustomWorker",
      execute: async ({ inputData, taskId }) => {
        return {
          outputData: {
            greeting: "Hello World",
          },
          status: "COMPLETED",
        };
      },
    },
    options: {
      pollInterval: 10,
      domain: undefined,
      concurrency: 1,
      workerID: "",
    },
  });

taskManager.startPolling();

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
