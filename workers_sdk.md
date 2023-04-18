# Writing Workers with the Javascript SDK

A worker is responsible for executing a task.
Operator and System tasks are handled by the Conductor server, while user defined tasks needs to have a worker created that awaits the work to be scheduled by the server for it to be executed.

Worker framework provides features such as polling threads, metrics and server communication.

### Design Principles for Workers

Each worker embodies design pattern and follows certain basic principles:

1. Workers are stateless and do not implement a workflow specific logic.
2. Each worker executes a very specific task and produces well-defined output given specific inputs.
3. Workers are meant to be idempotent (or should handle cases where the task that partially executed gets rescheduled due to timeouts etc.)
4. Workers do not implement the logic to handle retries etc, that is taken care by the Conductor server.

### Creating Task Workers

Task worker is implemented using a function that confirms to the following function

```typescript
import { ConductorWorker, Task } from "@io-orkes/conductor-javascript";

const worker: ConductorWorker = {
  taskDefName: "task-def-name",
  execute: async (
    task: Task
  ): Promise<Omit<TaskResult, "workflowInstanceId" | "taskId">> => {},
};
```

Worker returns a object as the output of the task execution. The object is just a json that follows the TaskResult interface.
If an `error` is returned, the task is marked as `FAILED`

#### Task worker that returns an object

```typescript
import { ConductorWorker, Task } from "@io-orkes/conductor-javascript";

const worker: ConductorWorker = {
  taskDefName: "task-def-name",
  execute: async (task: Task) => {
    // Sample output
    return {
      outputData: {
        hello: "From your worker",
      },
      status: "COMPLETED",
    };
  },
};
```

#### Controlling execution for long-running tasks

For the long-running tasks you might want to spawn another process/routine and update the status of the task at a later point and complete the
execution function without actually marking the task as `COMPLETED`. Use `TaskResult` Interface that allows you to specify more fined grained control.

Here is an example of a task execution function that returns with `IN_PROGRESS` status asking server to push the task again in 60 seconds.

```typescript
const worker: ConductorWorker = {
  taskDefName: "task-def-name",
  execute: async (task: Task) => {
    // Sample output
    return {
      outputData: {},
      status: "IN_PROGRESS",
      callbackAfterSeconds: 60,
    };
  },
};
```

## Starting Workers

`TaskRunner` interface is used to start the workers, which takes care of polling server for the work, executing worker code and updating the results back to the server.

```typescript
import {
  OrkesApiConfig,
  orkesConductorClient,
  TaskRunner,
} from "@io-orkes/conductor-javascript";

const clientPromise = orkesConductorClient({
  keyId: "XXX", // optional
  keySecret: "XXXX", // optional
  serverUrl: "https://play.orkes.io/api",
});

const client = await clientPromise;

const taskRunner = new TaskRunner({
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

taskRunner.startPolling();
```

## Task Management APIs

### Get Task Details

```typescript
import { WorkflowExecutor } from "@io-orkes/conductor-javascript";

const clientPromise = orkesConductorClient({
  keyId: "XXX", // optional
  keySecret: "XXXX", // optional
  serverUrl: "https://play.orkes.io/api",
});

const client = await clientPromise;
const executor = new WorkflowExecutor(client);

const taskDetails = await executor.getTask(someTaskId);
```

### Updating the Task result outside the worker implementation

#### Update task by id

```typescript
executor.updateTaskByRefName(
  taskReferenceName,
  workflowInstanceId,
  TaskResult.COMPLETED,
  { some: { output: "value" } }
);
```

#### Update task by Reference Name

### Worker Metrics

We use [Prometheus](https://prometheus.io/) to collect metrics.
When enabled the worker starts an HTTP server which is used to publish metrics, which can be hooked up to a prometheus server to scrap and collect metrics.

### Next: [Create and Execute Workflows](workflow_sdk.md)