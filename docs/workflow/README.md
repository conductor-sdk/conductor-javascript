# Workflow as code

## Generator

One way to create workflow with code is using the generator functions. The generator functions will generate default task values to ease the workflow creation process. You only replace what needs to be replaced. Everything else is generated with some default value. This way you get instant feedback when creating a workflow.

### Generating a task type

```typescript
import { generateHTTPTask } from "@io-orkes/conductor-typescript";
const someHttpTask = generateHTTPTask();

// Generates :
  {
    "name":"httpTask__task_u4t41",
    "taskReferenceName":"httpTask__task_u4t41_ref",
    "inputParameters":{
    "http_request":{
      "uri":"https://jsonplaceholder.typicode.com/posts/${workflow.input.queryid}",
      "method":"GET"
      }
     },
       "type":"HTTP"
    }
```

The generator function takes a Partial of the given task type meaning we can and SHOULD replace the default params. But by providing default params. we can kickoff a workflow and worry about details as we move forward.

```typescript
import { generateHTTPTask } from "@io-orkes/conductor-typescript";
const someHttpTask = generateHTTPTask({ name: "myCoolHttpTask" });

// Generates

{
  "name":"MyCoolHttpTask",
"taskReferenceName":"MyCoolHttpTask_ref",
  "inputParameters":{
    "http_request":{
      "uri":"https://jsonplaceholder.typicode.com/posts/${workflow.input.queryid}",
      "method":"GET"
      }
    },
    "type":"HTTP"
    }
```

### Inline Task Type

The inline task type allows the user to execute javascript in the task itself. the json for the inline task takes a key `expression` with a string containing the javascript that will get executed. Using the `generateInlineTask` we can leverage that we are in the TS world to generate the string for us.
To do this you need to return a ES 5 function. _NOTE_ That this function cannot use closures and must be 100% in ES5 else you would get syntax errors

```typescript
import { generateInlineTask } from "@io-orkes/conductor-typescript";
const inlineTask = generateInlineTask({
  name:"sum_two_numbers",
  inputParameters: {
  numberOne:"${workflow.input.numberOne}",
  numberTwo:"${workflow.input.numberTwo}",
    expression: ($: {numberOne:number,numberTwo:number}) => function () {
      return {
        result: $.numberOne + $.numberTwo
      }
    },
  },
});
// Generates
{
"name":"sum_two_numbers",
"taskReferenceName":"sum_two_numbers_ref",
"inputParameters":{
  "evaluatorType":"javascript",
  "numberOne":"${workflow.input.numberOne}",
  "numberTwo":"${workflow.input.numberTwo}",
  "expression":"(function () {\n            return {\n                result: $.numberOne + $.numberTwo\n            };\n        })();"
  },
  "type":"INLINE"
  }

```

### Generating workflows

The same way we generate a task. We can generate a workflow.

```typescript
import { generate } from "@io-orkes/conductor-typescript";
const someWorkflow = generate({ name: "mycoolWorkflow" });
// Generates
{
  "name":"mycoolWorkflow",
  "description":"Edit or extend this sample workflow. Set the workflow name to get started",
  "version":1,
  "tasks":[],
  "inputParameters":[],
  "outputParameters":{},
  "schemaVersion":2,
  "restartable":true,
  "workflowStatusListenerEnabled":false,
  "ownerEmail":"mail@mail.com",
  "timeoutPolicy":
  "ALERT_ONLY",
  "timeoutSeconds":0
  }
```

Tasks within the generate function will use other generator functions. Meaning you can partially declare the tasks within tasks.
defining only the TaskType will yield TS autocompletion

