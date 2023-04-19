[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [task](../modules/task.md) / ConductorWorker

# Interface: ConductorWorker

[task](../modules/task.md).ConductorWorker

Functional interface for defining a worker implementation that processes tasks from a conductor queue.

**`Remarks`**

Optional items allow overriding properties on a per-worker basis. Items not overridden
here will be inherited from the `TaskManager` options.

## Table of contents

### Properties

- [concurrency](task.ConductorWorker.md#concurrency)
- [domain](task.ConductorWorker.md#domain)
- [execute](task.ConductorWorker.md#execute)
- [taskDefName](task.ConductorWorker.md#taskdefname)

## Properties

### concurrency

• `Optional` **concurrency**: `number`

#### Defined in

[src/task/Worker.ts:17](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/Worker.ts#L17)

___

### domain

• `Optional` **domain**: `string`

#### Defined in

[src/task/Worker.ts:13](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/Worker.ts#L13)

___

### execute

• **execute**: (`task`: [`Task`](../modules/common.md#task)) => `Promise`<`Omit`<[`TaskResult`](../modules/common.md#taskresult), ``"workflowInstanceId"`` \| ``"taskId"``\>\>

#### Type declaration

▸ (`task`): `Promise`<`Omit`<[`TaskResult`](../modules/common.md#taskresult), ``"workflowInstanceId"`` \| ``"taskId"``\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`Task`](../modules/common.md#task) |

##### Returns

`Promise`<`Omit`<[`TaskResult`](../modules/common.md#taskresult), ``"workflowInstanceId"`` \| ``"taskId"``\>\>

#### Defined in

[src/task/Worker.ts:12](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/Worker.ts#L12)

___

### taskDefName

• **taskDefName**: `string`

#### Defined in

[src/task/Worker.ts:11](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/Worker.ts#L11)
