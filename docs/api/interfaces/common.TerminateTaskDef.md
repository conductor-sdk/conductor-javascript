[@io-orkes/conductor-typescript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / TerminateTaskDef

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
| `terminationStatus` | ``"FAILED"`` \| ``"COMPLETED"`` |
| `workflowOutput` | `Record`<`string`, `string`\> |

#### Defined in

src/common/types.ts:176

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

src/common/types.ts:182

___

### startDelay

• **startDelay**: `number`

#### Defined in

src/common/types.ts:181

___

### taskReferenceName

• **taskReferenceName**: `string`

#### Inherited from

[CommonTaskDef](common.CommonTaskDef.md).[taskReferenceName](common.CommonTaskDef.md#taskreferencename)

#### Defined in

src/common/types.ts:5

___

### type

• **type**: [`TERMINATE`](../enums/common.TaskType.md#terminate)

#### Defined in

src/common/types.ts:180