```typescript
import { generate } from "@io-orkes/conductor-typescript";
const someWorkflow = generate({
  name: "mycoolWorkflow",
  tasks: [{ type: TaskType.HTTP, name: "hitThatEndpoint" }],
  ownerEmail:"mail@mail.com"
});
// Will Generate
{
  "name":"mycoolWorkflow",
"description":"Edit or extend this sample workflow. Set the workflow name to get started",
"version":1,
"tasks":[{
  "name":"hitThatEndpoint",
  "taskReferenceName":"hitThatEndpoint_ref",
  "inputParameters":{
    "http_request":{
      "uri":"https://jsonplaceholder.typicode.com/posts/${workflow.input.queryid}",
      "method":"GET"
      }
      },
      "type":"HTTP"}
  ],
  "inputParameters":[],
  "outputParameters":{},
  "schemaVersion":2,
  "restartable":true,
  "workflowStatusListenerEnabled":false,
  "ownerEmail":"mail@mail.com",
  "timeoutPolicy":"ALERT_ONLY",
  "timeoutSeconds":0
  }
```

## Workflow Management

Thw WorkflowExecutor class wrapps common functions related with the registration. update, and status report of a workflow.
The WorkflowExecutor constructor takes an instance of a ConductorClient.

```typescript
import {
  WorkflowExecutor,
  ConductorClient,
} from "@io-orkes/conductor-typescript";

const client = new ConductorClient({ BASE: "http://localhost:8080" });
const wExecutor = new WorkflowExecutor(client);
```

### Registering a Workflow

Takes a boolean flagging wether to override the workflow or not. and a complete workflow definition
Returns a promise on done.

```typescript
import {
  WorkflowExecutor,
  ConductorClient,
  generate,
} from "@io-orkes/conductor-typescript";

const client = new ConductorClient({ BASE: "http://localhost:8080" });
const wExecutor = new WorkflowExecutor(client);
wExecutor.registerWorkflow(
  true,
  generate({
    name: "myFirstWorkflow",
    tasks: [
      {
        name: "sum_two_numbers",
        inputParameters: {
          numberOne: "${workflow.input.numberOne}",
          numberTwo: "${workflow.input.numberTwo}",
          expression: ($: { numberOne: number; numberTwo: number }) =>
            function () {
              return {
                result: $.numberOne + $.numberTwo,
              };
            },
        },
      },
    ],
    inputParameters: ["numberOne", "numberTwo"],
    outputParameters: {
      result: "${sum_two_numbers_ref.output.result}",
    },
  })
);
```

### Start a Workflow.

Takes a StartWorkflowRequest. returns a Promise<string> with the executionId of the running workflow

```typescript
import {
  WorkflowExecutor,
  ConductorClient,
  generate,
} from "@io-orkes/conductor-typescript";

const client = new ConductorClient({ BASE: "http://localhost:8080" });

const wExecutor = new WorkflowExecutor(client);
const executionId = await wExecutor.startWorkflow({
  name: "myFirstWorkflow",
  version: 1,
  input: {},
});
```

### Get Workflow Execution Details

Takes an executionId and an includeTasks parameter returns the whole execution status.
If includeTasks flag is provided. Details of tasks execution will be returned as well
retry specifies the amount of retrys before throwing an error.

```typescript
import {
  WorkflowExecutor,
  ConductorClient,
  generate,
} from "@io-orkes/conductor-typescript";

const client = new ConductorClient({ BASE: "http://localhost:8080" });

const wExecutor = new WorkflowExecutor(client);
const workflowStatus = await wExecutor.getWorkflow(
  executionId,
  true,
  0 // optional
);

const mySum = workflowStatus?.output?.result;
```

### Get Workflow Execution Status.

```typescript
import {
  WorkflowExecutor,
  ConductorClient,
  generate,
} from "@io-orkes/conductor-typescript";

const client = new ConductorClient({ BASE: "http://localhost:8080" });

const wExecutor = new WorkflowExecutor(client);
const workflowStatus = await wExecutor.getWorkflowStatus(
  executionId,
  true,
  true
);

if(workflowStatus?.status === "COMPLETED"){
  ....
}
```

### Pause a Running Workflow

Pauses a runing workflow

```typescript
import {
  WorkflowExecutor,
  ConductorClient,
  generate,
} from "@io-orkes/conductor-typescript";

const client = new ConductorClient({ BASE: "http://localhost:8080" });

const wExecutor = new WorkflowExecutor(client);
const workflowStatus = await wExecutor.pause(executionId);
```

