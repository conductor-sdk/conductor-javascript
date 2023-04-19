[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / SubWorkflowTaskDef

# Interface: SubWorkflowTaskDef

[common](../modules/common.md).SubWorkflowTaskDef

## Hierarchy

- [`CommonTaskDef`](common.CommonTaskDef.md)

  ↳ **`SubWorkflowTaskDef`**

## Table of contents

### Properties

- [inputParameters](common.SubWorkflowTaskDef.md#inputparameters)
- [name](common.SubWorkflowTaskDef.md#name)
- [subWorkflowParam](common.SubWorkflowTaskDef.md#subworkflowparam)
- [taskReferenceName](common.SubWorkflowTaskDef.md#taskreferencename)
- [type](common.SubWorkflowTaskDef.md#type)

## Properties

### inputParameters

• `Optional` **inputParameters**: `Record`<`string`, `unknown`\>

#### Defined in

[src/common/types.ts:160](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L160)

___

### name

• **name**: `string`

#### Inherited from

[CommonTaskDef](common.CommonTaskDef.md).[name](common.CommonTaskDef.md#name)

#### Defined in

[src/common/types.ts:4](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L4)

___

### subWorkflowParam

• **subWorkflowParam**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `taskToDomain?` | `Record`<`string`, `string`\> |
| `version?` | `number` |

#### Defined in

[src/common/types.ts:161](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L161)

___

### taskReferenceName

• **taskReferenceName**: `string`

#### Inherited from

[CommonTaskDef](common.CommonTaskDef.md).[taskReferenceName](common.CommonTaskDef.md#taskreferencename)

#### Defined in

[src/common/types.ts:5](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L5)

___

### type

• **type**: [`SUB_WORKFLOW`](../enums/common.TaskType.md#sub_workflow)

#### Defined in

[src/common/types.ts:159](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L159)
