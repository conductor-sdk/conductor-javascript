[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / common

# Module: common

## Table of contents

### Enumerations

- [TaskType](../enums/common.TaskType.md)

### Classes

- [ApiError](../classes/common.ApiError.md)
- [BaseHttpRequest](../classes/common.BaseHttpRequest.md)
- [CancelError](../classes/common.CancelError.md)
- [CancelablePromise](../classes/common.CancelablePromise.md)
- [ConductorClient](../classes/common.ConductorClient.md)
- [DefaultLogger](../classes/common.DefaultLogger.md)
- [EventResourceService](../classes/common.EventResourceService.md)
- [HealthCheckResourceService](../classes/common.HealthCheckResourceService.md)
- [MetadataResourceService](../classes/common.MetadataResourceService.md)
- [SchedulerResourceService](../classes/common.SchedulerResourceService.md)
- [TaskResourceService](../classes/common.TaskResourceService.md)
- [TokenResourceService](../classes/common.TokenResourceService.md)
- [WorkflowBulkResourceService](../classes/common.WorkflowBulkResourceService.md)
- [WorkflowResourceService](../classes/common.WorkflowResourceService.md)

### Interfaces

- [CommonTaskDef](../interfaces/common.CommonTaskDef.md)
- [ConductorLogger](../interfaces/common.ConductorLogger.md)
- [DefaultLoggerConfig](../interfaces/common.DefaultLoggerConfig.md)
- [DoWhileTaskDef](../interfaces/common.DoWhileTaskDef.md)
- [EventTaskDef](../interfaces/common.EventTaskDef.md)
- [ForkJoinDynamicDef](../interfaces/common.ForkJoinDynamicDef.md)
- [ForkJoinTaskDef](../interfaces/common.ForkJoinTaskDef.md)
- [HttpInputParameters](../interfaces/common.HttpInputParameters.md)
- [HttpTaskDef](../interfaces/common.HttpTaskDef.md)
- [InlineTaskDef](../interfaces/common.InlineTaskDef.md)
- [InlineTaskInputParameters](../interfaces/common.InlineTaskInputParameters.md)
- [JoinTaskDef](../interfaces/common.JoinTaskDef.md)
- [JsonJQTransformTaskDef](../interfaces/common.JsonJQTransformTaskDef.md)
- [KafkaPublishInputParameters](../interfaces/common.KafkaPublishInputParameters.md)
- [KafkaPublishTaskDef](../interfaces/common.KafkaPublishTaskDef.md)
- [OnCancel](../interfaces/common.OnCancel.md)
- [SetVariableTaskDef](../interfaces/common.SetVariableTaskDef.md)
- [SimpleTaskDef](../interfaces/common.SimpleTaskDef.md)
- [SubWorkflowTaskDef](../interfaces/common.SubWorkflowTaskDef.md)
- [SwitchTaskDef](../interfaces/common.SwitchTaskDef.md)
- [TerminateTaskDef](../interfaces/common.TerminateTaskDef.md)
- [WaitTaskDef](../interfaces/common.WaitTaskDef.md)
- [WorkflowDef](../interfaces/common.WorkflowDef.md)

### Type Aliases

- [Action](common.md#action)
- [ConductorHttpRequest](common.md#conductorhttprequest)
- [ConductorLogLevel](common.md#conductorloglevel)
- [EventHandler](common.md#eventhandler)
- [ExternalStorageLocation](common.md#externalstoragelocation)
- [GenerateTokenRequest](common.md#generatetokenrequest)
- [OpenAPIConfig](common.md#openapiconfig)
- [OrkesApiConfig](common.md#orkesapiconfig)
- [PollData](common.md#polldata)
- [RequestType](common.md#requesttype)
- [RerunWorkflowRequest](common.md#rerunworkflowrequest)
- [Response](common.md#response)
- [SaveScheduleRequest](common.md#saveschedulerequest)
- [ScrollableSearchResultWorkflowSummary](common.md#scrollablesearchresultworkflowsummary)
- [SearchResultTask](common.md#searchresulttask)
- [SearchResultTaskSummary](common.md#searchresulttasksummary)
- [SearchResultWorkflow](common.md#searchresultworkflow)
- [SearchResultWorkflowScheduleExecutionModel](common.md#searchresultworkflowscheduleexecutionmodel)
- [SearchResultWorkflowSummary](common.md#searchresultworkflowsummary)
- [SkipTaskRequest](common.md#skiptaskrequest)
- [StartWorkflow](common.md#startworkflow)
- [StartWorkflowRequest](common.md#startworkflowrequest)
- [SubWorkflowParams](common.md#subworkflowparams)
- [Task](common.md#task)
- [TaskDef](common.md#taskdef)
- [TaskDefTypes](common.md#taskdeftypes)
- [TaskDetails](common.md#taskdetails)
- [TaskExecLog](common.md#taskexeclog)
- [TaskResult](common.md#taskresult)
- [TaskSummary](common.md#tasksummary)
- [Workflow](common.md#workflow)
- [WorkflowInputParameters](common.md#workflowinputparameters)
- [WorkflowSchedule](common.md#workflowschedule)
- [WorkflowScheduleExecutionModel](common.md#workflowscheduleexecutionmodel)
- [WorkflowStatus](common.md#workflowstatus)
- [WorkflowSummary](common.md#workflowsummary)
- [WorkflowTask](common.md#workflowtask)

### Functions

- [conductorEventTask](common.md#conductoreventtask)
- [doWhileTask](common.md#dowhiletask)
- [dynamicForkTask](common.md#dynamicforktask)
- [eventTask](common.md#eventtask)
- [forkTask](common.md#forktask)
- [forkTaskJoin](common.md#forktaskjoin)
- [generate](common.md#generate)
- [generateDoWhileTask](common.md#generatedowhiletask)
- [generateEventTask](common.md#generateeventtask)
- [generateForkJoinTask](common.md#generateforkjointask)
- [generateHTTPTask](common.md#generatehttptask)
- [generateInlineTask](common.md#generateinlinetask)
- [generateJQTransformTask](common.md#generatejqtransformtask)
- [generateJoinTask](common.md#generatejointask)
- [generateKafkaPublishTask](common.md#generatekafkapublishtask)
- [generateSetVariableTask](common.md#generatesetvariabletask)
- [generateSimpleTask](common.md#generatesimpletask)
- [generateSubWorkflowTask](common.md#generatesubworkflowtask)
- [generateSwitchTask](common.md#generateswitchtask)
- [generateTerminateTask](common.md#generateterminatetask)
- [generateWaitTask](common.md#generatewaittask)
- [httpTask](common.md#httptask)
- [inlineTask](common.md#inlinetask)
- [joinTask](common.md#jointask)
- [jsonJqTask](common.md#jsonjqtask)
- [kafkaPublishTask](common.md#kafkapublishtask)
- [newLoopTask](common.md#newlooptask)
- [orkesConductorClient](common.md#orkesconductorclient)
- [setVariableTask](common.md#setvariabletask)
- [simpleTask](common.md#simpletask)
- [sqsEventTask](common.md#sqseventtask)
- [subWorkflowTask](common.md#subworkflowtask)
- [switchTask](common.md#switchtask)
- [taskGenMapper](common.md#taskgenmapper)
- [terminateTask](common.md#terminatetask)
- [waitTaskDuration](common.md#waittaskduration)
- [waitTaskUntil](common.md#waittaskuntil)
- [workflow](common.md#workflow-1)

## Type Aliases

### Action

Ƭ **Action**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action?` | ``"start_workflow"`` \| ``"complete_task"`` \| ``"fail_task"`` |
| `complete_task?` | [`TaskDetails`](common.md#taskdetails) |
| `expandInlineJSON?` | `boolean` |
| `fail_task?` | [`TaskDetails`](common.md#taskdetails) |
| `start_workflow?` | [`StartWorkflow`](common.md#startworkflow) |

#### Defined in

[src/common/open-api/models/Action.ts:8](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/Action.ts#L8)

___

### ConductorHttpRequest

Ƭ **ConductorHttpRequest**: <T\>(`request`: [`RequestType`](common.md#requesttype), `config`: [`OpenAPIConfig`](common.md#openapiconfig), `options`: `ApiRequestOptions`) => [`CancelablePromise`](../classes/common.CancelablePromise.md)<`T`\>

#### Type declaration

▸ <`T`\>(`request`, `config`, `options`): [`CancelablePromise`](../classes/common.CancelablePromise.md)<`T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`RequestType`](common.md#requesttype) |
| `config` | [`OpenAPIConfig`](common.md#openapiconfig) |
| `options` | `ApiRequestOptions` |

##### Returns

[`CancelablePromise`](../classes/common.CancelablePromise.md)<`T`\>

#### Defined in

[src/common/RequestCustomizer.ts:26](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/RequestCustomizer.ts#L26)

___

### ConductorLogLevel

Ƭ **ConductorLogLevel**: keyof typeof `LOG_LEVELS`

#### Defined in

[src/common/ConductorLogger.ts:7](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/ConductorLogger.ts#L7)

___

### EventHandler

Ƭ **EventHandler**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `actions` | [`Action`](common.md#action)[] |
| `active?` | `boolean` |
| `condition?` | `string` |
| `evaluatorType?` | `string` |
| `event` | `string` |
| `name` | `string` |

#### Defined in

[src/common/open-api/models/EventHandler.ts:7](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/EventHandler.ts#L7)

___

### ExternalStorageLocation

Ƭ **ExternalStorageLocation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `path?` | `string` |
| `uri?` | `string` |

#### Defined in

[src/common/open-api/models/ExternalStorageLocation.ts:5](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/ExternalStorageLocation.ts#L5)

___

### GenerateTokenRequest

Ƭ **GenerateTokenRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `keyId` | `string` |
| `keySecret` | `string` |

#### Defined in

[src/common/open-api/models/GenerateTokenRequest.ts:5](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/GenerateTokenRequest.ts#L5)

___

### OpenAPIConfig

Ƭ **OpenAPIConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BASE` | `string` |
| `CREDENTIALS` | ``"include"`` \| ``"omit"`` \| ``"same-origin"`` |
| `ENCODE_PATH?` | (`path`: `string`) => `string` |
| `HEADERS?` | `Headers` \| `Resolver`<`Headers`\> |
| `PASSWORD?` | `string` \| `Resolver`<`string`\> |
| `TOKEN?` | `string` \| `Resolver`<`string`\> |
| `USERNAME?` | `string` \| `Resolver`<`string`\> |
| `VERSION` | `string` |
| `WITH_CREDENTIALS` | `boolean` |

#### Defined in

[src/common/open-api/core/OpenAPI.ts:9](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/core/OpenAPI.ts#L9)

___

### OrkesApiConfig

Ƭ **OrkesApiConfig**: `ConductorClientAPIConfig` & [`GenerateTokenRequest`](common.md#generatetokenrequest)

#### Defined in

[src/common/orkes/OrkesConductorClient.ts:8](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/orkes/OrkesConductorClient.ts#L8)

___

### PollData

Ƭ **PollData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `domain?` | `string` |
| `lastPollTime?` | `number` |
| `queueName?` | `string` |
| `workerId?` | `string` |

#### Defined in

[src/common/open-api/models/PollData.ts:5](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/PollData.ts#L5)

___

### RequestType

Ƭ **RequestType**: typeof `baseRequest`

A handler to modify requests made by ConductorClient. Useful for metrics/option transformation/etc.

**`Remarks`**

Example: Customizing the request URL
```

const requestCustomizer = (request, config, options) =>  {
 const url = options.url.replace(/^/api/, '')
 return request(config, {...options, url });
}
const config = { BASE: "https://my-api.com"}
const client = new ConductorClient(config, requestCustomizer)
```

**`Param`**

the underlying node-fetch powered function

**`Param`**

**`See`**

OpenAPIConfig

**`Param`**

{see ApiRequestOptions}

#### Defined in

[src/common/RequestCustomizer.ts:25](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/RequestCustomizer.ts#L25)

___

### RerunWorkflowRequest

Ƭ **RerunWorkflowRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `correlationId?` | `string` |
| `reRunFromTaskId?` | `string` |
| `reRunFromWorkflowId?` | `string` |
| `taskInput?` | `Record`<`string`, `any`\> |
| `workflowInput?` | `Record`<`string`, `any`\> |

#### Defined in

[src/common/open-api/models/RerunWorkflowRequest.ts:5](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/RerunWorkflowRequest.ts#L5)

___

### Response

Ƭ **Response**: `Object`

#### Defined in

[src/common/open-api/models/Response.ts:5](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/Response.ts#L5)

___

### SaveScheduleRequest

Ƭ **SaveScheduleRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createdBy?` | `string` |
| `cronExpression` | `string` |
| `name` | `string` |
| `paused?` | `boolean` |
| `runCatchupScheduleInstances?` | `boolean` |
| `scheduleEndTime?` | `number` |
| `scheduleStartTime?` | `number` |
| `startWorkflowRequest?` | [`StartWorkflowRequest`](common.md#startworkflowrequest) |
| `updatedBy?` | `string` |

#### Defined in

[src/common/open-api/models/SaveScheduleRequest.ts:7](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/SaveScheduleRequest.ts#L7)

___

### ScrollableSearchResultWorkflowSummary

Ƭ **ScrollableSearchResultWorkflowSummary**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `queryId?` | `string` |
| `results?` | [`WorkflowSummary`](common.md#workflowsummary)[] |

#### Defined in

[src/common/open-api/models/ScrollableSearchResultWorkflowSummary.ts:7](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/ScrollableSearchResultWorkflowSummary.ts#L7)

___

### SearchResultTask

Ƭ **SearchResultTask**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `results?` | [`Task`](common.md#task)[] |
| `totalHits?` | `number` |

#### Defined in

[src/common/open-api/models/SearchResultTask.ts:7](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/SearchResultTask.ts#L7)

___

### SearchResultTaskSummary

Ƭ **SearchResultTaskSummary**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `results?` | [`TaskSummary`](common.md#tasksummary)[] |
| `totalHits?` | `number` |

#### Defined in

[src/common/open-api/models/SearchResultTaskSummary.ts:7](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/SearchResultTaskSummary.ts#L7)

___

### SearchResultWorkflow

Ƭ **SearchResultWorkflow**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `results?` | [`Workflow`](common.md#workflow)[] |
| `totalHits?` | `number` |

#### Defined in

[src/common/open-api/models/SearchResultWorkflow.ts:7](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/SearchResultWorkflow.ts#L7)

___

### SearchResultWorkflowScheduleExecutionModel

Ƭ **SearchResultWorkflowScheduleExecutionModel**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `results?` | [`WorkflowScheduleExecutionModel`](common.md#workflowscheduleexecutionmodel)[] |
| `totalHits?` | `number` |

#### Defined in

[src/common/open-api/models/SearchResultWorkflowScheduleExecutionModel.ts:7](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/SearchResultWorkflowScheduleExecutionModel.ts#L7)

___

### SearchResultWorkflowSummary

Ƭ **SearchResultWorkflowSummary**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `results?` | [`WorkflowSummary`](common.md#workflowsummary)[] |
| `totalHits?` | `number` |

#### Defined in

[src/common/open-api/models/SearchResultWorkflowSummary.ts:7](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/SearchResultWorkflowSummary.ts#L7)

___

### SkipTaskRequest

Ƭ **SkipTaskRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `taskInput?` | `Record`<`string`, `any`\> |
| `taskOutput?` | `Record`<`string`, `any`\> |

#### Defined in

[src/common/open-api/models/SkipTaskRequest.ts:5](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/SkipTaskRequest.ts#L5)

___

### StartWorkflow

Ƭ **StartWorkflow**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `correlationId?` | `string` |
| `input?` | `Record`<`string`, `any`\> |
| `name?` | `string` |
| `taskToDomain?` | `Record`<`string`, `string`\> |
| `version?` | `number` |

#### Defined in

[src/common/open-api/models/StartWorkflow.ts:5](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/StartWorkflow.ts#L5)

___

### StartWorkflowRequest

Ƭ **StartWorkflowRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `correlationId?` | `string` |
| `createdBy?` | `string` |
| `externalInputPayloadStoragePath?` | `string` |
| `input?` | `Record`<`string`, `any`\> |
| `name` | `string` |
| `priority?` | `number` |
| `taskToDomain?` | `Record`<`string`, `string`\> |
| `version?` | `number` |
| `workflowDef?` | `WorkflowDef` |

#### Defined in

[src/common/open-api/models/StartWorkflowRequest.ts:7](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/StartWorkflowRequest.ts#L7)

___

### SubWorkflowParams

Ƭ **SubWorkflowParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `taskToDomain?` | `Record`<`string`, `string`\> |
| `version?` | `number` |
| `workflowDefinition?` | `WorkflowDef` |

#### Defined in

[src/common/open-api/models/SubWorkflowParams.ts:7](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/SubWorkflowParams.ts#L7)

___

### Task

Ƭ **Task**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `callbackAfterSeconds?` | `number` |
| `callbackFromWorker?` | `boolean` |
| `correlationId?` | `string` |
| `domain?` | `string` |
| `endTime?` | `number` |
| `executed?` | `boolean` |
| `executionNameSpace?` | `string` |
| `externalInputPayloadStoragePath?` | `string` |
| `externalOutputPayloadStoragePath?` | `string` |
| `inputData?` | `Record`<`string`, `any`\> |
| `isolationGroupId?` | `string` |
| `iteration?` | `number` |
| `loopOverTask?` | `boolean` |
| `outputData?` | `Record`<`string`, `any`\> |
| `pollCount?` | `number` |
| `queueWaitTime?` | `number` |
| `rateLimitFrequencyInSeconds?` | `number` |
| `rateLimitPerFrequency?` | `number` |
| `reasonForIncompletion?` | `string` |
| `referenceTaskName?` | `string` |
| `responseTimeoutSeconds?` | `number` |
| `retried?` | `boolean` |
| `retriedTaskId?` | `string` |
| `retryCount?` | `number` |
| `scheduledTime?` | `number` |
| `seq?` | `number` |
| `startDelayInSeconds?` | `number` |
| `startTime?` | `number` |
| `status?` | ``"IN_PROGRESS"`` \| ``"CANCELED"`` \| ``"FAILED"`` \| ``"FAILED_WITH_TERMINAL_ERROR"`` \| ``"COMPLETED"`` \| ``"COMPLETED_WITH_ERRORS"`` \| ``"SCHEDULED"`` \| ``"TIMED_OUT"`` \| ``"SKIPPED"`` |
| `subWorkflowId?` | `string` |
| `subworkflowChanged?` | `boolean` |
| `taskDefName?` | `string` |
| `taskDefinition?` | [`TaskDef`](common.md#taskdef) |
| `taskId?` | `string` |
| `taskType?` | `string` |
| `updateTime?` | `number` |
| `workerId?` | `string` |
| `workflowInstanceId?` | `string` |
| `workflowPriority?` | `number` |
| `workflowTask?` | [`WorkflowTask`](common.md#workflowtask) |
| `workflowType?` | `string` |

#### Defined in

[src/common/open-api/models/Task.ts:8](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/Task.ts#L8)

___

### TaskDef

Ƭ **TaskDef**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backoffScaleFactor?` | `number` |
| `concurrentExecLimit?` | `number` |
| `createTime?` | `number` |
| `createdBy?` | `string` |
| `description?` | `string` |
| `executionNameSpace?` | `string` |
| `inputKeys?` | `string`[] |
| `inputTemplate?` | `Record`<`string`, `any`\> |
| `isolationGroupId?` | `string` |
| `name` | `string` |
| `outputKeys?` | `string`[] |
| `ownerApp?` | `string` |
| `ownerEmail?` | `string` |
| `pollTimeoutSeconds?` | `number` |
| `rateLimitFrequencyInSeconds?` | `number` |
| `rateLimitPerFrequency?` | `number` |
| `responseTimeoutSeconds?` | `number` |
| `retryCount?` | `number` |
| `retryDelaySeconds?` | `number` |
| `retryLogic?` | ``"FIXED"`` \| ``"EXPONENTIAL_BACKOFF"`` \| ``"LINEAR_BACKOFF"`` |
| `timeoutPolicy?` | ``"RETRY"`` \| ``"TIME_OUT_WF"`` \| ``"ALERT_ONLY"`` |
| `timeoutSeconds` | `number` |
| `updateTime?` | `number` |
| `updatedBy?` | `string` |

#### Defined in

[src/common/open-api/models/TaskDef.ts:5](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/TaskDef.ts#L5)

___

### TaskDefTypes

Ƭ **TaskDefTypes**: [`SimpleTaskDef`](../interfaces/common.SimpleTaskDef.md) \| [`DoWhileTaskDef`](../interfaces/common.DoWhileTaskDef.md) \| [`EventTaskDef`](../interfaces/common.EventTaskDef.md) \| [`ForkJoinTaskDef`](../interfaces/common.ForkJoinTaskDef.md) \| [`ForkJoinDynamicDef`](../interfaces/common.ForkJoinDynamicDef.md) \| [`HttpTaskDef`](../interfaces/common.HttpTaskDef.md) \| [`InlineTaskDef`](../interfaces/common.InlineTaskDef.md) \| [`JsonJQTransformTaskDef`](../interfaces/common.JsonJQTransformTaskDef.md) \| [`KafkaPublishTaskDef`](../interfaces/common.KafkaPublishTaskDef.md) \| [`SetVariableTaskDef`](../interfaces/common.SetVariableTaskDef.md) \| [`SubWorkflowTaskDef`](../interfaces/common.SubWorkflowTaskDef.md) \| [`SwitchTaskDef`](../interfaces/common.SwitchTaskDef.md) \| [`TerminateTaskDef`](../interfaces/common.TerminateTaskDef.md) \| [`JoinTaskDef`](../interfaces/common.JoinTaskDef.md) \| [`WaitTaskDef`](../interfaces/common.WaitTaskDef.md)

#### Defined in

[src/common/types.ts:33](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L33)

___

### TaskDetails

Ƭ **TaskDetails**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `output?` | `Record`<`string`, `any`\> |
| `taskId?` | `string` |
| `taskRefName?` | `string` |
| `workflowId?` | `string` |

#### Defined in

[src/common/open-api/models/TaskDetails.ts:5](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/TaskDetails.ts#L5)

___

### TaskExecLog

Ƭ **TaskExecLog**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createdTime?` | `number` |
| `log?` | `string` |
| `taskId?` | `string` |

#### Defined in

[src/common/open-api/models/TaskExecLog.ts:5](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/TaskExecLog.ts#L5)

___

### TaskResult

Ƭ **TaskResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `callbackAfterSeconds?` | `number` |
| `externalOutputPayloadStoragePath?` | `string` |
| `logs?` | [`TaskExecLog`](common.md#taskexeclog)[] |
| `outputData?` | `Record`<`string`, `any`\> |
| `reasonForIncompletion?` | `string` |
| `status?` | ``"IN_PROGRESS"`` \| ``"FAILED"`` \| ``"FAILED_WITH_TERMINAL_ERROR"`` \| ``"COMPLETED"`` |
| `subWorkflowId?` | `string` |
| `taskId` | `string` |
| `workerId?` | `string` |
| `workflowInstanceId` | `string` |

#### Defined in

[src/common/open-api/models/TaskResult.ts:7](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/TaskResult.ts#L7)

___

### TaskSummary

Ƭ **TaskSummary**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `correlationId?` | `string` |
| `endTime?` | `string` |
| `executionTime?` | `number` |
| `externalInputPayloadStoragePath?` | `string` |
| `externalOutputPayloadStoragePath?` | `string` |
| `input?` | `string` |
| `output?` | `string` |
| `queueWaitTime?` | `number` |
| `reasonForIncompletion?` | `string` |
| `scheduledTime?` | `string` |
| `startTime?` | `string` |
| `status?` | ``"IN_PROGRESS"`` \| ``"CANCELED"`` \| ``"FAILED"`` \| ``"FAILED_WITH_TERMINAL_ERROR"`` \| ``"COMPLETED"`` \| ``"COMPLETED_WITH_ERRORS"`` \| ``"SCHEDULED"`` \| ``"TIMED_OUT"`` \| ``"SKIPPED"`` |
| `taskDefName?` | `string` |
| `taskId?` | `string` |
| `taskType?` | `string` |
| `updateTime?` | `string` |
| `workflowId?` | `string` |
| `workflowPriority?` | `number` |
| `workflowType?` | `string` |

#### Defined in

[src/common/open-api/models/TaskSummary.ts:5](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/TaskSummary.ts#L5)

___

### Workflow

Ƭ **Workflow**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `correlationId?` | `string` |
| `createTime?` | `number` |
| `createdBy?` | `string` |
| `endTime?` | `number` |
| `event?` | `string` |
| `externalInputPayloadStoragePath?` | `string` |
| `externalOutputPayloadStoragePath?` | `string` |
| `failedReferenceTaskNames?` | `string`[] |
| `input?` | `Record`<`string`, `any`\> |
| `lastRetriedTime?` | `number` |
| `output?` | `Record`<`string`, `any`\> |
| `ownerApp?` | `string` |
| `parentWorkflowId?` | `string` |
| `parentWorkflowTaskId?` | `string` |
| `priority?` | `number` |
| `reRunFromWorkflowId?` | `string` |
| `reasonForIncompletion?` | `string` |
| `startTime?` | `number` |
| `status?` | ``"RUNNING"`` \| ``"COMPLETED"`` \| ``"FAILED"`` \| ``"TIMED_OUT"`` \| ``"TERMINATED"`` \| ``"PAUSED"`` |
| `taskToDomain?` | `Record`<`string`, `string`\> |
| `tasks?` | [`Task`](common.md#task)[] |
| `updateTime?` | `number` |
| `updatedBy?` | `string` |
| `variables?` | `Record`<`string`, `any`\> |
| `workflowDefinition?` | `WorkflowDef` |
| `workflowId?` | `string` |
| `workflowName?` | `string` |
| `workflowVersion?` | `number` |

#### Defined in

[src/common/open-api/models/Workflow.ts:8](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/Workflow.ts#L8)

___

### WorkflowInputParameters

Ƭ **WorkflowInputParameters**<`T`\>: `O2T`<`U2O`<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Defined in

[src/common/types.ts:206](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L206)

___

### WorkflowSchedule

Ƭ **WorkflowSchedule**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createTime?` | `number` |
| `createdBy?` | `string` |
| `cronExpression?` | `string` |
| `name?` | `string` |
| `paused?` | `boolean` |
| `runCatchupScheduleInstances?` | `boolean` |
| `scheduleEndTime?` | `number` |
| `scheduleStartTime?` | `number` |
| `startWorkflowRequest?` | [`StartWorkflowRequest`](common.md#startworkflowrequest) |
| `updatedBy?` | `string` |
| `updatedTime?` | `number` |

#### Defined in

[src/common/open-api/models/WorkflowSchedule.ts:7](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/WorkflowSchedule.ts#L7)

___

### WorkflowScheduleExecutionModel

Ƭ **WorkflowScheduleExecutionModel**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `executionId?` | `string` |
| `executionTime?` | `number` |
| `reason?` | `string` |
| `scheduleName?` | `string` |
| `scheduledTime?` | `number` |
| `stackTrace?` | `string` |
| `startWorkflowRequest?` | [`StartWorkflowRequest`](common.md#startworkflowrequest) |
| `state?` | ``"POLLED"`` \| ``"FAILED"`` \| ``"EXECUTED"`` |
| `workflowId?` | `string` |
| `workflowName?` | `string` |

#### Defined in

[src/common/open-api/models/WorkflowScheduleExecutionModel.ts:7](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/WorkflowScheduleExecutionModel.ts#L7)

___

### WorkflowStatus

Ƭ **WorkflowStatus**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `correlationId?` | `string` |
| `output?` | `Record`<`string`, `any`\> |
| `status?` | ``"RUNNING"`` \| ``"COMPLETED"`` \| ``"FAILED"`` \| ``"TIMED_OUT"`` \| ``"TERMINATED"`` \| ``"PAUSED"`` |
| `variables?` | `Record`<`string`, `any`\> |
| `workflowId?` | `string` |

#### Defined in

[src/common/open-api/models/WorkflowStatus.ts:5](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/WorkflowStatus.ts#L5)

___

### WorkflowSummary

Ƭ **WorkflowSummary**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `correlationId?` | `string` |
| `createdBy?` | `string` |
| `endTime?` | `string` |
| `event?` | `string` |
| `executionTime?` | `number` |
| `externalInputPayloadStoragePath?` | `string` |
| `externalOutputPayloadStoragePath?` | `string` |
| `failedReferenceTaskNames?` | `string` |
| `input?` | `string` |
| `inputSize?` | `number` |
| `output?` | `string` |
| `outputSize?` | `number` |
| `priority?` | `number` |
| `reasonForIncompletion?` | `string` |
| `startTime?` | `string` |
| `status?` | ``"RUNNING"`` \| ``"COMPLETED"`` \| ``"FAILED"`` \| ``"TIMED_OUT"`` \| ``"TERMINATED"`` \| ``"PAUSED"`` |
| `updateTime?` | `string` |
| `version?` | `number` |
| `workflowId?` | `string` |
| `workflowType?` | `string` |

#### Defined in

[src/common/open-api/models/WorkflowSummary.ts:5](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/WorkflowSummary.ts#L5)

___

### WorkflowTask

Ƭ **WorkflowTask**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `asyncComplete?` | `boolean` | - |
| `caseExpression?` | `string` | **`Deprecated`** |
| `caseValueParam?` | `string` | **`Deprecated`** |
| `decisionCases?` | `Record`<`string`, [`WorkflowTask`](common.md#workflowtask)[]\> | - |
| `defaultCase?` | [`WorkflowTask`](common.md#workflowtask)[] | - |
| `defaultExclusiveJoinTask?` | `string`[] | - |
| `description?` | `string` | - |
| `dynamicForkJoinTasksParam?` | `string` | **`Deprecated`** |
| `dynamicForkTasksInputParamName?` | `string` | - |
| `dynamicForkTasksParam?` | `string` | - |
| `dynamicTaskNameParam?` | `string` | - |
| `evaluatorType?` | `string` | - |
| `expression?` | `string` | - |
| `forkTasks?` | [`WorkflowTask`](common.md#workflowtask)[][] | - |
| `inputParameters?` | `Record`<`string`, `any`\> | - |
| `joinOn?` | `string`[] | - |
| `loopCondition?` | `string` | - |
| `loopOver?` | [`WorkflowTask`](common.md#workflowtask)[] | - |
| `name` | `string` | - |
| `optional?` | `boolean` | - |
| `rateLimited?` | `boolean` | - |
| `retryCount?` | `number` | - |
| `scriptExpression?` | `string` | - |
| `sink?` | `string` | - |
| `startDelay?` | `number` | - |
| `subWorkflowParam?` | [`SubWorkflowParams`](common.md#subworkflowparams) | - |
| `taskDefinition?` | [`TaskDef`](common.md#taskdef) | - |
| `taskReferenceName` | `string` | - |
| `type?` | `string` | - |
| `workflowTaskType?` | ``"SIMPLE"`` \| ``"DYNAMIC"`` \| ``"FORK_JOIN"`` \| ``"FORK_JOIN_DYNAMIC"`` \| ``"DECISION"`` \| ``"SWITCH"`` \| ``"JOIN"`` \| ``"DO_WHILE"`` \| ``"SUB_WORKFLOW"`` \| ``"START_WORKFLOW"`` \| ``"EVENT"`` \| ``"WAIT"`` \| ``"HUMAN"`` \| ``"USER_DEFINED"`` \| ``"HTTP"`` \| ``"LAMBDA"`` \| ``"INLINE"`` \| ``"EXCLUSIVE_JOIN"`` \| ``"TERMINATE"`` \| ``"KAFKA_PUBLISH"`` \| ``"JSON_JQ_TRANSFORM"`` \| ``"SET_VARIABLE"`` | - |

#### Defined in

[src/common/open-api/models/WorkflowTask.ts:8](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/WorkflowTask.ts#L8)

## Functions

### conductorEventTask

▸ **conductorEventTask**(`taskReferenceName`, `eventName`): [`EventTaskDef`](../interfaces/common.EventTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `eventName` | `string` |

#### Returns

[`EventTaskDef`](../interfaces/common.EventTaskDef.md)

#### Defined in

[src/common/sdk/event.ts:17](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/sdk/event.ts#L17)

___

### doWhileTask

▸ **doWhileTask**(`taskRefName`, `terminationCondition`, `tasks`): [`DoWhileTaskDef`](../interfaces/common.DoWhileTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskRefName` | `string` |
| `terminationCondition` | `string` |
| `tasks` | [`TaskDefTypes`](common.md#taskdeftypes)[] |

#### Returns

[`DoWhileTaskDef`](../interfaces/common.DoWhileTaskDef.md)

#### Defined in

[src/common/sdk/doWhile.ts:3](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/sdk/doWhile.ts#L3)

___

### dynamicForkTask

▸ **dynamicForkTask**(`taskReferenceName`, `preForkTasks?`, `dynamicTasksInput?`): [`ForkJoinDynamicDef`](../interfaces/common.ForkJoinDynamicDef.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `taskReferenceName` | `string` | `undefined` |
| `preForkTasks` | [`TaskDefTypes`](common.md#taskdeftypes)[] | `[]` |
| `dynamicTasksInput` | `string` | `""` |

#### Returns

[`ForkJoinDynamicDef`](../interfaces/common.ForkJoinDynamicDef.md)

#### Defined in

[src/common/sdk/dynamicFork.ts:3](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/sdk/dynamicFork.ts#L3)

___

### eventTask

▸ **eventTask**(`taskReferenceName`, `eventPrefix`, `eventSuffix`): [`EventTaskDef`](../interfaces/common.EventTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `eventPrefix` | `string` |
| `eventSuffix` | `string` |

#### Returns

[`EventTaskDef`](../interfaces/common.EventTaskDef.md)

#### Defined in

[src/common/sdk/event.ts:3](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/sdk/event.ts#L3)

___

### forkTask

▸ **forkTask**(`taskReferenceName`, `forkTasks`): [`ForkJoinTaskDef`](../interfaces/common.ForkJoinTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `forkTasks` | [`TaskDefTypes`](common.md#taskdeftypes)[] |

#### Returns

[`ForkJoinTaskDef`](../interfaces/common.ForkJoinTaskDef.md)

#### Defined in

[src/common/sdk/forkJoin.ts:4](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/sdk/forkJoin.ts#L4)

___

### forkTaskJoin

▸ **forkTaskJoin**(`taskReferenceName`, `forkTasks`): [[`ForkJoinTaskDef`](../interfaces/common.ForkJoinTaskDef.md), [`JoinTaskDef`](../interfaces/common.JoinTaskDef.md)]

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `forkTasks` | [`TaskDefTypes`](common.md#taskdeftypes)[] |

#### Returns

[[`ForkJoinTaskDef`](../interfaces/common.ForkJoinTaskDef.md), [`JoinTaskDef`](../interfaces/common.JoinTaskDef.md)]

#### Defined in

[src/common/sdk/forkJoin.ts:14](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/sdk/forkJoin.ts#L14)

___

### generate

▸ **generate**(`overrides`): [`WorkflowDef`](../interfaces/common.WorkflowDef.md)

Takes an optional partial WorkflowDefGen
generates a workflow replacing default/fake values with provided overrides

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `overrides` | `Partial`<`WorkflowDefGen`\> | overrides for defaults |

#### Returns

[`WorkflowDef`](../interfaces/common.WorkflowDef.md)

a fully defined task

#### Defined in

[src/common/generators/generator.ts:89](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/generators/generator.ts#L89)

___

### generateDoWhileTask

▸ **generateDoWhileTask**(`overrides?`, `nestedTasksMapper?`): [`DoWhileTaskDef`](../interfaces/common.DoWhileTaskDef.md)

Takes an optional partial DoWhileTaskDefGen and an optional nestedMapper
generates a task replacing default/fake values with provided overrides

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `overrides` | `Partial`<`DoWhileTaskDefGen`\> | `{}` | overrides for defaults |
| `nestedTasksMapper` | `NestedTaskMapper` | `taskGenMapper` | function to run on array of nested tasks |

#### Returns

[`DoWhileTaskDef`](../interfaces/common.DoWhileTaskDef.md)

a fully defined task

#### Defined in

[src/common/generators/index.ts:46](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/generators/index.ts#L46)

___

### generateEventTask

▸ **generateEventTask**(`overrides?`): [`EventTaskDef`](../interfaces/common.EventTaskDef.md)

Takes an optional partial EventTaskDef
generates a task replacing default/fake values with provided overrides

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `overrides` | `Partial`<[`EventTaskDef`](../interfaces/common.EventTaskDef.md)\> | overrides for defaults |

#### Returns

[`EventTaskDef`](../interfaces/common.EventTaskDef.md)

a fully defined task

#### Defined in

[src/common/generators/EventTask.ts:11](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/generators/EventTask.ts#L11)

___

### generateForkJoinTask

▸ **generateForkJoinTask**(`overrides?`, `nestedMapper?`): [`ForkJoinTaskDef`](../interfaces/common.ForkJoinTaskDef.md)

Takes an optional partial DoWhileTaskDefGen and an optional nestedMapper
generates a task replacing default/fake values with provided overrides

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `overrides` | `Partial`<`ForkJoinTaskDefGen`\> | `{}` | overrides for defaults |
| `nestedMapper` | `NestedTaskMapper` | `taskGenMapper` | - |

#### Returns

[`ForkJoinTaskDef`](../interfaces/common.ForkJoinTaskDef.md)

a fully defined task

#### Defined in

[src/common/generators/index.ts:59](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/generators/index.ts#L59)

___

### generateHTTPTask

▸ **generateHTTPTask**(`overrides?`): [`HttpTaskDef`](../interfaces/common.HttpTaskDef.md)

Takes an optional partial HttpTaskDef
generates a task replacing default/fake values with provided overrides

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `overrides` | `Partial`<[`HttpTaskDef`](../interfaces/common.HttpTaskDef.md)\> | overrides for defaults |

#### Returns

[`HttpTaskDef`](../interfaces/common.HttpTaskDef.md)

a fully defined task

#### Defined in

[src/common/generators/HttpTask.ts:11](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/generators/HttpTask.ts#L11)

___

### generateInlineTask

▸ **generateInlineTask**(`override?`): [`InlineTaskDef`](../interfaces/common.InlineTaskDef.md)

Takes an optional partial InlineTaskDefGen
generates a task replacing default/fake values with provided overrides

<b>note</b> that the inputParameters.expression can be either a string containing javascript
or a function thar returns an ES5 function

#### Parameters

| Name | Type |
| :------ | :------ |
| `override` | `Partial`<`InlineTaskDefGen`\> |

#### Returns

[`InlineTaskDef`](../interfaces/common.InlineTaskDef.md)

a fully defined task

#### Defined in

[src/common/generators/InlineTask.ts:47](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/generators/InlineTask.ts#L47)

___

### generateJQTransformTask

▸ **generateJQTransformTask**(`overrides?`): [`JsonJQTransformTaskDef`](../interfaces/common.JsonJQTransformTaskDef.md)

Takes an optional partial JsonJQTransformTaskDef
generates a task replacing default/fake values with provided overrides

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `overrides` | `Partial`<[`JsonJQTransformTaskDef`](../interfaces/common.JsonJQTransformTaskDef.md)\> | overrides for defaults |

#### Returns

[`JsonJQTransformTaskDef`](../interfaces/common.JsonJQTransformTaskDef.md)

a fully defined task

#### Defined in

[src/common/generators/JsonJQTransform.ts:11](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/generators/JsonJQTransform.ts#L11)

___

### generateJoinTask

▸ **generateJoinTask**(`overrides?`): [`JoinTaskDef`](../interfaces/common.JoinTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides` | `Partial`<[`JoinTaskDef`](../interfaces/common.JoinTaskDef.md)\> |

#### Returns

[`JoinTaskDef`](../interfaces/common.JoinTaskDef.md)

#### Defined in

[src/common/generators/ForkJoin.ts:16](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/generators/ForkJoin.ts#L16)

___

### generateKafkaPublishTask

▸ **generateKafkaPublishTask**(`overrides?`): [`KafkaPublishTaskDef`](../interfaces/common.KafkaPublishTaskDef.md)

Takes an optional partial KafkaPublishTaskDef
generates a task replacing default/fake values with provided overrides

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `overrides` | `Partial`<[`KafkaPublishTaskDef`](../interfaces/common.KafkaPublishTaskDef.md)\> | overrides for defaults |

#### Returns

[`KafkaPublishTaskDef`](../interfaces/common.KafkaPublishTaskDef.md)

a fully defined task

#### Defined in

[src/common/generators/KafkaTask.ts:11](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/generators/KafkaTask.ts#L11)

___

### generateSetVariableTask

▸ **generateSetVariableTask**(`overrides?`): [`SetVariableTaskDef`](../interfaces/common.SetVariableTaskDef.md)

Takes an optional partial SetVariableTaskDef
generates a task replacing default/fake values with provided overrides

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `overrides` | `Partial`<[`SetVariableTaskDef`](../interfaces/common.SetVariableTaskDef.md)\> | overrides for defaults |

#### Returns

[`SetVariableTaskDef`](../interfaces/common.SetVariableTaskDef.md)

a fully defined task

#### Defined in

[src/common/generators/SetVariableTask.ts:11](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/generators/SetVariableTask.ts#L11)

___

### generateSimpleTask

▸ **generateSimpleTask**(`overrides?`): [`SimpleTaskDef`](../interfaces/common.SimpleTaskDef.md)

Takes an optional partial SimpleTaskDef
generates a task replacing default values with provided overrides

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `overrides` | `Partial`<[`SimpleTaskDef`](../interfaces/common.SimpleTaskDef.md)\> | overrides for defaults |

#### Returns

[`SimpleTaskDef`](../interfaces/common.SimpleTaskDef.md)

a fully defined task

#### Defined in

[src/common/generators/SimpleTask.ts:11](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/generators/SimpleTask.ts#L11)

___

### generateSubWorkflowTask

▸ **generateSubWorkflowTask**(`overrides?`): [`SubWorkflowTaskDef`](../interfaces/common.SubWorkflowTaskDef.md)

Takes an optional partial SubWorkflowTaskDef
generates a task replacing default/fake values with provided overrides

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `overrides` | `Partial`<[`SubWorkflowTaskDef`](../interfaces/common.SubWorkflowTaskDef.md)\> | overrides for defaults |

#### Returns

[`SubWorkflowTaskDef`](../interfaces/common.SubWorkflowTaskDef.md)

a fully defined task

#### Defined in

[src/common/generators/SubWorkflowTask.ts:11](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/generators/SubWorkflowTask.ts#L11)

___

### generateSwitchTask

▸ **generateSwitchTask**(`overrides?`, `nestedTasksMapper?`): [`SwitchTaskDef`](../interfaces/common.SwitchTaskDef.md)

Takes an optional partial SwitchTaskDefGen and an optional nestedMapper
generates a task replacing default/fake values with provided overrides

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `overrides` | `Partial`<`SwitchTaskDefGen`\> | `{}` | overrides for defaults |
| `nestedTasksMapper` | `NestedTaskMapper` | `taskGenMapper` | function to run on array of nested tasks |

#### Returns

[`SwitchTaskDef`](../interfaces/common.SwitchTaskDef.md)

a fully defined task

#### Defined in

[src/common/generators/index.ts:33](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/generators/index.ts#L33)

___

### generateTerminateTask

▸ **generateTerminateTask**(`overrides?`): [`TerminateTaskDef`](../interfaces/common.TerminateTaskDef.md)

Takes an optional partial TerminateTaskDef
generates a task replacing default/fake values with provided overrides

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `overrides` | `Partial`<[`TerminateTaskDef`](../interfaces/common.TerminateTaskDef.md)\> | overrides for defaults |

#### Returns

[`TerminateTaskDef`](../interfaces/common.TerminateTaskDef.md)

a fully defined task

#### Defined in

[src/common/generators/TerminateTask.ts:11](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/generators/TerminateTask.ts#L11)

___

### generateWaitTask

▸ **generateWaitTask**(`overrides?`): [`WaitTaskDef`](../interfaces/common.WaitTaskDef.md)

Takes an optional partial WaitTaskDef
generates a task replacing default/fake values with provided overrides

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `overrides` | `Partial`<[`WaitTaskDef`](../interfaces/common.WaitTaskDef.md)\> | overrides for defaults |

#### Returns

[`WaitTaskDef`](../interfaces/common.WaitTaskDef.md)

a fully defined task

#### Defined in

[src/common/generators/WaitTask.ts:11](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/generators/WaitTask.ts#L11)

___

### httpTask

▸ **httpTask**(`taskReferenceName`, `inputParameters`): [`HttpTaskDef`](../interfaces/common.HttpTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `inputParameters` | [`HttpInputParameters`](../interfaces/common.HttpInputParameters.md) |

#### Returns

[`HttpTaskDef`](../interfaces/common.HttpTaskDef.md)

#### Defined in

[src/common/sdk/http.ts:7](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/sdk/http.ts#L7)

___

### inlineTask

▸ **inlineTask**(`taskReferenceName`, `script`, `evaluatorType?`): [`InlineTaskDef`](../interfaces/common.InlineTaskDef.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `taskReferenceName` | `string` | `undefined` |
| `script` | `string` | `undefined` |
| `evaluatorType` | ``"javascript"`` \| ``"graaljs"`` | `"javascript"` |

#### Returns

[`InlineTaskDef`](../interfaces/common.InlineTaskDef.md)

#### Defined in

[src/common/sdk/inline.ts:3](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/sdk/inline.ts#L3)

___

### joinTask

▸ **joinTask**(`taskReferenceName`, `joinOn`): [`JoinTaskDef`](../interfaces/common.JoinTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `joinOn` | `string`[] |

#### Returns

[`JoinTaskDef`](../interfaces/common.JoinTaskDef.md)

#### Defined in

[src/common/sdk/join.ts:3](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/sdk/join.ts#L3)

___

### jsonJqTask

▸ **jsonJqTask**(`taskReferenceName`, `script`): [`JsonJQTransformTaskDef`](../interfaces/common.JsonJQTransformTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `script` | `string` |

#### Returns

[`JsonJQTransformTaskDef`](../interfaces/common.JsonJQTransformTaskDef.md)

#### Defined in

[src/common/sdk/jsonJq.ts:3](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/sdk/jsonJq.ts#L3)

___

### kafkaPublishTask

▸ **kafkaPublishTask**(`taskReferenceName`, `kafka_request`): [`KafkaPublishTaskDef`](../interfaces/common.KafkaPublishTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `kafka_request` | [`KafkaPublishInputParameters`](../interfaces/common.KafkaPublishInputParameters.md) |

#### Returns

[`KafkaPublishTaskDef`](../interfaces/common.KafkaPublishTaskDef.md)

#### Defined in

[src/common/sdk/kafkaPublish.ts:7](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/sdk/kafkaPublish.ts#L7)

___

### newLoopTask

▸ **newLoopTask**(`taskRefName`, `iterations`, `tasks`): [`DoWhileTaskDef`](../interfaces/common.DoWhileTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskRefName` | `string` |
| `iterations` | `number` |
| `tasks` | [`TaskDefTypes`](common.md#taskdeftypes)[] |

#### Returns

[`DoWhileTaskDef`](../interfaces/common.DoWhileTaskDef.md)

#### Defined in

[src/common/sdk/doWhile.ts:19](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/sdk/doWhile.ts#L19)

___

### orkesConductorClient

▸ **orkesConductorClient**(`config?`, `requestHandler?`): `Promise`<[`ConductorClient`](../classes/common.ConductorClient.md)\>

Takes a config with keyId and keySecret returns a promise with an instance of ConductorClient

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `config?` | `Partial`<[`OrkesApiConfig`](common.md#orkesapiconfig)\> | `undefined` | ConductorClientConfig with keyId and keySecret |
| `requestHandler` | [`ConductorHttpRequest`](common.md#conductorhttprequest) | `defaultRequestHandler` | (optional) ConductorHttpRequest handler |

#### Returns

`Promise`<[`ConductorClient`](../classes/common.ConductorClient.md)\>

#### Defined in

[src/common/orkes/OrkesConductorClient.ts:22](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/orkes/OrkesConductorClient.ts#L22)

___

### setVariableTask

▸ **setVariableTask**(`taskReferenceName`, `inputParameters`): [`SetVariableTaskDef`](../interfaces/common.SetVariableTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `inputParameters` | `Record`<`string`, `unknown`\> |

#### Returns

[`SetVariableTaskDef`](../interfaces/common.SetVariableTaskDef.md)

#### Defined in

[src/common/sdk/setVariable.ts:3](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/sdk/setVariable.ts#L3)

___

### simpleTask

▸ **simpleTask**(`taskReferenceName`, `name`, `inputParameters`): [`SimpleTaskDef`](../interfaces/common.SimpleTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `name` | `string` |
| `inputParameters` | `Record`<`string`, `unknown`\> |

#### Returns

[`SimpleTaskDef`](../interfaces/common.SimpleTaskDef.md)

#### Defined in

[src/common/sdk/simple.ts:3](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/sdk/simple.ts#L3)

___

### sqsEventTask

▸ **sqsEventTask**(`taskReferenceName`, `queueName`): [`EventTaskDef`](../interfaces/common.EventTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `queueName` | `string` |

#### Returns

[`EventTaskDef`](../interfaces/common.EventTaskDef.md)

#### Defined in

[src/common/sdk/event.ts:14](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/sdk/event.ts#L14)

___

### subWorkflowTask

▸ **subWorkflowTask**(`taskReferenceName`, `workflowName`, `version?`): [`SubWorkflowTaskDef`](../interfaces/common.SubWorkflowTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `workflowName` | `string` |
| `version?` | `number` |

#### Returns

[`SubWorkflowTaskDef`](../interfaces/common.SubWorkflowTaskDef.md)

#### Defined in

[src/common/sdk/subWorkflow.ts:3](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/sdk/subWorkflow.ts#L3)

___

### switchTask

▸ **switchTask**(`taskReferenceName`, `expression`, `decisionCases?`, `defaultCase?`): [`SwitchTaskDef`](../interfaces/common.SwitchTaskDef.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `taskReferenceName` | `string` | `undefined` |
| `expression` | `string` | `undefined` |
| `decisionCases` | `Record`<`string`, [`TaskDefTypes`](common.md#taskdeftypes)[]\> | `{}` |
| `defaultCase` | [`TaskDefTypes`](common.md#taskdeftypes)[] | `[]` |

#### Returns

[`SwitchTaskDef`](../interfaces/common.SwitchTaskDef.md)

#### Defined in

[src/common/sdk/switch.ts:3](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/sdk/switch.ts#L3)

___

### taskGenMapper

▸ **taskGenMapper**(`tasks`): [`TaskDefTypes`](common.md#taskdeftypes)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasks` | `Partial`<`TaskDefTypesGen`\>[] |

#### Returns

[`TaskDefTypes`](common.md#taskdeftypes)[]

#### Defined in

[src/common/generators/generator.ts:57](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/generators/generator.ts#L57)

___

### terminateTask

▸ **terminateTask**(`taskReferenceName`, `status`, `terminationReason?`): [`TerminateTaskDef`](../interfaces/common.TerminateTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `status` | ``"FAILED"`` \| ``"COMPLETED"`` |
| `terminationReason?` | `string` |

#### Returns

[`TerminateTaskDef`](../interfaces/common.TerminateTaskDef.md)

#### Defined in

[src/common/sdk/terminate.ts:2](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/sdk/terminate.ts#L2)

___

### waitTaskDuration

▸ **waitTaskDuration**(`taskReferenceName`, `duration`): [`WaitTaskDef`](../interfaces/common.WaitTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `duration` | `string` |

#### Returns

[`WaitTaskDef`](../interfaces/common.WaitTaskDef.md)

#### Defined in

[src/common/sdk/wait.ts:3](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/sdk/wait.ts#L3)

___

### waitTaskUntil

▸ **waitTaskUntil**(`taskReferenceName`, `until`): [`WaitTaskDef`](../interfaces/common.WaitTaskDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskReferenceName` | `string` |
| `until` | `string` |

#### Returns

[`WaitTaskDef`](../interfaces/common.WaitTaskDef.md)

#### Defined in

[src/common/sdk/wait.ts:12](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/sdk/wait.ts#L12)

___

### workflow

▸ **workflow**(`name`, `tasks`): [`WorkflowDef`](../interfaces/common.WorkflowDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `tasks` | [`TaskDefTypes`](common.md#taskdeftypes)[] |

#### Returns

[`WorkflowDef`](../interfaces/common.WorkflowDef.md)

#### Defined in

[src/common/sdk/workflow.ts:3](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/sdk/workflow.ts#L3)
