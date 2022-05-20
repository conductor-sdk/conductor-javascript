const {ConductorClient, TaskManager} = require('@conductor-sdk/conductor-client')
/*
Ensure you have followd the orkes guide
https://orkes.io/content/docs/getting-started/run/running-first-worker#adding-worker-implementation

To register the task and workflow definitions
 */

const requestCustomizer = (request, config, options) => {
  console.log('I am making a request to', options.url, 'and I could alter headers/url/etc')
  return request(config, options)
}

const client = new ConductorClient({
  // or wherever Conductor is running locally
  BASE: 'http://localhost:8080'
}, requestCustomizer)


const worker = {
  taskDefName: "simple_worker",
  execute: async ({ inputData }) => {
    console.log("working a task", inputData)
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
