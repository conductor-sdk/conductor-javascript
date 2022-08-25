[@io-orkes/conductor-typescript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / ForkJoinTaskDef

# Interface: ForkJoinTaskDef

[common](../modules/common.md).ForkJoinTaskDef

## Hierarchy

- [`CommonTaskDef`](common.CommonTaskDef.md)

  ↳ **`ForkJoinTaskDef`**

## Table of contents

### Properties

- [forkTasks](common.ForkJoinTaskDef.md#forktasks)
- [inputParameters](common.ForkJoinTaskDef.md#inputparameters)
- [name](common.ForkJoinTaskDef.md#name)
- [taskReferenceName](common.ForkJoinTaskDef.md#taskreferencename)
- [type](common.ForkJoinTaskDef.md#type)

## Properties

### forkTasks

• **forkTasks**: [`TaskDefTypes`](../modules/common.md#taskdeftypes)[][]

#### Defined in

src/common/types.ts:70

___

### inputParameters

• **inputParameters**: `Record`<`string`, `string`\>

#### Defined in

src/common/types.ts:69

___

### name

• **name**: `string`

#### Inherited from

[CommonTaskDef](common.CommonTaskDef.md).[name](common.CommonTaskDef.md#name)

#### Defined in

src/common/types.ts:4

___

### taskReferenceName

• **taskReferenceName**: `string`

#### Inherited from

[CommonTaskDef](common.CommonTaskDef.md).[taskReferenceName](common.CommonTaskDef.md#taskreferencename)

#### Defined in

src/common/types.ts:5

___

### type

• **type**: [`FORK_JOIN`](../enums/common.TaskType.md#fork_join)

#### Defined in

src/common/types.ts:68
