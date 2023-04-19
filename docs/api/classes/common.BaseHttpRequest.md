[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / BaseHttpRequest

# Class: BaseHttpRequest

[common](../modules/common.md).BaseHttpRequest

## Table of contents

### Constructors

- [constructor](common.BaseHttpRequest.md#constructor)

### Properties

- [config](common.BaseHttpRequest.md#config)

### Methods

- [request](common.BaseHttpRequest.md#request)

## Constructors

### constructor

• **new BaseHttpRequest**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`OpenAPIConfig`](../modules/common.md#openapiconfig) |

#### Defined in

[src/common/open-api/core/BaseHttpRequest.ts:10](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/BaseHttpRequest.ts#L10)

## Properties

### config

• `Readonly` **config**: [`OpenAPIConfig`](../modules/common.md#openapiconfig)

#### Defined in

[src/common/open-api/core/BaseHttpRequest.ts:10](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/BaseHttpRequest.ts#L10)

## Methods

### request

▸ `Abstract` **request**<`T`\>(`options`): [`CancelablePromise`](common.CancelablePromise.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ApiRequestOptions` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`T`\>

#### Defined in

[src/common/open-api/core/BaseHttpRequest.ts:12](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/BaseHttpRequest.ts#L12)
