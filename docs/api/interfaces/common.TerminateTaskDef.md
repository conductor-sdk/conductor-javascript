[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / TerminateTaskDef

# Interface: TerminateTaskDef

[common](../modules/common.md).TerminateTaskDef

## Hierarchy

- [`CommonTaskDef`](common.CommonTaskDef.md)

  ↳ **`TerminateTaskDef`**

## Table of contents

### Properties

- [inputParameters](common.TerminateTaskDef.md#inputparameters)
- [name](common.TerminateTaskDef.md#name)
- [optional](common.TerminateTaskDef.md#optional)
- [startDelay](common.TerminateTaskDef.md#startdelay)
- [taskReferenceName](common.TerminateTaskDef.md#taskreferencename)
- [type](common.TerminateTaskDef.md#type)

## Properties

### inputParameters

• **inputParameters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `terminationReason?` | `string` |
| `terminationStatus` | ``"FAILED"`` \| ``"COMPLETED"`` |
| `workflowOutput?` | `Record`<`string`, `string`\> |

#### Defined in

[src/common/types.ts:178](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L178)

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

[src/common/types.ts:185](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L185)

___

### startDelay

• `Optional` **startDelay**: `number`

#### Defined in

[src/common/types.ts:184](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L184)

___

### taskReferenceName

• **taskReferenceName**: `string`

#### Inherited from

[CommonTaskDef](common.CommonTaskDef.md).[taskReferenceName](common.CommonTaskDef.md#taskreferencename)

#### Defined in

[src/common/types.ts:5](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L5)

___

### type

• **type**: [`TERMINATE`](../enums/common.TaskType.md#terminate)

#### Defined in

[src/common/types.ts:183](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L183)
