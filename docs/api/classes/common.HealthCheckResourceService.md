[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / HealthCheckResourceService

# Class: HealthCheckResourceService

[common](../modules/common.md).HealthCheckResourceService

## Table of contents

### Constructors

- [constructor](common.HealthCheckResourceService.md#constructor)

### Properties

- [httpRequest](common.HealthCheckResourceService.md#httprequest)

### Methods

- [doCheck](common.HealthCheckResourceService.md#docheck)

## Constructors

### constructor

• **new HealthCheckResourceService**(`httpRequest`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpRequest` | [`BaseHttpRequest`](common.BaseHttpRequest.md) |

#### Defined in

[src/common/open-api/services/HealthCheckResourceService.ts:9](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/HealthCheckResourceService.ts#L9)

## Properties

### httpRequest

• `Readonly` **httpRequest**: [`BaseHttpRequest`](common.BaseHttpRequest.md)

#### Defined in

[src/common/open-api/services/HealthCheckResourceService.ts:9](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/HealthCheckResourceService.ts#L9)

## Methods

### doCheck

▸ **doCheck**(): [`CancelablePromise`](common.CancelablePromise.md)<`Record`<`string`, `any`\>\>

**`Throws`**

ApiError

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`Record`<`string`, `any`\>\>

any OK

#### Defined in

[src/common/open-api/services/HealthCheckResourceService.ts:15](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/HealthCheckResourceService.ts#L15)
