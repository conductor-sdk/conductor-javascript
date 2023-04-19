[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / ApiError

# Class: ApiError

[common](../modules/common.md).ApiError

## Hierarchy

- `Error`

  ↳ **`ApiError`**

## Table of contents

### Constructors

- [constructor](common.ApiError.md#constructor)

### Properties

- [body](common.ApiError.md#body)
- [message](common.ApiError.md#message)
- [name](common.ApiError.md#name)
- [request](common.ApiError.md#request)
- [stack](common.ApiError.md#stack)
- [status](common.ApiError.md#status)
- [statusText](common.ApiError.md#statustext)
- [url](common.ApiError.md#url)
- [prepareStackTrace](common.ApiError.md#preparestacktrace)
- [stackTraceLimit](common.ApiError.md#stacktracelimit)

### Methods

- [captureStackTrace](common.ApiError.md#capturestacktrace)

## Constructors

### constructor

• **new ApiError**(`request`, `response`, `message`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `ApiRequestOptions` |
| `response` | `ApiResult` |
| `message` | `string` |

#### Overrides

Error.constructor

#### Defined in

[src/common/open-api/core/ApiError.ts:14](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/ApiError.ts#L14)

## Properties

### body

• `Readonly` **body**: `any`

#### Defined in

[src/common/open-api/core/ApiError.ts:11](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/ApiError.ts#L11)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1023

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1022

___

### request

• `Readonly` **request**: `ApiRequestOptions`

#### Defined in

[src/common/open-api/core/ApiError.ts:12](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/ApiError.ts#L12)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1024

___

### status

• `Readonly` **status**: `number`

#### Defined in

[src/common/open-api/core/ApiError.ts:9](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/ApiError.ts#L9)

___

### statusText

• `Readonly` **statusText**: `string`

#### Defined in

[src/common/open-api/core/ApiError.ts:10](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/ApiError.ts#L10)

___

### url

• `Readonly` **url**: `string`

#### Defined in

[src/common/open-api/core/ApiError.ts:8](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/ApiError.ts#L8)

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:4
