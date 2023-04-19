[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [task](../modules/task.md) / TaskManager

# Class: TaskManager

[task](../modules/task.md).TaskManager

Responsible for initializing and managing the runners that poll and work different task queues.

## Table of contents

### Constructors

- [constructor](task.TaskManager.md#constructor)

### Properties

- [client](task.TaskManager.md#client)
- [errorHandler](task.TaskManager.md#errorhandler)
- [logger](task.TaskManager.md#logger)
- [taskManageOptions](task.TaskManager.md#taskmanageoptions)
- [tasks](task.TaskManager.md#tasks)
- [workers](task.TaskManager.md#workers)

### Methods

- [startPolling](task.TaskManager.md#startpolling)
- [stopPolling](task.TaskManager.md#stoppolling)

## Constructors

### constructor

• **new TaskManager**(`client`, `workers`, `config?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ConductorClient`](common.ConductorClient.md) |
| `workers` | [`ConductorWorker`](../interfaces/task.ConductorWorker.md)[] |
| `config` | [`TaskManagerConfig`](../interfaces/task.TaskManagerConfig.md) |

#### Defined in

[src/task/TaskManager.ts:42](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskManager.ts#L42)

## Properties

### client

• `Private` `Readonly` **client**: [`ConductorClient`](common.ConductorClient.md)

#### Defined in

[src/task/TaskManager.ts:36](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskManager.ts#L36)

___

### errorHandler

• `Private` `Readonly` **errorHandler**: [`TaskErrorHandler`](../modules/task.md#taskerrorhandler)

#### Defined in

[src/task/TaskManager.ts:38](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskManager.ts#L38)

___

### logger

• `Private` `Readonly` **logger**: [`ConductorLogger`](../interfaces/common.ConductorLogger.md)

#### Defined in

[src/task/TaskManager.ts:37](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskManager.ts#L37)

___

### taskManageOptions

• `Private` `Readonly` **taskManageOptions**: `Required`<[`TaskManagerOptions`](../interfaces/task.TaskManagerOptions.md)\>

#### Defined in

[src/task/TaskManager.ts:40](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskManager.ts#L40)

___

### tasks

• `Private` **tasks**: `Record`<`string`, [`TaskRunner`](task.TaskRunner.md)[]\> = `{}`

#### Defined in

[src/task/TaskManager.ts:35](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskManager.ts#L35)

___

### workers

• `Private` **workers**: [`ConductorWorker`](../interfaces/task.ConductorWorker.md)[]

#### Defined in

[src/task/TaskManager.ts:39](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskManager.ts#L39)

## Methods

### startPolling

▸ **startPolling**(): `void`

Start polling for tasks

#### Returns

`void`

#### Defined in

[src/task/TaskManager.ts:66](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskManager.ts#L66)

___

### stopPolling

▸ **stopPolling**(): `void`

Stops polling for tasks

#### Returns

`void`

#### Defined in

[src/task/TaskManager.ts:95](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskManager.ts#L95)
