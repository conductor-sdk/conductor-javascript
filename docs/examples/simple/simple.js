const {TaskClient, TaskManager} = require('@conductor-sdk/conductor-client')

/*
Ensure you have followd the orkes guide
https://orkes.io/content/docs/getting-started/run/running-first-worker#adding-worker-implementation

To register the task and workflow definitions
 */

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

