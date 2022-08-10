[@io-orkes/conductor-typescript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / ForkJoinDynamicDef

# Interface: ForkJoinDynamicDef

[common](../modules/common.md).ForkJoinDynamicDef

## Hierarchy

- [`CommonTaskDef`](common.CommonTaskDef.md)

  ↳ **`ForkJoinDynamicDef`**

## Table of contents

### Properties

- [asyncComplete](common.ForkJoinDynamicDef.md#asynccomplete)
- [dynamicForkTasksInputParamName](common.ForkJoinDynamicDef.md#dynamicforktasksinputparamname)
- [dynamicForkTasksParam](common.ForkJoinDynamicDef.md#dynamicforktasksparam)
- [inputParameters](common.ForkJoinDynamicDef.md#inputparameters)
- [name](common.ForkJoinDynamicDef.md#name)
- [optional](common.ForkJoinDynamicDef.md#optional)
- [startDelay](common.ForkJoinDynamicDef.md#startdelay)
- [taskReferenceName](common.ForkJoinDynamicDef.md#taskreferencename)
- [type](common.ForkJoinDynamicDef.md#type)

## Properties

### asyncComplete

• **asyncComplete**: `boolean`

#### Defined in

src/common/types.ts:91

___

### dynamicForkTasksInputParamName

• **dynamicForkTasksInputParamName**: `string`

#### Defined in

src/common/types.ts:88

___

### dynamicForkTasksParam

• **dynamicForkTasksParam**: `string`

#### Defined in

src/common/types.ts:87

___

### inputParameters

• **inputParameters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dynamicTasks` | `string` |
| `dynamicTasksInput` | `string` |

#### Defined in

src/common/types.ts:82

___

### name

• **name**: `string`

#### Inherited from

[CommonTaskDef](common.CommonTaskDef.md).[name](common.CommonTaskDef.md#name)

#### Defined in

src/common/types.ts:4

___

### optional

• **optional**: `boolean`

#### Defined in

src/common/types.ts:90

___

### startDelay

• **startDelay**: `number`

#### Defined in

src/common/types.ts:89

___

### taskReferenceName

• **taskReferenceName**: `string`

#### Inherited from

[CommonTaskDef](common.CommonTaskDef.md).[taskReferenceName](common.CommonTaskDef.md#taskreferencename)

#### Defined in

src/common/types.ts:5

___

### type

• **type**: [`FORK_JOIN_DYNAMIC`](../enums/common.TaskType.md#fork_join_dynamic)

#### Defined in

src/common/types.ts:86
