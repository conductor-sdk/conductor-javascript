[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / task

# Module: task

## Table of contents

### Classes

- [TaskManager](../classes/task.TaskManager.md)
- [TaskRunner](../classes/task.TaskRunner.md)

### Interfaces

- [ConductorWorker](../interfaces/task.ConductorWorker.md)
- [RunnerArgs](../interfaces/task.RunnerArgs.md)
- [TaskManagerConfig](../interfaces/task.TaskManagerConfig.md)
- [TaskManagerOptions](../interfaces/task.TaskManagerOptions.md)

### Type Aliases

- [TaskErrorHandler](task.md#taskerrorhandler)

### Functions

- [noopErrorHandler](task.md#nooperrorhandler)

## Type Aliases

### TaskErrorHandler

Ƭ **TaskErrorHandler**: (`error`: `Error`, `task?`: [`Task`](common.md#task)) => `void`

#### Type declaration

▸ (`error`, `task?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `task?` | [`Task`](common.md#task) |

##### Returns

`void`

#### Defined in

[src/task/TaskRunner.ts:9](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskRunner.ts#L9)

## Functions

### noopErrorHandler

▸ **noopErrorHandler**(`error`, `task?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `task?` | [`Task`](common.md#task) |

#### Returns

`void`

#### Defined in

[src/task/TaskRunner.ts:9](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskRunner.ts#L9)
