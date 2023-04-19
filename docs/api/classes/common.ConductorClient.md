[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / ConductorClient

# Class: ConductorClient

[common](../modules/common.md).ConductorClient

## Table of contents

### Constructors

- [constructor](common.ConductorClient.md#constructor)

### Properties

- [eventResource](common.ConductorClient.md#eventresource)
- [healthCheckResource](common.ConductorClient.md#healthcheckresource)
- [metadataResource](common.ConductorClient.md#metadataresource)
- [request](common.ConductorClient.md#request)
- [schedulerResource](common.ConductorClient.md#schedulerresource)
- [taskResource](common.ConductorClient.md#taskresource)
- [token](common.ConductorClient.md#token)
- [tokenResource](common.ConductorClient.md#tokenresource)
- [workflowBulkResource](common.ConductorClient.md#workflowbulkresource)
- [workflowResource](common.ConductorClient.md#workflowresource)

## Constructors

### constructor

• **new ConductorClient**(`config?`, `requestHandler?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `config?` | `Partial`<`ConductorClientAPIConfig`\> | `undefined` |
| `requestHandler` | [`ConductorHttpRequest`](../modules/common.md#conductorhttprequest) | `defaultRequestHandler` |

#### Defined in

[src/common/open-api/ConductorClient.ts:44](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/ConductorClient.ts#L44)

## Properties

### eventResource

• `Readonly` **eventResource**: [`EventResourceService`](common.EventResourceService.md)

#### Defined in

[src/common/open-api/ConductorClient.ts:31](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/ConductorClient.ts#L31)

___

### healthCheckResource

• `Readonly` **healthCheckResource**: [`HealthCheckResourceService`](common.HealthCheckResourceService.md)

#### Defined in

[src/common/open-api/ConductorClient.ts:32](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/ConductorClient.ts#L32)

___

### metadataResource

• `Readonly` **metadataResource**: [`MetadataResourceService`](common.MetadataResourceService.md)

#### Defined in

[src/common/open-api/ConductorClient.ts:33](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/ConductorClient.ts#L33)

___

### request

• `Readonly` **request**: [`BaseHttpRequest`](common.BaseHttpRequest.md)

#### Defined in

[src/common/open-api/ConductorClient.ts:40](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/ConductorClient.ts#L40)

___

### schedulerResource

• `Readonly` **schedulerResource**: [`SchedulerResourceService`](common.SchedulerResourceService.md)

#### Defined in

[src/common/open-api/ConductorClient.ts:34](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/ConductorClient.ts#L34)

___

### taskResource

• `Readonly` **taskResource**: [`TaskResourceService`](common.TaskResourceService.md)

#### Defined in

[src/common/open-api/ConductorClient.ts:35](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/ConductorClient.ts#L35)

___

### token

• `Optional` `Readonly` **token**: `string` \| `Resolver`<`string`\>

#### Defined in

[src/common/open-api/ConductorClient.ts:42](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/ConductorClient.ts#L42)

___

### tokenResource

• `Readonly` **tokenResource**: [`TokenResourceService`](common.TokenResourceService.md)

#### Defined in

[src/common/open-api/ConductorClient.ts:36](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/ConductorClient.ts#L36)

___

### workflowBulkResource

• `Readonly` **workflowBulkResource**: [`WorkflowBulkResourceService`](common.WorkflowBulkResourceService.md)

#### Defined in

[src/common/open-api/ConductorClient.ts:37](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/ConductorClient.ts#L37)

___

### workflowResource

• `Readonly` **workflowResource**: [`WorkflowResourceService`](common.WorkflowResourceService.md)

#### Defined in

[src/common/open-api/ConductorClient.ts:38](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/ConductorClient.ts#L38)
