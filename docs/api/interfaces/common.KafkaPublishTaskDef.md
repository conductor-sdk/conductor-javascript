[@io-orkes/conductor-typescript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / KafkaPublishTaskDef

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
| `kafka_request` | { `bootStrapServers`: `string` ; `headers`: `Record`<`string`, `string`\> ; `key`: `string` ; `keySerializer`: `string` ; `topic`: `string` ; `value`: `string`  } |
| `kafka_request.bootStrapServers` | `string` |
| `kafka_request.headers` | `Record`<`string`, `string`\> |
| `kafka_request.key` | `string` |
| `kafka_request.keySerializer` | `string` |
| `kafka_request.topic` | `string` |
| `kafka_request.value` | `string` |

#### Defined in

src/common/types.ts:133

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

• **type**: [`KAFKA_PUBLISH`](../enums/common.TaskType.md#kafka_publish)

#### Defined in

src/common/types.ts:143
