[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / CancelablePromise

# Class: CancelablePromise<T\>

[common](../modules/common.md).CancelablePromise

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- `Promise`<`T`\>

## Table of contents

### Constructors

- [constructor](common.CancelablePromise.md#constructor)

### Properties

- [[toStringTag]](common.CancelablePromise.md#[tostringtag])
- [\_cancelHandlers](common.CancelablePromise.md#_cancelhandlers)
- [\_isCancelled](common.CancelablePromise.md#_iscancelled)
- [\_isRejected](common.CancelablePromise.md#_isrejected)
- [\_isResolved](common.CancelablePromise.md#_isresolved)
- [\_promise](common.CancelablePromise.md#_promise)
- [\_reject](common.CancelablePromise.md#_reject)
- [\_resolve](common.CancelablePromise.md#_resolve)

### Accessors

- [isCancelled](common.CancelablePromise.md#iscancelled)

### Methods

- [cancel](common.CancelablePromise.md#cancel)
- [catch](common.CancelablePromise.md#catch)
- [finally](common.CancelablePromise.md#finally)
- [then](common.CancelablePromise.md#then)

## Constructors

### constructor

• **new CancelablePromise**<`T`\>(`executor`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `executor` | (`resolve`: (`value`: `T` \| `PromiseLike`<`T`\>) => `void`, `reject`: (`reason?`: `any`) => `void`, `onCancel`: [`OnCancel`](../interfaces/common.OnCancel.md)) => `void` |

#### Defined in

[src/common/open-api/core/CancelablePromise.ts:35](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/CancelablePromise.ts#L35)

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Implementation of

Promise.\_\_@toStringTag@137

#### Defined in

[src/common/open-api/core/CancelablePromise.ts:25](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/CancelablePromise.ts#L25)

___

### \_cancelHandlers

• `Private` `Readonly` **\_cancelHandlers**: () => `void`[]

#### Defined in

[src/common/open-api/core/CancelablePromise.ts:30](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/CancelablePromise.ts#L30)

___

### \_isCancelled

• `Private` **\_isCancelled**: `boolean`

#### Defined in

[src/common/open-api/core/CancelablePromise.ts:29](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/CancelablePromise.ts#L29)

___

### \_isRejected

• `Private` **\_isRejected**: `boolean`

#### Defined in

[src/common/open-api/core/CancelablePromise.ts:28](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/CancelablePromise.ts#L28)

___

### \_isResolved

• `Private` **\_isResolved**: `boolean`

#### Defined in

[src/common/open-api/core/CancelablePromise.ts:27](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/CancelablePromise.ts#L27)

___

### \_promise

• `Private` `Readonly` **\_promise**: `Promise`<`T`\>

#### Defined in

[src/common/open-api/core/CancelablePromise.ts:31](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/CancelablePromise.ts#L31)

___

### \_reject

• `Private` `Optional` **\_reject**: (`reason?`: `any`) => `void`

#### Type declaration

▸ (`reason?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

##### Returns

`void`

#### Defined in

[src/common/open-api/core/CancelablePromise.ts:33](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/CancelablePromise.ts#L33)

___

### \_resolve

• `Private` `Optional` **\_resolve**: (`value`: `T` \| `PromiseLike`<`T`\>) => `void`

#### Type declaration

▸ (`value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` \| `PromiseLike`<`T`\> |

##### Returns

`void`

#### Defined in

[src/common/open-api/core/CancelablePromise.ts:32](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/CancelablePromise.ts#L32)

## Accessors

### isCancelled

• `get` **isCancelled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/common/open-api/core/CancelablePromise.ts:125](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/CancelablePromise.ts#L125)

## Methods

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Defined in

[src/common/open-api/core/CancelablePromise.ts:106](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/CancelablePromise.ts#L106)

___

### catch

▸ **catch**<`TResult`\>(`onRejected?`): `Promise`<`T` \| `TResult`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onRejected?` | ``null`` \| (`reason`: `any`) => `TResult` \| `PromiseLike`<`TResult`\> |

#### Returns

`Promise`<`T` \| `TResult`\>

#### Implementation of

Promise.catch

#### Defined in

[src/common/open-api/core/CancelablePromise.ts:96](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/CancelablePromise.ts#L96)

___

### finally

▸ **finally**(`onFinally?`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `onFinally?` | ``null`` \| () => `void` |

#### Returns

`Promise`<`T`\>

#### Implementation of

Promise.finally

#### Defined in

[src/common/open-api/core/CancelablePromise.ts:102](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/CancelablePromise.ts#L102)

___

### then

▸ **then**<`TResult1`, `TResult2`\>(`onFulfilled?`, `onRejected?`): `Promise`<`TResult1` \| `TResult2`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult1` | `T` |
| `TResult2` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onFulfilled?` | ``null`` \| (`value`: `T`) => `TResult1` \| `PromiseLike`<`TResult1`\> |
| `onRejected?` | ``null`` \| (`reason`: `any`) => `TResult2` \| `PromiseLike`<`TResult2`\> |

#### Returns

`Promise`<`TResult1` \| `TResult2`\>

#### Implementation of

Promise.then

#### Defined in

[src/common/open-api/core/CancelablePromise.ts:89](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/CancelablePromise.ts#L89)
