[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / TaskResourceService

# Class: TaskResourceService

[common](../modules/common.md).TaskResourceService

## Table of contents

### Constructors

- [constructor](common.TaskResourceService.md#constructor)

### Properties

- [httpRequest](common.TaskResourceService.md#httprequest)

### Methods

- [all](common.TaskResourceService.md#all)
- [allVerbose](common.TaskResourceService.md#allverbose)
- [batchPoll](common.TaskResourceService.md#batchpoll)
- [getAllPollData](common.TaskResourceService.md#getallpolldata)
- [getExternalStorageLocation1](common.TaskResourceService.md#getexternalstoragelocation1)
- [getPollData](common.TaskResourceService.md#getpolldata)
- [getTask](common.TaskResourceService.md#gettask)
- [getTaskLogs](common.TaskResourceService.md#gettasklogs)
- [log](common.TaskResourceService.md#log)
- [poll](common.TaskResourceService.md#poll)
- [requeuePendingTask](common.TaskResourceService.md#requeuependingtask)
- [search](common.TaskResourceService.md#search)
- [searchV22](common.TaskResourceService.md#searchv22)
- [size1](common.TaskResourceService.md#size1)
- [updateTask](common.TaskResourceService.md#updatetask)
- [updateTask1](common.TaskResourceService.md#updatetask1)

## Constructors

### constructor

• **new TaskResourceService**(`httpRequest`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpRequest` | [`BaseHttpRequest`](common.BaseHttpRequest.md) |

#### Defined in

[src/common/open-api/services/TaskResourceService.ts:17](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/TaskResourceService.ts#L17)

## Properties

### httpRequest

• `Readonly` **httpRequest**: [`BaseHttpRequest`](common.BaseHttpRequest.md)

#### Defined in

[src/common/open-api/services/TaskResourceService.ts:17](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/TaskResourceService.ts#L17)

## Methods

### all

▸ **all**(): [`CancelablePromise`](common.CancelablePromise.md)<`Record`<`string`, `number`\>\>

Get the details about each queue

**`Throws`**

ApiError

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`Record`<`string`, `number`\>\>

number OK

#### Defined in

[src/common/open-api/services/TaskResourceService.ts:108](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/TaskResourceService.ts#L108)

___

### allVerbose

▸ **allVerbose**(): [`CancelablePromise`](common.CancelablePromise.md)<`Record`<`string`, `Record`<`string`, `Record`<`string`, `number`\>\>\>\>

Get the details about each queue

**`Throws`**

ApiError

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`Record`<`string`, `Record`<`string`, `Record`<`string`, `number`\>\>\>\>

number OK

#### Defined in

[src/common/open-api/services/TaskResourceService.ts:50](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/TaskResourceService.ts#L50)

___

### batchPoll

▸ **batchPoll**(`tasktype`, `workerid?`, `domain?`, `count?`, `timeout?`): [`CancelablePromise`](common.CancelablePromise.md)<[`Task`](../modules/common.md#task)[]\>

Batch poll for a task of a certain type

**`Throws`**

ApiError

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tasktype` | `string` | `undefined` |
| `workerid?` | `string` | `undefined` |
| `domain?` | `string` | `undefined` |
| `count` | `number` | `1` |
| `timeout` | `number` | `100` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<[`Task`](../modules/common.md#task)[]\>

Task OK

#### Defined in

[src/common/open-api/services/TaskResourceService.ts:275](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/TaskResourceService.ts#L275)

___

### getAllPollData

▸ **getAllPollData**(): [`CancelablePromise`](common.CancelablePromise.md)<[`PollData`](../modules/common.md#polldata)[]\>

Get the last poll data for all task types

**`Throws`**

ApiError

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<[`PollData`](../modules/common.md#polldata)[]\>

PollData OK

#### Defined in

[src/common/open-api/services/TaskResourceService.ts:258](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/TaskResourceService.ts#L258)

___

### getExternalStorageLocation1

▸ **getExternalStorageLocation1**(`path`, `operation`, `payloadType`): [`CancelablePromise`](common.CancelablePromise.md)<[`ExternalStorageLocation`](../modules/common.md#externalstoragelocation)\>

Get the external uri where the task payload is to be stored

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

[src/common/open-api/services/TaskResourceService.ts:340](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/TaskResourceService.ts#L340)

___

### getPollData

▸ **getPollData**(`taskType`): [`CancelablePromise`](common.CancelablePromise.md)<[`PollData`](../modules/common.md#polldata)[]\>

Get the last poll data for a given task type

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskType` | `string` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<[`PollData`](../modules/common.md#polldata)[]\>

PollData OK

#### Defined in

[src/common/open-api/services/TaskResourceService.ts:201](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/TaskResourceService.ts#L201)

___

### getTask

▸ **getTask**(`taskId`): [`CancelablePromise`](common.CancelablePromise.md)<[`Task`](../modules/common.md#task)\>

Get task by Id

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId` | `string` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<[`Task`](../modules/common.md#task)\>

Task OK

#### Defined in

[src/common/open-api/services/TaskResourceService.ts:91](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/TaskResourceService.ts#L91)

___

### getTaskLogs

▸ **getTaskLogs**(`taskId`): [`CancelablePromise`](common.CancelablePromise.md)<[`TaskExecLog`](../modules/common.md#taskexeclog)[]\>

Get Task Execution Logs

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId` | `string` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<[`TaskExecLog`](../modules/common.md#taskexeclog)[]\>

TaskExecLog OK

#### Defined in

[src/common/open-api/services/TaskResourceService.ts:219](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/TaskResourceService.ts#L219)

___

### log

▸ **log**(`taskId`, `requestBody`): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Log Task Execution Details

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId` | `string` |
| `requestBody` | `string` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`any`\>

any OK

#### Defined in

[src/common/open-api/services/TaskResourceService.ts:238](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/TaskResourceService.ts#L238)

___

### poll

▸ **poll**(`tasktype`, `workerid?`, `domain?`): [`CancelablePromise`](common.CancelablePromise.md)<[`Task`](../modules/common.md#task)\>

Poll for a task of a certain type

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasktype` | `string` |
| `workerid?` | `string` |
| `domain?` | `string` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<[`Task`](../modules/common.md#task)\>

Task OK

#### Defined in

[src/common/open-api/services/TaskResourceService.ts:27](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/TaskResourceService.ts#L27)

___

### requeuePendingTask

▸ **requeuePendingTask**(`taskType`): [`CancelablePromise`](common.CancelablePromise.md)<`string`\>

Requeue pending tasks

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskType` | `string` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`string`\>

string OK

#### Defined in

[src/common/open-api/services/TaskResourceService.ts:121](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/TaskResourceService.ts#L121)

___

### search

▸ **search**(`start?`, `size?`, `sort?`, `freeText?`, `query?`): [`CancelablePromise`](common.CancelablePromise.md)<[`SearchResultTaskSummary`](../modules/common.md#searchresulttasksummary)\>

Search for tasks based in payload and other parameters
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

[`CancelablePromise`](common.CancelablePromise.md)<[`SearchResultTaskSummary`](../modules/common.md#searchresulttasksummary)\>

SearchResultTaskSummary OK

#### Defined in

[src/common/open-api/services/TaskResourceService.ts:144](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/TaskResourceService.ts#L144)

___

### searchV22

▸ **searchV22**(`start?`, `size?`, `sort?`, `freeText?`, `query?`): [`CancelablePromise`](common.CancelablePromise.md)<[`SearchResultTask`](../modules/common.md#searchresulttask)\>

Search for tasks based in payload and other parameters
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

[`CancelablePromise`](common.CancelablePromise.md)<[`SearchResultTask`](../modules/common.md#searchresulttask)\>

SearchResultTask OK

#### Defined in

[src/common/open-api/services/TaskResourceService.ts:175](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/TaskResourceService.ts#L175)

___

### size1

▸ **size1**(`taskType?`): [`CancelablePromise`](common.CancelablePromise.md)<`Record`<`string`, `number`\>\>

Get Task type queue sizes

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskType?` | `string`[] |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`Record`<`string`, `number`\>\>

number OK

#### Defined in

[src/common/open-api/services/TaskResourceService.ts:320](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/TaskResourceService.ts#L320)

___

### updateTask

▸ **updateTask**(`workflowId`, `taskRefName`, `status`, `requestBody`): [`CancelablePromise`](common.CancelablePromise.md)<`string`\>

Update a task By Ref Name

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowId` | `string` |
| `taskRefName` | `string` |
| `status` | ``"IN_PROGRESS"`` \| ``"FAILED"`` \| ``"FAILED_WITH_TERMINAL_ERROR"`` \| ``"COMPLETED"`` |
| `requestBody` | `Record`<`string`, `any`\> |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`string`\>

string OK

#### Defined in

[src/common/open-api/services/TaskResourceService.ts:66](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/TaskResourceService.ts#L66)

___

### updateTask1

▸ **updateTask1**(`requestBody`): [`CancelablePromise`](common.CancelablePromise.md)<`string`\>

Update a task

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestBody` | [`TaskResult`](../modules/common.md#taskresult) |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`string`\>

string OK

#### Defined in

[src/common/open-api/services/TaskResourceService.ts:303](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/TaskResourceService.ts#L303)
