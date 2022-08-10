[@io-orkes/conductor-typescript](../README.md) / [Modules](../modules.md) / [core](../modules/core.md) / WorkflowExecutor

# Class: WorkflowExecutor

[core](../modules/core.md).WorkflowExecutor

## Table of contents

### Constructors

- [constructor](core.WorkflowExecutor.md#constructor)

### Properties

- [\_client](core.WorkflowExecutor.md#_client)

### Methods

- [getWorkflow](core.WorkflowExecutor.md#getworkflow)
- [getWorkflowStatus](core.WorkflowExecutor.md#getworkflowstatus)
- [pause](core.WorkflowExecutor.md#pause)
- [reRun](core.WorkflowExecutor.md#rerun)
- [registerWorkflow](core.WorkflowExecutor.md#registerworkflow)
- [restart](core.WorkflowExecutor.md#restart)
- [resume](core.WorkflowExecutor.md#resume)
- [retry](core.WorkflowExecutor.md#retry)
- [search](core.WorkflowExecutor.md#search)
- [skipTasksFromWorkflow](core.WorkflowExecutor.md#skiptasksfromworkflow)
- [startWorkflow](core.WorkflowExecutor.md#startworkflow)
- [startWorkflows](core.WorkflowExecutor.md#startworkflows)
- [terminate](core.WorkflowExecutor.md#terminate)
- [updateTask](core.WorkflowExecutor.md#updatetask)
- [updateTaskByRefName](core.WorkflowExecutor.md#updatetaskbyrefname)

## Constructors

### constructor

• **new WorkflowExecutor**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ConductorClient`](common.ConductorClient.md) |

#### Defined in

src/core/executor.ts:27

## Properties

### \_client

• `Readonly` **\_client**: [`ConductorClient`](common.ConductorClient.md)

#### Defined in

src/core/executor.ts:25

## Methods

### getWorkflow

▸ **getWorkflow**(`workflowInstanceId`, `includeTasks`, `retry?`): `Promise`<`Workflow`\>

Takes an workflowInstanceId and an includeTasks and an optional retry parameter returns the whole execution status.
If includeTasks flag is provided. Details of tasks execution will be returned as well,
retry specifies the amount of retrys before throwing an error.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `workflowInstanceId` | `string` | `undefined` |
| `includeTasks` | `boolean` | `undefined` |
| `retry` | `number` | `0` |

#### Returns

`Promise`<`Workflow`\>

#### Defined in

src/core/executor.ts:68

___

### getWorkflowStatus

▸ **getWorkflowStatus**(`workflowInstanceId`, `includeOutput`, `includeVariables`): `any`

Returns a summary of the current workflow status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `workflowInstanceId` | `string` | current running workflow |
| `includeOutput` | `boolean` | flag to include output |
| `includeVariables` | `boolean` | flag to include variable |

#### Returns

`any`

Promise<WorkflowStatus>

#### Defined in

src/core/executor.ts:101

___

### pause

▸ **pause**(`workflowInstanceId`): `any`

Pauses a running workflow

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `workflowInstanceId` | `string` | current workflow execution |

#### Returns

`any`

#### Defined in

src/core/executor.ts:120

___

### reRun

▸ **reRun**(`workflowInstanceId`, `rerunWorkflowRequest?`): `any`

Reruns workflowInstanceId workflow. with new parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `workflowInstanceId` | `string` | current workflow execution |
| `rerunWorkflowRequest` | `Partial`<[`RerunWorkflowRequest`](../interfaces/core.RerunWorkflowRequest.md)<`Record`<`string`, `any`\>\>\> | Rerun Workflow Execution Request |

#### Returns

`any`

#### Defined in

src/core/executor.ts:132

___

### registerWorkflow

▸ **registerWorkflow**(`override`, `workflow`): `any`

Will persist a workflow in conductor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `override` | `boolean` | If true will override the existing workflow with the definition |
| `workflow` | [`WorkflowDef`](../interfaces/common.WorkflowDef.md) | Complete workflow definition |

#### Returns

`any`

null

#### Defined in

src/core/executor.ts:37

___

### restart

▸ **restart**(`workflowInstanceId`, `useLatestDefinitions`): `any`

Restarts workflow with workflowInstanceId, if useLatestDefinition uses last defintion

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowInstanceId` | `string` |
| `useLatestDefinitions` | `boolean` |

#### Returns

`any`

#### Defined in

src/core/executor.ts:147

___

### resume

▸ **resume**(`workflowInstanceId`): `any`

Resumes a previously paused execution

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `workflowInstanceId` | `string` | Running workflow workflowInstanceId |

#### Returns

`any`

#### Defined in

src/core/executor.ts:159

___

### retry

▸ **retry**(`workflowInstanceId`, `resumeSubworkflowTasks`): `any`

Retrys workflow from last failing task
if resumeSubworkflowTasks is true will resume tasks in spawned subworkflows

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowInstanceId` | `string` |
| `resumeSubworkflowTasks` | `boolean` |

#### Returns

`any`

#### Defined in

src/core/executor.ts:173

___

### search

▸ **search**(`start`, `size`, `query`, `freeText`, `sort?`, `skipCache?`): `any`

Searches for existing workflows given the following querys

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `start` | `number` | `undefined` |
| `size` | `number` | `undefined` |
| `query` | `string` | `undefined` |
| `freeText` | `string` | `undefined` |
| `sort` | `string` | `""` |
| `skipCache` | `boolean` | `false` |

#### Returns

`any`

#### Defined in

src/core/executor.ts:189

___

### skipTasksFromWorkflow

▸ **skipTasksFromWorkflow**(`workflowInstanceId`, `taskReferenceName`, `skipTaskRequest`): `any`

Skips a task of a running workflow.
by providing a skipTaskRequest you can set the input and the output of the skipped tasks

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowInstanceId` | `string` |
| `taskReferenceName` | `string` |
| `skipTaskRequest` | `Partial`<[`SkipTaskRequest`](../interfaces/core.SkipTaskRequest.md)\> |

#### Returns

`any`

#### Defined in

src/core/executor.ts:218

___

### startWorkflow

▸ **startWorkflow**(`workflowRequest`): `Promise`<`string`\>

Takes a StartWorkflowRequest. returns a Promise<string> with the workflowInstanceId of the running workflow

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowRequest` | [`StartWorkflowRequest`](../interfaces/core.StartWorkflowRequest.md)<`Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`string`\>

#### Defined in

src/core/executor.ts:47

___

### startWorkflows

▸ **startWorkflows**(`workflowsRequest`): `Promise`<`string`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowsRequest` | [`StartWorkflowRequest`](../interfaces/core.StartWorkflowRequest.md)<`Record`<`string`, `any`\>\>[] |

#### Returns

`Promise`<`string`\>[]

#### Defined in

src/core/executor.ts:53

___

### terminate

▸ **terminate**(`workflowInstanceId`, `reason`): `any`

Takes an workflowInstanceId, and terminates a running workflow

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowInstanceId` | `string` |
| `reason` | `string` |

#### Returns

`any`

#### Defined in

src/core/executor.ts:237

___

### updateTask

▸ **updateTask**(`taskId`, `workflowInstanceId`, `taskStatus`, `taskOutput`): `any`

Takes a taskId and a workflowInstanceId. Will update the task for the corresponding taskId

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId` | `string` |
| `workflowInstanceId` | `string` |
| `taskStatus` | [`TaskResult`](../enums/core.TaskResult.md) |
| `taskOutput` | `Record`<`string`, `any`\> |

#### Returns

`any`

#### Defined in

src/core/executor.ts:251

___

### updateTaskByRefName

▸ **updateTaskByRefName**(`taskReferenceName`, `workflowInstanceId`, `status`, `taskOutput`): `any`

Updates a task by reference Name

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `workflowInstanceId` | `string` |
| `status` | [`TaskResult`](../enums/core.TaskResult.md) |
| `taskOutput` | `Record`<`string`, `any`\> |

#### Returns

`any`

#### Defined in

src/core/executor.ts:277
