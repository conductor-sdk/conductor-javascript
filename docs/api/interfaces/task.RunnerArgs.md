[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [task](../modules/task.md) / RunnerArgs

# Interface: RunnerArgs

[task](../modules/task.md).RunnerArgs

## Table of contents

### Properties

- [logger](task.RunnerArgs.md#logger)
- [onError](task.RunnerArgs.md#onerror)
- [options](task.RunnerArgs.md#options)
- [taskResource](task.RunnerArgs.md#taskresource)
- [worker](task.RunnerArgs.md#worker)

## Properties

### logger

• `Optional` **logger**: [`ConductorLogger`](common.ConductorLogger.md)

#### Defined in

[src/task/TaskRunner.ts:15](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskRunner.ts#L15)

___

### onError

• `Optional` **onError**: [`TaskErrorHandler`](../modules/task.md#taskerrorhandler)

#### Defined in

[src/task/TaskRunner.ts:16](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskRunner.ts#L16)

___

### options

• **options**: `Required`<[`TaskManagerOptions`](task.TaskManagerOptions.md)\>

#### Defined in

[src/task/TaskRunner.ts:14](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskRunner.ts#L14)

___

### taskResource

• **taskResource**: [`TaskResourceService`](../classes/common.TaskResourceService.md)

#### Defined in

[src/task/TaskRunner.ts:13](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskRunner.ts#L13)

___

### worker

• **worker**: [`ConductorWorker`](task.ConductorWorker.md)

#### Defined in

[src/task/TaskRunner.ts:12](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/task/TaskRunner.ts#L12)
