[@io-orkes/conductor-typescript](../README.md) / [Modules](../modules.md) / [core](../modules/core.md) / StartWorkflowRequest

# Interface: StartWorkflowRequest<I\>

[core](../modules/core.md).StartWorkflowRequest

## Type parameters

| Name | Type |
| :------ | :------ |
| `I` | `Record`<`string`, `any`\> |

## Table of contents

### Properties

- [correlationId](core.StartWorkflowRequest.md#correlationid)
- [externalInputPayloadStoragePath](core.StartWorkflowRequest.md#externalinputpayloadstoragepath)
- [input](core.StartWorkflowRequest.md#input)
- [name](core.StartWorkflowRequest.md#name)
- [priority](core.StartWorkflowRequest.md#priority)
- [taskToDomain](core.StartWorkflowRequest.md#tasktodomain)
- [version](core.StartWorkflowRequest.md#version)
- [workflowDef](core.StartWorkflowRequest.md#workflowdef)

## Properties

### correlationId

• `Optional` **correlationId**: `string`

#### Defined in

src/core/types.ts:6

___

### externalInputPayloadStoragePath

• `Optional` **externalInputPayloadStoragePath**: `string`

#### Defined in

src/core/types.ts:10

___

### input

• `Optional` **input**: `I`

#### Defined in

src/core/types.ts:7

___

### name

• **name**: `string`

#### Defined in

src/core/types.ts:4

___

### priority

• `Optional` **priority**: `number`

#### Defined in

src/core/types.ts:11

___

### taskToDomain

• `Optional` **taskToDomain**: `Record`<`string`, `string`\>

#### Defined in

src/core/types.ts:8

___

### version

• **version**: `number`

#### Defined in

src/core/types.ts:5

___

### workflowDef

• `Optional` **workflowDef**: [`WorkflowDef`](common.WorkflowDef.md)

#### Defined in

src/core/types.ts:9
