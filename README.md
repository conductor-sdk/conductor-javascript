Conductor node client
---

## Quickstart

```
const {TaskClient, TaskManager} = require('@conductor-sdk/conductor-client')

const client = new TaskClient({
  // or wherever Conductor is running locally
  baseURL: 'http://localhost:8080'
})

const worker = {
  taskDefName: "simple_worker",
  execute: async ({ inputData }) => {
    return {
      outputData: {
        ...inputData,
        "hello": "From your worker"
      },
      status: "COMPLETED"
    }
  }
}

const workers = [worker]
const taskManager = new TaskManager(
  client,
  workers
)

taskManager.startPolling()
```

## Development

```
# .node-version file contains necessary version of node
# ensure that you are using a compatible version
# Install dependencies
npm i

# run tests
npm test

# lint
npm run lint

# lint and autofix
npm run lint:fix
```


### Releasing [work in progress]

TODO: we need to add shared credentials for the `@orkes` org

Publication is currently manual. 

```
npm test
npm publish
```
