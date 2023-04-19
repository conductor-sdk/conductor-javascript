[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / SchedulerResourceService

# Class: SchedulerResourceService

[common](../modules/common.md).SchedulerResourceService

## Table of contents

### Constructors

- [constructor](common.SchedulerResourceService.md#constructor)

### Properties

- [httpRequest](common.SchedulerResourceService.md#httprequest)

### Methods

- [deleteSchedule](common.SchedulerResourceService.md#deleteschedule)
- [getAllSchedules](common.SchedulerResourceService.md#getallschedules)
- [getNextFewSchedules](common.SchedulerResourceService.md#getnextfewschedules)
- [getSchedule](common.SchedulerResourceService.md#getschedule)
- [pauseAllSchedules](common.SchedulerResourceService.md#pauseallschedules)
- [pauseSchedule](common.SchedulerResourceService.md#pauseschedule)
- [requeueAllExecutionRecords](common.SchedulerResourceService.md#requeueallexecutionrecords)
- [resumeAllSchedules](common.SchedulerResourceService.md#resumeallschedules)
- [resumeSchedule](common.SchedulerResourceService.md#resumeschedule)
- [saveSchedule](common.SchedulerResourceService.md#saveschedule)
- [searchV21](common.SchedulerResourceService.md#searchv21)
- [testTimeout](common.SchedulerResourceService.md#testtimeout)

## Constructors

### constructor

• **new SchedulerResourceService**(`httpRequest`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpRequest` | [`BaseHttpRequest`](common.BaseHttpRequest.md) |

#### Defined in

[src/common/open-api/services/SchedulerResourceService.ts:13](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/SchedulerResourceService.ts#L13)

## Properties

### httpRequest

• `Readonly` **httpRequest**: [`BaseHttpRequest`](common.BaseHttpRequest.md)

#### Defined in

[src/common/open-api/services/SchedulerResourceService.ts:13](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/SchedulerResourceService.ts#L13)

## Methods

### deleteSchedule

▸ **deleteSchedule**(`name`): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Deletes an existing workflow schedule by name

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

[src/common/open-api/services/SchedulerResourceService.ts:39](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/SchedulerResourceService.ts#L39)

___

### getAllSchedules

▸ **getAllSchedules**(`workflowName?`): [`CancelablePromise`](common.CancelablePromise.md)<[`WorkflowSchedule`](../modules/common.md#workflowschedule)[]\>

Get all existing workflow schedules and optionally filter by workflow name

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowName?` | `string` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<[`WorkflowSchedule`](../modules/common.md#workflowschedule)[]\>

WorkflowSchedule OK

#### Defined in

[src/common/open-api/services/SchedulerResourceService.ts:156](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/SchedulerResourceService.ts#L156)

___

### getNextFewSchedules

▸ **getNextFewSchedules**(`cronExpression`, `scheduleStartTime?`, `scheduleEndTime?`, `limit?`): [`CancelablePromise`](common.CancelablePromise.md)<`number`[]\>

Get list of the next x (default 3, max 5) execution times for a scheduler

**`Throws`**

ApiError

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `cronExpression` | `string` | `undefined` |
| `scheduleStartTime?` | `number` | `undefined` |
| `scheduleEndTime?` | `number` | `undefined` |
| `limit` | `number` | `3` |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`number`[]\>

number OK

#### Defined in

[src/common/open-api/services/SchedulerResourceService.ts:60](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/SchedulerResourceService.ts#L60)

___

### getSchedule

▸ **getSchedule**(`name`): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Get an existing workflow schedule by name

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

[src/common/open-api/services/SchedulerResourceService.ts:21](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/SchedulerResourceService.ts#L21)

___

### pauseAllSchedules

▸ **pauseAllSchedules**(): [`CancelablePromise`](common.CancelablePromise.md)<`Record`<`string`, `any`\>\>

Pause all scheduling in a single conductor server instance (for debugging only)

**`Throws`**

ApiError

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`Record`<`string`, `any`\>\>

any OK

#### Defined in

[src/common/open-api/services/SchedulerResourceService.ts:101](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/SchedulerResourceService.ts#L101)

___

### pauseSchedule

▸ **pauseSchedule**(`name`): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Pauses an existing schedule by name

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

[src/common/open-api/services/SchedulerResourceService.ts:84](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/SchedulerResourceService.ts#L84)

___

### requeueAllExecutionRecords

▸ **requeueAllExecutionRecords**(): [`CancelablePromise`](common.CancelablePromise.md)<`Record`<`string`, `any`\>\>

Requeue all execution records

**`Throws`**

ApiError

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`Record`<`string`, `any`\>\>

any OK

#### Defined in

[src/common/open-api/services/SchedulerResourceService.ts:131](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/SchedulerResourceService.ts#L131)

___

### resumeAllSchedules

▸ **resumeAllSchedules**(): [`CancelablePromise`](common.CancelablePromise.md)<`Record`<`string`, `any`\>\>

Resume all scheduling

**`Throws`**

ApiError

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`Record`<`string`, `any`\>\>

any OK

#### Defined in

[src/common/open-api/services/SchedulerResourceService.ts:143](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/SchedulerResourceService.ts#L143)

___

### resumeSchedule

▸ **resumeSchedule**(`name`): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Resume a paused schedule by name

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

[src/common/open-api/services/SchedulerResourceService.ts:114](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/SchedulerResourceService.ts#L114)

___

### saveSchedule

▸ **saveSchedule**(`requestBody`): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Create or update a schedule for a specified workflow with a corresponding start workflow request

**`Throws`**

ApiError

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestBody` | [`SaveScheduleRequest`](../modules/common.md#saveschedulerequest) |

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`any`\>

any OK

#### Defined in

[src/common/open-api/services/SchedulerResourceService.ts:174](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/SchedulerResourceService.ts#L174)

___

### searchV21

▸ **searchV21**(`start?`, `size?`, `sort?`, `freeText?`, `query?`): [`CancelablePromise`](common.CancelablePromise.md)<[`SearchResultWorkflowScheduleExecutionModel`](../modules/common.md#searchresultworkflowscheduleexecutionmodel)\>

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

[`CancelablePromise`](common.CancelablePromise.md)<[`SearchResultWorkflowScheduleExecutionModel`](../modules/common.md#searchresultworkflowscheduleexecutionmodel)\>

SearchResultWorkflowScheduleExecutionModel OK

#### Defined in

[src/common/open-api/services/SchedulerResourceService.ts:208](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/SchedulerResourceService.ts#L208)

___

### testTimeout

▸ **testTimeout**(): [`CancelablePromise`](common.CancelablePromise.md)<`any`\>

Test timeout - do not use in production

**`Throws`**

ApiError

#### Returns

[`CancelablePromise`](common.CancelablePromise.md)<`any`\>

any OK

#### Defined in

[src/common/open-api/services/SchedulerResourceService.ts:190](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/services/SchedulerResourceService.ts#L190)
