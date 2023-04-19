[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / HttpTaskDef

# Interface: HttpTaskDef

[common](../modules/common.md).HttpTaskDef

## Hierarchy

- [`CommonTaskDef`](common.CommonTaskDef.md)

  ↳ **`HttpTaskDef`**

## Table of contents

### Properties

- [inputParameters](common.HttpTaskDef.md#inputparameters)
- [name](common.HttpTaskDef.md#name)
- [taskReferenceName](common.HttpTaskDef.md#taskreferencename)
- [type](common.HttpTaskDef.md#type)

## Properties

### inputParameters

• **inputParameters**: `Object`

#### Index signature

▪ [x: `string`]: `unknown`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `http_request` | [`HttpInputParameters`](common.HttpInputParameters.md) |

#### Defined in

[src/common/types.ts:104](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L104)

___

### name

• **name**: `string`

#### Inherited from

[CommonTaskDef](common.CommonTaskDef.md).[name](common.CommonTaskDef.md#name)

#### Defined in

[src/common/types.ts:4](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L4)

___

### taskReferenceName

• **taskReferenceName**: `string`

#### Inherited from

[CommonTaskDef](common.CommonTaskDef.md).[taskReferenceName](common.CommonTaskDef.md#taskreferencename)

#### Defined in

[src/common/types.ts:5](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L5)

___

### type

• **type**: [`HTTP`](../enums/common.TaskType.md#http)

#### Defined in

[src/common/types.ts:108](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L108)
