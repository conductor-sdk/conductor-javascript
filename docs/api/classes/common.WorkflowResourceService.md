[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / WorkflowResourceService

# Class: WorkflowResourceService

[common](../modules/common.md).WorkflowResourceService

## Table of contents

### Constructors

- [constructor](common.WorkflowResourceService.md#constructor)

### Properties

- [httpRequest](common.WorkflowResourceService.md#httprequest)

### Methods

- [decide](common.WorkflowResourceService.md#decide)
- [delete](common.WorkflowResourceService.md#delete)
- [getExecutionStatus](common.WorkflowResourceService.md#getexecutionstatus)
- [getExternalStorageLocation](common.WorkflowResourceService.md#getexternalstoragelocation)
- [getRunningWorkflow](common.WorkflowResourceService.md#getrunningworkflow)
- [getWorkflowStatusSummary](common.WorkflowResourceService.md#getworkflowstatussummary)
- [getWorkflows](common.WorkflowResourceService.md#getworkflows)
- [getWorkflows1](common.WorkflowResourceService.md#getworkflows1)
- [pauseWorkflow](common.WorkflowResourceService.md#pauseworkflow)
- [rerun](common.WorkflowResourceService.md#rerun)
- [resetWorkflow](common.WorkflowResourceService.md#resetworkflow)
- [restart1](common.WorkflowResourceService.md#restart1)
- [resumeWorkflow](common.WorkflowResourceService.md#resumeworkflow)
- [retry1](common.WorkflowResourceService.md#retry1)
- [search1](common.WorkflowResourceService.md#search1)
- [searchV21](common.WorkflowResourceService.md#searchv21)
- [searchWorkflowsByTasks](common.WorkflowResourceService.md#searchworkflowsbytasks)
- [searchWorkflowsByTasksV2](common.WorkflowResourceService.md#searchworkflowsbytasksv2)
- [skipTaskFromWorkflow](common.WorkflowResourceService.md#skiptaskfromworkflow)
- [startWorkflow](common.WorkflowResourceService.md#startworkflow)
- [startWorkflow1](common.WorkflowResourceService.md#startworkflow1)
- [terminate1](common.WorkflowResourceService.md#terminate1)

## Constructors

### constructor

• **new WorkflowResourceService**(`httpRequest`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpRequest` | [`BaseHttpRequest`](common.BaseHttpRequest.md) |

#### Defined in

[src/common/open-api/services/WorkflowResourceService.ts:19](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowResourceService.ts#L19)

## Properties

### httpRequest

• `Readonly` **httpRequest**: [`BaseHttpRequest`](common.BaseHttpRequest.md)

#### Defined in

[src/common/open-api/services/WorkflowResourceService.ts:19](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowResourceService.ts#L19)

## Methods

### decide

▸ **decide**(`workflowId`): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Starts the decision task for a workflow

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`any`\>

any OK

#### Defined in

[src/common/open-api/services/WorkflowResourceService.ts:73](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowResourceService.ts#L73)

___

### delete

▸ **delete**(`workflowId`, `archiveWorkflow?`): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Removes the workflow from the system

**`Throws`**

ApiError

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `workflowId` | `string` | `undefined` |
| `archiveWorkflow` | `boolean` | `true` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`any`\>

any OK

#### Defined in

[src/common/open-api/services/WorkflowResourceService.ts:360](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowResourceService.ts#L360)

___

### getExecutionStatus

▸ **getExecutionStatus**(`workflowId`, `includeTasks?`): [`CancelablePromise`](common.CancelablePromise.md)<[`Workflow`](../modules/common.md#workflow)\>

Gets the workflow by workflow id

**`Throws`**

ApiError

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `workflowId` | `string` | `undefined` |
| `includeTasks` | `boolean` | `true` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<[`Workflow`](../modules/common.md#workflow)\>

Workflow OK

#### Defined in

[src/common/open-api/services/WorkflowResourceService.ts:296](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowResourceService.ts#L296)

___

### getExternalStorageLocation

▸ **getExternalStorageLocation**(`path`, `operation`, `payloadType`): [`CancelablePromise`](common.CancelablePromise.md)<[`ExternalStorageLocation`](../modules/common.md#externalstoragelocation)\>

Get the uri and path of the external storage where the workflow payload is to be stored

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `operation` | `string` |
| `payloadType` | `string` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<[`ExternalStorageLocation`](../modules/common.md#externalstoragelocation)\>

ExternalStorageLocation OK

#### Defined in

[src/common/open-api/services/WorkflowResourceService.ts:415](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowResourceService.ts#L415)

___

### getRunningWorkflow

▸ **getRunningWorkflow**(`name`, `version?`, `startTime?`, `endTime?`): [`CancelablePromise`](common.CancelablePromise.md)<`string`[]\>

Retrieve all the running workflows

**`Throws`**

ApiError

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `version` | `number` | `1` |
| `startTime?` | `number` | `undefined` |
| `endTime?` | `number` | `undefined` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`string`[]\>

string OK

#### Defined in

[src/common/open-api/services/WorkflowResourceService.ts:30](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowResourceService.ts#L30)

___

### getWorkflowStatusSummary

▸ **getWorkflowStatusSummary**(`workflowId`, `includeOutput?`, `includeVariables?`): [`CancelablePromise`](common.CancelablePromise.md)<[`WorkflowStatus`](../modules/common.md#workflowstatus)\>

Gets the workflow by workflow id

**`Throws`**

ApiError

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `workflowId` | `string` | `undefined` |
| `includeOutput` | `boolean` | `false` |
| `includeVariables` | `boolean` | `false` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<[`WorkflowStatus`](../modules/common.md#workflowstatus)\>

WorkflowStatus OK

#### Defined in

[src/common/open-api/services/WorkflowResourceService.ts:219](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowResourceService.ts#L219)

___

### getWorkflows

▸ **getWorkflows**(`name`, `requestBody`, `includeClosed?`, `includeTasks?`): [`CancelablePromise`](common.CancelablePromise.md)<`Record`<`string`, [`Workflow`](../modules/common.md#workflow)[]\>\>

Lists workflows for the given correlation id list

**`Throws`**

ApiError

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `requestBody` | `string`[] | `undefined` |
| `includeClosed` | `boolean` | `false` |
| `includeTasks` | `boolean` | `false` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`Record`<`string`, [`Workflow`](../modules/common.md#workflow)[]\>\>

Workflow OK

#### Defined in

[src/common/open-api/services/WorkflowResourceService.ts:190](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowResourceService.ts#L190)

___

### getWorkflows1

▸ **getWorkflows1**(`name`, `correlationId`, `includeClosed?`, `includeTasks?`): [`CancelablePromise`](common.CancelablePromise.md)<[`Workflow`](../modules/common.md#workflow)[]\>

Lists workflows for the given correlation id

**`Throws`**

ApiError

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `correlationId` | `string` | `undefined` |
| `includeClosed` | `boolean` | `false` |
| `includeTasks` | `boolean` | `false` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<[`Workflow`](../modules/common.md#workflow)[]\>

Workflow OK

#### Defined in

[src/common/open-api/services/WorkflowResourceService.ts:246](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowResourceService.ts#L246)

___

### pauseWorkflow

▸ **pauseWorkflow**(`workflowId`): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Pauses the workflow

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`any`\>

any OK

#### Defined in

[src/common/open-api/services/WorkflowResourceService.ts:144](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowResourceService.ts#L144)

___

### rerun

▸ **rerun**(`workflowId`, `requestBody`): [`CancelablePromise`](common.CancelablePromise.md)<`string`\>

Reruns the workflow from a specific task

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `requestBody` | [`RerunWorkflowRequest`](../modules/common.md#rerunworkflowrequest) |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`string`\>

string OK

#### Defined in

[src/common/open-api/services/WorkflowResourceService.ts:92](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowResourceService.ts#L92)

___

### resetWorkflow

▸ **resetWorkflow**(`workflowId`): [`CancelablePromise`](common.CancelablePromise.md)<`void`\>

Resets callback times of all non-terminal SIMPLE tasks to 0

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`void`\>

void

#### Defined in

[src/common/open-api/services/WorkflowResourceService.ts:561](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowResourceService.ts#L561)

___

### restart1

▸ **restart1**(`workflowId`, `useLatestDefinitions?`): [`CancelablePromise`](common.CancelablePromise.md)<`void`\>

Restarts a completed workflow

**`Throws`**

ApiError

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `workflowId` | `string` | `undefined` |
| `useLatestDefinitions` | `boolean` | `false` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`void`\>

void

#### Defined in

[src/common/open-api/services/WorkflowResourceService.ts:471](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowResourceService.ts#L471)

___

### resumeWorkflow

▸ **resumeWorkflow**(`workflowId`): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Resumes the workflow

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`any`\>

any OK

#### Defined in

[src/common/open-api/services/WorkflowResourceService.ts:341](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowResourceService.ts#L341)

___

### retry1

▸ **retry1**(`workflowId`, `resumeSubworkflowTasks?`): [`CancelablePromise`](common.CancelablePromise.md)<`void`\>

Retries the last failed task

**`Throws`**

ApiError

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `workflowId` | `string` | `undefined` |
| `resumeSubworkflowTasks` | `boolean` | `false` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`void`\>

void

#### Defined in

[src/common/open-api/services/WorkflowResourceService.ts:273](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowResourceService.ts#L273)

___

### search1

▸ **search1**(`queryId?`, `start?`, `size?`, `sort?`, `freeText?`, `query?`, `skipCache?`): [`CancelablePromise`](common.CancelablePromise.md)<[`ScrollableSearchResultWorkflowSummary`](../modules/common.md#scrollablesearchresultworkflowsummary)\>

Search for workflows based on payload and other parameters
use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC.

**`Throws`**

ApiError

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `queryId?` | `string` | `undefined` |
| `start?` | `number` | `undefined` |
| `size` | `number` | `100` |
| `sort?` | `string` | `undefined` |
| `freeText` | `string` | `'*'` |
| `query?` | `string` | `undefined` |
| `skipCache` | `boolean` | `false` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<[`ScrollableSearchResultWorkflowSummary`](../modules/common.md#scrollablesearchresultworkflowsummary)\>

ScrollableSearchResultWorkflowSummary OK

#### Defined in

[src/common/open-api/services/WorkflowResourceService.ts:500](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowResourceService.ts#L500)

___

### searchV21

▸ **searchV21**(`start?`, `size?`, `sort?`, `freeText?`, `query?`): [`CancelablePromise`](common.CancelablePromise.md)<[`SearchResultWorkflow`](../modules/common.md#searchresultworkflow)\>

Search for workflows based on payload and other parameters
use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC.

**`Throws`**

ApiError

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `start?` | `number` | `undefined` |
| `size` | `number` | `100` |
| `sort?` | `string` | `undefined` |
| `freeText` | `string` | `'*'` |
| `query?` | `string` | `undefined` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<[`SearchResultWorkflow`](../modules/common.md#searchresultworkflow)\>

SearchResultWorkflow OK

#### Defined in

[src/common/open-api/services/WorkflowResourceService.ts:118](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowResourceService.ts#L118)

___

### searchWorkflowsByTasks

▸ **searchWorkflowsByTasks**(`start?`, `size?`, `sort?`, `freeText?`, `query?`): [`CancelablePromise`](common.CancelablePromise.md)<[`SearchResultWorkflowSummary`](../modules/common.md#searchresultworkflowsummary)\>

Search for workflows based on task parameters
use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC

**`Throws`**

ApiError

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `start?` | `number` | `undefined` |
| `size` | `number` | `100` |
| `sort?` | `string` | `undefined` |
| `freeText` | `string` | `'*'` |
| `query?` | `string` | `undefined` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<[`SearchResultWorkflowSummary`](../modules/common.md#searchresultworkflowsummary)\>

SearchResultWorkflowSummary OK

#### Defined in

[src/common/open-api/services/WorkflowResourceService.ts:387](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowResourceService.ts#L387)

___

### searchWorkflowsByTasksV2

▸ **searchWorkflowsByTasksV2**(`start?`, `size?`, `sort?`, `freeText?`, `query?`): [`CancelablePromise`](common.CancelablePromise.md)<[`SearchResultWorkflow`](../modules/common.md#searchresultworkflow)\>

Search for workflows based on task parameters
use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC

**`Throws`**

ApiError

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `start?` | `number` | `undefined` |
| `size` | `number` | `100` |
| `sort?` | `string` | `undefined` |
| `freeText` | `string` | `'*'` |
| `query?` | `string` | `undefined` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<[`SearchResultWorkflow`](../modules/common.md#searchresultworkflow)\>

SearchResultWorkflow OK

#### Defined in

[src/common/open-api/services/WorkflowResourceService.ts:535](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowResourceService.ts#L535)

___

### skipTaskFromWorkflow

▸ **skipTaskFromWorkflow**(`workflowId`, `taskReferenceName`, `requestBody?`): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Skips a given task from a current running workflow

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `taskReferenceName` | `string` |
| `requestBody?` | [`SkipTaskRequest`](../modules/common.md#skiptaskrequest) |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`any`\>

any OK

#### Defined in

[src/common/open-api/services/WorkflowResourceService.ts:164](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowResourceService.ts#L164)

___

### startWorkflow

▸ **startWorkflow**(`requestBody`): [`CancelablePromise`](common.CancelablePromise.md)<`string`\>

Start a new workflow with StartWorkflowRequest, which allows task to be executed in a domain

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestBody` | [`StartWorkflowRequest`](../modules/common.md#startworkflowrequest) |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`string`\>

string OK

#### Defined in

[src/common/open-api/services/WorkflowResourceService.ts:56](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowResourceService.ts#L56)

___

### startWorkflow1

▸ **startWorkflow1**(`name`, `requestBody`, `version?`, `correlationId?`, `priority?`): [`CancelablePromise`](common.CancelablePromise.md)<`string`\>

Start a new workflow. Returns the ID of the workflow instance that can be later used for tracking

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `requestBody` | `Record`<`string`, `any`\> |
| `version?` | `number` |
| `correlationId?` | `string` |
| `priority?` | `number` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`string`\>

string OK

#### Defined in

[src/common/open-api/services/WorkflowResourceService.ts:441](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowResourceService.ts#L441)

___

### terminate1

▸ **terminate1**(`workflowId`, `reason?`): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Terminate workflow execution

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `reason?` | `string` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`any`\>

any OK

#### Defined in

[src/common/open-api/services/WorkflowResourceService.ts:319](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/WorkflowResourceService.ts#L319)
