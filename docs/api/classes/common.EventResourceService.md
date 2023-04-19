[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / EventResourceService

# Class: EventResourceService

[common](../modules/common.md).EventResourceService

## Table of contents

### Constructors

- [constructor](common.EventResourceService.md#constructor)

### Properties

- [httpRequest](common.EventResourceService.md#httprequest)

### Methods

- [addEventHandler](common.EventResourceService.md#addeventhandler)
- [deleteQueueConfig](common.EventResourceService.md#deletequeueconfig)
- [getEventHandlers](common.EventResourceService.md#geteventhandlers)
- [getEventHandlersForEvent](common.EventResourceService.md#geteventhandlersforevent)
- [getQueueConfig](common.EventResourceService.md#getqueueconfig)
- [getQueueNames](common.EventResourceService.md#getqueuenames)
- [putQueueConfig](common.EventResourceService.md#putqueueconfig)
- [removeEventHandlerStatus](common.EventResourceService.md#removeeventhandlerstatus)
- [updateEventHandler](common.EventResourceService.md#updateeventhandler)

## Constructors

### constructor

• **new EventResourceService**(`httpRequest`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpRequest` | [`BaseHttpRequest`](common.BaseHttpRequest.md) |

#### Defined in

[src/common/open-api/services/EventResourceService.ts:11](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/EventResourceService.ts#L11)

## Properties

### httpRequest

• `Readonly` **httpRequest**: [`BaseHttpRequest`](common.BaseHttpRequest.md)

#### Defined in

[src/common/open-api/services/EventResourceService.ts:11](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/EventResourceService.ts#L11)

## Methods

### addEventHandler

▸ **addEventHandler**(`requestBody`): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Add a new event handler.

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestBody` | [`EventHandler`](../modules/common.md#eventhandler) |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`any`\>

any OK

#### Defined in

[src/common/open-api/services/EventResourceService.ts:115](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/EventResourceService.ts#L115)

___

### deleteQueueConfig

▸ **deleteQueueConfig**(`queueType`, `queueName`): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Delete queue config by name

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `queueType` | `string` |
| `queueName` | `string` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`any`\>

any OK

#### Defined in

[src/common/open-api/services/EventResourceService.ts:66](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/EventResourceService.ts#L66)

___

### getEventHandlers

▸ **getEventHandlers**(): [`CancelablePromise`](common.CancelablePromise.md)<[`EventHandler`](../modules/common.md#eventhandler)[]\>

Get all the event handlers

**`Throws`**

ApiError

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<[`EventHandler`](../modules/common.md#eventhandler)[]\>

EventHandler OK

#### Defined in

[src/common/open-api/services/EventResourceService.ts:85](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/EventResourceService.ts#L85)

___

### getEventHandlersForEvent

▸ **getEventHandlersForEvent**(`event`, `activeOnly?`): [`CancelablePromise`](common.CancelablePromise.md)<[`EventHandler`](../modules/common.md#eventhandler)[]\>

Get event handlers for a given event

**`Throws`**

ApiError

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `event` | `string` | `undefined` |
| `activeOnly` | `boolean` | `true` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<[`EventHandler`](../modules/common.md#eventhandler)[]\>

EventHandler OK

#### Defined in

[src/common/open-api/services/EventResourceService.ts:163](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/EventResourceService.ts#L163)

___

### getQueueConfig

▸ **getQueueConfig**(`queueType`, `queueName`): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Get queue config by name

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `queueType` | `string` |
| `queueName` | `string` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`any`\>

any OK

#### Defined in

[src/common/open-api/services/EventResourceService.ts:20](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/EventResourceService.ts#L20)

___

### getQueueNames

▸ **getQueueNames**(): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Get all queue configs

**`Throws`**

ApiError

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`any`\>

any OK

#### Defined in

[src/common/open-api/services/EventResourceService.ts:131](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/EventResourceService.ts#L131)

___

### putQueueConfig

▸ **putQueueConfig**(`queueType`, `queueName`, `requestBody`): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Create or update queue config by name

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `queueType` | `string` |
| `queueName` | `string` |
| `requestBody` | `string` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`any`\>

any OK

#### Defined in

[src/common/open-api/services/EventResourceService.ts:42](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/EventResourceService.ts#L42)

___

### removeEventHandlerStatus

▸ **removeEventHandlerStatus**(`name`): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Remove an event handler

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`any`\>

any OK

#### Defined in

[src/common/open-api/services/EventResourceService.ts:144](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/EventResourceService.ts#L144)

___

### updateEventHandler

▸ **updateEventHandler**(`requestBody`): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Update an existing event handler.

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestBody` | [`EventHandler`](../modules/common.md#eventhandler) |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`any`\>

any OK

#### Defined in

[src/common/open-api/services/EventResourceService.ts:98](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/EventResourceService.ts#L98)
