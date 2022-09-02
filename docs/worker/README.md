## Quickstart

```typescript

import {ConductorClient,  TaskClient, TaskManager } from "@io-orkes/conductor-typescript";

const client = new ConductorClient({
  serverUrl: "http://localhost:8080/api",
});

const worker = {
  taskDefName: "simple_worker",
  execute: async ({ inputData }) => {
    return {
      outputData: {
        ...inputData,
        hello: "From your worker",
      },
      status: "COMPLETED",
    };
  },
};

const workers = [worker];
const taskManager = new TaskManager(client, workers);

taskManager.startPolling();
```