### ReRuns an Workflow

Reruns a previously executed workflow

```typescript
import {
  WorkflowExecutor,
  ConductorClient,
  generate,
} from "@io-orkes/conductor-typescript";

const client = new ConductorClient({ BASE: "http://localhost:8080" });

const wExecutor = new WorkflowExecutor(client);
const executionId = await wExecutor.reRun(executionId, {
  workflowInput: {
    numberOne: 2,
    numberTwo: 4,
  },
});
```

### Restart a workflow

Restarts current workflow

```typescript
import {
  WorkflowExecutor,
  ConductorClient,
  generate,
} from "@io-orkes/conductor-typescript";

const client = new ConductorClient({ BASE: "http://localhost:8080" });

const wExecutor = new WorkflowExecutor(client);

// Will use latest definition
wExecutor.restart(executionId, true);
```

### Retry a workflow

Retrys workflow from last failing task
if resumeSubworkflowTasks is true will resume tasks in spawned subworkflows

```typescript
import {
  WorkflowExecutor,
  ConductorClient,
  generate,
} from "@io-orkes/conductor-typescript";

const client = new ConductorClient({ BASE: "http://localhost:8080" });

const wExecutor = new WorkflowExecutor(client);
// Will use latest definition
await wExecutor.retry(executionId, true);
```

### Search for workflows

Search for existing workflows.

```typescript
import {
  WorkflowExecutor,
  ConductorClient,
  generate,
} from "@io-orkes/conductor-typescript";

const client = new ConductorClient({ BASE: "http://localhost:8080" });

const wExecutor = new WorkflowExecutor(client);

const start = 0;
const size = 100;
const query = "workflowType = mycoolWorkflow";
const freeText = "*";

// Will use latest definition
const searchResults = await wExecutor.search(
  start,
  size,
  query,
  freeText,
  false
);
```

### Skip Tasks for workflows

Skips a task of a running workflow by providing a skipTaskRequest you can set the input and the output of the skipped tasks

```typescript
import {
  WorkflowExecutor,
  ConductorClient,
  generate,
} from "@io-orkes/conductor-typescript";

const client = new ConductorClient({ BASE: "http://localhost:8080" });

const wExecutor = new WorkflowExecutor(client);

const start = 0;
const size = 100;
const query = "workflowType = mycoolWorkflow";
const freeText = "*";

await wExecutor.skipTasksFromWorkflow(executionId, "sum_two_numbers_ref", {
  taskInput: {
    numberOne: 4,
    numberTwo: 4,
  },
  taskOutput: {
    result: 8,
  },
});
```

### Terminate a Running workflow

Given an id of a running workflow. Terminates the running workflow

```typescript
import {
  WorkflowExecutor,
  ConductorClient,
  generate,
} from "@io-orkes/conductor-typescript";

const client = new ConductorClient({ BASE: "http://localhost:8080" });

const wExecutor = new WorkflowExecutor(client);

await wExecutor.terminate(executionId, "Termination reason");
```

### Updates a Task

Updates a task by taskId

```typescript
import {
  WorkflowExecutor,
  ConductorClient,
  generate,
} from "@io-orkes/conductor-typescript";

const client = new ConductorClient({ BASE: "http://localhost:8080" });

const wExecutor = new WorkflowExecutor(client);

const id = await wExecutor.updateTask(
  taskId,
  executionId,
  TaskResult.COMPLETED
);
```

### Updates a Task by taskReferenceName

Updates a task by taskReferenceName

```typescript
import {
  WorkflowExecutor,
  ConductorClient,
  generate,
} from "@io-orkes/conductor-typescript";

const client = new ConductorClient({ BASE: "http://localhost:8080" });

const wExecutor = new WorkflowExecutor(client);

const id = await wExecutor.updateTask(
  "sum_two_numbers_ref",
  executionId,
  TaskResult.COMPLETED,
  {
    result: 8,
  }
);
```
