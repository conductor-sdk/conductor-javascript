[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [task](../modules/task.md) / TaskRunner

# Class: TaskRunner

[task](../modules/task.md).TaskRunner

Responsible for polling and executing tasks from a queue.

Because a `poll` in conductor "pops" a task off of a conductor queue,
each runner participates in the poll -> work -> update loop.
We could potentially split this work into a separate "poller" and "worker" pools
but that could lead to picking up more work than the pool of workers are actually able to handle.

## Table of contents

### Constructors

- [constructor](task.TaskRunner.md#constructor)

### Properties

- [errorHandler](task.TaskRunner.md#errorhandler)
- [isPolling](task.TaskRunner.md#ispolling)
- [logger](task.TaskRunner.md#logger)
- [options](task.TaskRunner.md#options)
- [taskResource](task.TaskRunner.md#taskresource)
- [worker](task.TaskRunner.md#worker)

### Methods

- [executeTask](task.TaskRunner.md#executetask)
- [handleUnknownError](task.TaskRunner.md#handleunknownerror)
- [poll](task.TaskRunner.md#poll)
- [startPolling](task.TaskRunner.md#startpolling)
- [stopPolling](task.TaskRunner.md#stoppolling)
- [updateTaskWithRetry](task.TaskRunner.md#updatetaskwithretry)

## Constructors

### constructor

• **new TaskRunner**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`RunnerArgs`](../interfaces/task.RunnerArgs.md) |

#### Defined in

[src/task/TaskRunner.ts:48](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskRunner.ts#L48)

## Properties

### errorHandler

• **errorHandler**: [`TaskErrorHandler`](../modules/task.md#taskerrorhandler)

#### Defined in

[src/task/TaskRunner.ts:46](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskRunner.ts#L46)

___

### isPolling

• **isPolling**: `boolean` = `false`

#### Defined in

[src/task/TaskRunner.ts:41](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskRunner.ts#L41)

___

### logger

• **logger**: [`ConductorLogger`](../interfaces/common.ConductorLogger.md)

#### Defined in

[src/task/TaskRunner.ts:44](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskRunner.ts#L44)

___

### options

• **options**: `Required`<[`TaskManagerOptions`](../interfaces/task.TaskManagerOptions.md)\>

#### Defined in

[src/task/TaskRunner.ts:45](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskRunner.ts#L45)

___

### taskResource

• **taskResource**: [`TaskResourceService`](common.TaskResourceService.md)

#### Defined in

[src/task/TaskRunner.ts:42](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskRunner.ts#L42)

___

### worker

• **worker**: [`ConductorWorker`](../interfaces/task.ConductorWorker.md)

#### Defined in

[src/task/TaskRunner.ts:43](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskRunner.ts#L43)

## Methods

### executeTask

▸ **executeTask**(`task`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`Task`](../modules/common.md#task) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/task/TaskRunner.ts:126](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskRunner.ts#L126)

___

### handleUnknownError

▸ **handleUnknownError**(`unknownError`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `unknownError` | `unknown` |

#### Returns

`void`

#### Defined in

[src/task/TaskRunner.ts:149](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskRunner.ts#L149)

___

### poll

▸ **poll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/task/TaskRunner.ts:80](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskRunner.ts#L80)

___

### startPolling

▸ **startPolling**(): `Promise`<`void`\>

Starts polling for work

#### Returns

`Promise`<`void`\>

#### Defined in

[src/task/TaskRunner.ts:65](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskRunner.ts#L65)

___

### stopPolling

▸ **stopPolling**(): `void`

Stops Polling for work

#### Returns

`void`

#### Defined in

[src/task/TaskRunner.ts:76](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskRunner.ts#L76)

___

### updateTaskWithRetry

▸ **updateTaskWithRetry**(`task`, `taskResult`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`Task`](../modules/common.md#task) |
| `taskResult` | [`TaskResult`](../modules/common.md#taskresult) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/task/TaskRunner.ts:105](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskRunner.ts#L105)
