[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / TokenResourceService

# Class: TokenResourceService

[common](../modules/common.md).TokenResourceService

## Table of contents

### Constructors

- [constructor](common.TokenResourceService.md#constructor)

### Properties

- [httpRequest](common.TokenResourceService.md#httprequest)

### Methods

- [generateToken](common.TokenResourceService.md#generatetoken)
- [getUserInfo](common.TokenResourceService.md#getuserinfo)

## Constructors

### constructor

• **new TokenResourceService**(`httpRequest`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpRequest` | [`BaseHttpRequest`](common.BaseHttpRequest.md) |

#### Defined in

[src/common/open-api/services/TokenResourceService.ts:12](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/TokenResourceService.ts#L12)

## Properties

### httpRequest

• `Readonly` **httpRequest**: [`BaseHttpRequest`](common.BaseHttpRequest.md)

#### Defined in

[src/common/open-api/services/TokenResourceService.ts:12](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/TokenResourceService.ts#L12)

## Methods

### generateToken

▸ **generateToken**(`requestBody`): [`CancelablePromise`](common.CancelablePromise.md)<[`Response`](../modules/common.md#response)\>

Generate JWT with the given access key

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestBody` | [`GenerateTokenRequest`](../modules/common.md#generatetokenrequest) |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<[`Response`](../modules/common.md#response)\>

Response OK

#### Defined in

[src/common/open-api/services/TokenResourceService.ts:20](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/TokenResourceService.ts#L20)

___

### getUserInfo

▸ **getUserInfo**(): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Get the user info from the token

**`Throws`**

ApiError

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`any`\>

any OK

#### Defined in

[src/common/open-api/services/TokenResourceService.ts:36](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/TokenResourceService.ts#L36)
