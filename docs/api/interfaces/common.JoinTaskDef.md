[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / JoinTaskDef

# Interface: JoinTaskDef

[common](../modules/common.md).JoinTaskDef

## Hierarchy

- [`CommonTaskDef`](common.CommonTaskDef.md)

  ↳ **`JoinTaskDef`**

## Table of contents

### Properties

- [asyncComplete](common.JoinTaskDef.md#asynccomplete)
- [inputParameters](common.JoinTaskDef.md#inputparameters)
- [joinOn](common.JoinTaskDef.md#joinon)
- [name](common.JoinTaskDef.md#name)
- [optional](common.JoinTaskDef.md#optional)
- [taskReferenceName](common.JoinTaskDef.md#taskreferencename)
- [type](common.JoinTaskDef.md#type)

## Properties

### asyncComplete

• `Optional` **asyncComplete**: `boolean`

#### Defined in

[src/common/types.ts:77](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L77)

___

### inputParameters

• `Optional` **inputParameters**: `Record`<`string`, `string`\>

#### Defined in

[src/common/types.ts:74](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L74)

___

### joinOn

• **joinOn**: `string`[]

#### Defined in

[src/common/types.ts:75](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L75)

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

[src/common/types.ts:76](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L76)

___

### taskReferenceName

• **taskReferenceName**: `string`

#### Inherited from

[CommonTaskDef](common.CommonTaskDef.md).[taskReferenceName](common.CommonTaskDef.md#taskreferencename)

#### Defined in

[src/common/types.ts:5](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L5)

___

### type

• **type**: [`JOIN`](../enums/common.TaskType.md#join)

#### Defined in

[src/common/types.ts:73](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L73)
