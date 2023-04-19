[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / KafkaPublishTaskDef

# Interface: KafkaPublishTaskDef

[common](../modules/common.md).KafkaPublishTaskDef

## Hierarchy

- [`CommonTaskDef`](common.CommonTaskDef.md)

  ↳ **`KafkaPublishTaskDef`**

## Table of contents

### Properties

- [inputParameters](common.KafkaPublishTaskDef.md#inputparameters)
- [name](common.KafkaPublishTaskDef.md#name)
- [taskReferenceName](common.KafkaPublishTaskDef.md#taskreferencename)
- [type](common.KafkaPublishTaskDef.md#type)

## Properties

### inputParameters

• **inputParameters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `kafka_request` | [`KafkaPublishInputParameters`](common.KafkaPublishInputParameters.md) |

#### Defined in

[src/common/types.ts:142](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L142)

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

• **type**: [`KAFKA_PUBLISH`](../enums/common.TaskType.md#kafka_publish)

#### Defined in

[src/common/types.ts:145](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L145)
