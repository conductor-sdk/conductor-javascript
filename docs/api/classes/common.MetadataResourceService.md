[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / MetadataResourceService

# Class: MetadataResourceService

[common](../modules/common.md).MetadataResourceService

## Table of contents

### Constructors

- [constructor](common.MetadataResourceService.md#constructor)

### Properties

- [httpRequest](common.MetadataResourceService.md#httprequest)

### Methods

- [create](common.MetadataResourceService.md#create)
- [get](common.MetadataResourceService.md#get)
- [getAllWorkflows](common.MetadataResourceService.md#getallworkflows)
- [getTaskDef](common.MetadataResourceService.md#gettaskdef)
- [getTaskDefs](common.MetadataResourceService.md#gettaskdefs)
- [registerTaskDef](common.MetadataResourceService.md#registertaskdef)
- [unregisterTaskDef](common.MetadataResourceService.md#unregistertaskdef)
- [unregisterWorkflowDef](common.MetadataResourceService.md#unregisterworkflowdef)
- [update](common.MetadataResourceService.md#update)
- [updateTaskDef](common.MetadataResourceService.md#updatetaskdef)

## Constructors

### constructor

• **new MetadataResourceService**(`httpRequest`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpRequest` | [`BaseHttpRequest`](common.BaseHttpRequest.md) |

#### Defined in

[src/common/open-api/services/MetadataResourceService.ts:12](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/MetadataResourceService.ts#L12)

## Properties

### httpRequest

• `Readonly` **httpRequest**: [`BaseHttpRequest`](common.BaseHttpRequest.md)

#### Defined in

[src/common/open-api/services/MetadataResourceService.ts:12](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/MetadataResourceService.ts#L12)

## Methods

### create

▸ **create**(`requestBody`, `overwrite?`): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Create a new workflow definition

**`Throws`**

ApiError

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `requestBody` | `WorkflowDef` | `undefined` |
| `overwrite` | `boolean` | `false` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`any`\>

any OK

#### Defined in

[src/common/open-api/services/MetadataResourceService.ts:111](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/MetadataResourceService.ts#L111)

___

### get

▸ **get**(`name`, `version?`, `metadata?`): [`CancelablePromise`](common.CancelablePromise.md)<`WorkflowDef`\>

Retrieves workflow definition along with blueprint

**`Throws`**

ApiError

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `version?` | `number` | `undefined` |
| `metadata` | `boolean` | `false` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`WorkflowDef`\>

WorkflowDef OK

#### Defined in

[src/common/open-api/services/MetadataResourceService.ts:216](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/MetadataResourceService.ts#L216)

___

### getAllWorkflows

▸ **getAllWorkflows**(`access?`, `metadata?`, `tagKey?`, `tagValue?`): [`CancelablePromise`](common.CancelablePromise.md)<`WorkflowDef`[]\>

Retrieves all workflow definition along with blueprint

**`Throws`**

ApiError

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `access` | `string` | `'READ'` |
| `metadata` | `boolean` | `false` |
| `tagKey?` | `string` | `undefined` |
| `tagValue?` | `string` | `undefined` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`WorkflowDef`[]\>

WorkflowDef OK

#### Defined in

[src/common/open-api/services/MetadataResourceService.ts:64](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/MetadataResourceService.ts#L64)

___

### getTaskDef

▸ **getTaskDef**(`tasktype`, `metadata?`): [`CancelablePromise`](common.CancelablePromise.md)<[`TaskDef`](../modules/common.md#taskdef)\>

Gets the task definition

**`Throws`**

ApiError

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tasktype` | `string` | `undefined` |
| `metadata` | `boolean` | `false` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<[`TaskDef`](../modules/common.md#taskdef)\>

TaskDef OK

#### Defined in

[src/common/open-api/services/MetadataResourceService.ts:21](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/MetadataResourceService.ts#L21)

___

### getTaskDefs

▸ **getTaskDefs**(`access?`, `metadata?`, `tagKey?`, `tagValue?`): [`CancelablePromise`](common.CancelablePromise.md)<[`TaskDef`](../modules/common.md#taskdef)[]\>

Gets all task definition

**`Throws`**

ApiError

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `access` | `string` | `'READ'` |
| `metadata` | `boolean` | `false` |
| `tagKey?` | `string` | `undefined` |
| `tagValue?` | `string` | `undefined` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<[`TaskDef`](../modules/common.md#taskdef)[]\>

TaskDef OK

#### Defined in

[src/common/open-api/services/MetadataResourceService.ts:135](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/MetadataResourceService.ts#L135)

___

### registerTaskDef

▸ **registerTaskDef**(`requestBody`): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Create or update task definition(s)

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestBody` | [`TaskDef`](../modules/common.md#taskdef)[] |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`any`\>

any OK

#### Defined in

[src/common/open-api/services/MetadataResourceService.ts:176](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/MetadataResourceService.ts#L176)

___

### unregisterTaskDef

▸ **unregisterTaskDef**(`tasktype`): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Remove a task definition

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasktype` | `string` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`any`\>

any OK

#### Defined in

[src/common/open-api/services/MetadataResourceService.ts:43](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/MetadataResourceService.ts#L43)

___

### unregisterWorkflowDef

▸ **unregisterWorkflowDef**(`name`, `version`): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Removes workflow definition. It does not remove workflows associated with the definition.

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `version` | `number` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`any`\>

any OK

#### Defined in

[src/common/open-api/services/MetadataResourceService.ts:194](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/MetadataResourceService.ts#L194)

___

### update

▸ **update**(`requestBody`, `overwrite?`): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Create or update workflow definition(s)

**`Throws`**

ApiError

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `requestBody` | `WorkflowDef`[] | `undefined` |
| `overwrite` | `boolean` | `true` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`any`\>

any OK

#### Defined in

[src/common/open-api/services/MetadataResourceService.ts:89](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/MetadataResourceService.ts#L89)

___

### updateTaskDef

▸ **updateTaskDef**(`requestBody`): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Update an existing task

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestBody` | [`TaskDef`](../modules/common.md#taskdef) |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`any`\>

any OK

#### Defined in

[src/common/open-api/services/MetadataResourceService.ts:159](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/MetadataResourceService.ts#L159)
