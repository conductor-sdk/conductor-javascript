[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / ForkJoinDynamicDef

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

• `Optional` **asyncComplete**: `boolean`

#### Defined in

[src/common/types.ts:90](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L90)

___

### dynamicForkTasksInputParamName

• **dynamicForkTasksInputParamName**: `string`

#### Defined in

[src/common/types.ts:87](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L87)

___

### dynamicForkTasksParam

• **dynamicForkTasksParam**: `string`

#### Defined in

[src/common/types.ts:86](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L86)

___

### inputParameters

• **inputParameters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dynamicTasks` | `any` |
| `dynamicTasksInput` | `any` |

#### Defined in

[src/common/types.ts:81](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L81)

___

### name

• **name**: `string`

#### Inherited from

[CommonTaskDef](common.CommonTaskDef.md).[name](common.CommonTaskDef.md#name)

#### Defined in

[src/common/types.ts:4](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L4)

___

### optional

• `Optional` **optional**: `boolean`

#### Defined in

[src/common/types.ts:89](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L89)

___

### startDelay

• `Optional` **startDelay**: `number`

#### Defined in

[src/common/types.ts:88](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L88)

___

### taskReferenceName

• **taskReferenceName**: `string`

#### Inherited from

[CommonTaskDef](common.CommonTaskDef.md).[taskReferenceName](common.CommonTaskDef.md#taskreferencename)

#### Defined in

[src/common/types.ts:5](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L5)

___

### type

• **type**: [`FORK_JOIN_DYNAMIC`](../enums/common.TaskType.md#fork_join_dynamic)

#### Defined in

[src/common/types.ts:85](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L85)
