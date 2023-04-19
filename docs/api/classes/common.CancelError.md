[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / CancelError

# Class: CancelError

[common](../modules/common.md).CancelError

## Hierarchy

- `Error`

  ↳ **`CancelError`**

## Table of contents

### Constructors

- [constructor](common.CancelError.md#constructor)

### Properties

- [message](common.CancelError.md#message)
- [name](common.CancelError.md#name)
- [stack](common.CancelError.md#stack)
- [prepareStackTrace](common.CancelError.md#preparestacktrace)
- [stackTraceLimit](common.CancelError.md#stacktracelimit)

### Accessors

- [isCancelled](common.CancelError.md#iscancelled)

### Methods

- [captureStackTrace](common.CancelError.md#capturestacktrace)

## Constructors

### constructor

• **new CancelError**(`message`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Overrides

Error.constructor

#### Defined in

[src/common/open-api/core/CancelablePromise.ts:6](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/CancelablePromise.ts#L6)

## Properties

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

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1024

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

## Accessors

### isCancelled

• `get` **isCancelled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/common/open-api/core/CancelablePromise.ts:11](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/CancelablePromise.ts#L11)

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
