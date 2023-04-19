[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / WorkflowBulkResourceService

# Class: WorkflowBulkResourceService

[common](../modules/common.md).WorkflowBulkResourceService

## Table of contents

### Constructors

- [constructor](common.WorkflowBulkResourceService.md#constructor)

### Properties

- [httpRequest](common.WorkflowBulkResourceService.md#httprequest)

### Methods

- [pauseWorkflow1](common.WorkflowBulkResourceService.md#pauseworkflow1)
- [restart](common.WorkflowBulkResourceService.md#restart)
- [resumeWorkflow](common.WorkflowBulkResourceService.md#resumeworkflow)
- [retry](common.WorkflowBulkResourceService.md#retry)
- [terminate](common.WorkflowBulkResourceService.md#terminate)

## Constructors

### constructor

• **new WorkflowBulkResourceService**(`httpRequest`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpRequest` | [`BaseHttpRequest`](common.BaseHttpRequest.md) |

#### Defined in

[src/common/open-api/services/WorkflowBulkResourceService.ts:11](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowBulkResourceService.ts#L11)

## Properties

### httpRequest

• `Readonly` **httpRequest**: [`BaseHttpRequest`](common.BaseHttpRequest.md)

#### Defined in

[src/common/open-api/services/WorkflowBulkResourceService.ts:11](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowBulkResourceService.ts#L11)

## Methods

### pauseWorkflow1

▸ **pauseWorkflow1**(`requestBody`): [`CancelablePromise`](common.CancelablePromise.md)<`BulkResponse`\>

Pause the list of workflows

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestBody` | `string`[] |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`BulkResponse`\>

BulkResponse OK

#### Defined in

[src/common/open-api/services/WorkflowBulkResourceService.ts:97](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowBulkResourceService.ts#L97)

___

### restart

▸ **restart**(`requestBody`, `useLatestDefinitions?`): [`CancelablePromise`](common.CancelablePromise.md)<`BulkResponse`\>

Restart the list of completed workflow

**`Throws`**

ApiError

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `requestBody` | `string`[] | `undefined` |
| `useLatestDefinitions` | `boolean` | `false` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`BulkResponse`\>

BulkResponse OK

#### Defined in

[src/common/open-api/services/WorkflowBulkResourceService.ts:37](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowBulkResourceService.ts#L37)

___

### resumeWorkflow

▸ **resumeWorkflow**(`requestBody`): [`CancelablePromise`](common.CancelablePromise.md)<`BulkResponse`\>

Resume the list of workflows

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestBody` | `string`[] |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`BulkResponse`\>

BulkResponse OK

#### Defined in

[src/common/open-api/services/WorkflowBulkResourceService.ts:80](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowBulkResourceService.ts#L80)

___

### retry

▸ **retry**(`requestBody`): [`CancelablePromise`](common.CancelablePromise.md)<`BulkResponse`\>

Retry the last failed task for each workflow from the list

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestBody` | `string`[] |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`BulkResponse`\>

BulkResponse OK

#### Defined in

[src/common/open-api/services/WorkflowBulkResourceService.ts:19](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowBulkResourceService.ts#L19)

___

### terminate

▸ **terminate**(`requestBody`, `reason?`): [`CancelablePromise`](common.CancelablePromise.md)<`BulkResponse`\>

Terminate workflows execution

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestBody` | `string`[] |
| `reason?` | `string` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`BulkResponse`\>

BulkResponse OK

#### Defined in

[src/common/open-api/services/WorkflowBulkResourceService.ts:59](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowBulkResourceService.ts#L59)
