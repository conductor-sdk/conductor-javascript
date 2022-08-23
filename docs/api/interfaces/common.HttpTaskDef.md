[@io-orkes/conductor-typescript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / HttpTaskDef

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
| `http_request` | { `accept?`: `string` ; `body?`: `unknown` ; `connectionTimeOut?`: `number` ; `contentType?`: `string` ; `headers?`: `Record`<`string`, `string`\> ; `method`: ``"GET"`` \| ``"PUT"`` \| ``"POST"`` \| ``"DELETE"`` \| ``"OPTIONS"`` \| ``"HEAD"`` ; `readTimeOut?`: `string` ; `uri`: `string`  } |
| `http_request.accept?` | `string` |
| `http_request.body?` | `unknown` |
| `http_request.connectionTimeOut?` | `number` |
| `http_request.contentType?` | `string` |
| `http_request.headers?` | `Record`<`string`, `string`\> |
| `http_request.method` | ``"GET"`` \| ``"PUT"`` \| ``"POST"`` \| ``"DELETE"`` \| ``"OPTIONS"`` \| ``"HEAD"`` |
| `http_request.readTimeOut?` | `string` |
| `http_request.uri` | `string` |

#### Defined in

src/common/types.ts:95

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

• **type**: [`HTTP`](../enums/common.TaskType.md#http)

#### Defined in

src/common/types.ts:108
