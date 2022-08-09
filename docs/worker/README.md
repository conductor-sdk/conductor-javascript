## Conductor node client

This is a node.js client for [Netflix](https://github.com/Netflix/conductor) and [Orkes](https://orkes.io/) Conductor.

## Quickstart

```javascript
const { TaskClient, TaskManager } = require("@conductor-sdk/conductor-client");

const client = new TaskClient({
  // or wherever Conductor is running locally
  baseURL: "http://localhost:8080",
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
