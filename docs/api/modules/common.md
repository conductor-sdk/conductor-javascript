[@io-orkes/conductor-typescript](../README.md) / [Modules](../modules.md) / common

# Module: common

## Table of contents

### Enumerations

- [TaskType](../enums/common.TaskType.md)

### Classes

- [CancelError](../classes/common.CancelError.md)
- [CancelablePromise](../classes/common.CancelablePromise.md)
- [ConductorClient](../classes/common.ConductorClient.md)
- [DefaultLogger](../classes/common.DefaultLogger.md)

### Interfaces

- [CommonTaskDef](../interfaces/common.CommonTaskDef.md)
- [ConductorLogger](../interfaces/common.ConductorLogger.md)
- [DefaultLoggerConfig](../interfaces/common.DefaultLoggerConfig.md)
- [DoWhileTaskDef](../interfaces/common.DoWhileTaskDef.md)
- [EventTaskDef](../interfaces/common.EventTaskDef.md)
- [ForkJoinDynamicDef](../interfaces/common.ForkJoinDynamicDef.md)
- [ForkJoinTaskDef](../interfaces/common.ForkJoinTaskDef.md)
- [HttpTaskDef](../interfaces/common.HttpTaskDef.md)
- [InlineTaskDef](../interfaces/common.InlineTaskDef.md)
- [InlineTaskInputParameters](../interfaces/common.InlineTaskInputParameters.md)
- [JoinTaskDef](../interfaces/common.JoinTaskDef.md)
- [JsonJQTransformTaskDef](../interfaces/common.JsonJQTransformTaskDef.md)
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

- [ConductorHttpRequest](common.md#conductorhttprequest)
- [ConductorLogLevel](common.md#conductorloglevel)
- [OpenAPIConfig](common.md#openapiconfig)
- [OrkesApiConfig](common.md#orkesapiconfig)
- [RequestType](common.md#requesttype)
- [TaskDefTypes](common.md#taskdeftypes)
- [WorkflowInputParameters](common.md#workflowinputparameters)

### Functions

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
- [orkesConductorClient](common.md#orkesconductorclient)
- [taskGenMapper](common.md#taskgenmapper)

## Type Aliases

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

src/common/RequestCustomizer.ts:26

___

### ConductorLogLevel

Ƭ **ConductorLogLevel**: keyof typeof `LOG_LEVELS`

#### Defined in

src/common/ConductorLogger.ts:7

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

src/common/open-api/core/OpenAPI.ts:9

___

### OrkesApiConfig

Ƭ **OrkesApiConfig**: `ConductorClientAPIConfig` & `GenerateTokenRequest`

#### Defined in

src/common/orkes/OrkesConductorClient.ts:9

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

src/common/RequestCustomizer.ts:25

___

### TaskDefTypes

Ƭ **TaskDefTypes**: [`SimpleTaskDef`](../interfaces/common.SimpleTaskDef.md) \| [`DoWhileTaskDef`](../interfaces/common.DoWhileTaskDef.md) \| [`EventTaskDef`](../interfaces/common.EventTaskDef.md) \| [`ForkJoinTaskDef`](../interfaces/common.ForkJoinTaskDef.md) \| [`ForkJoinDynamicDef`](../interfaces/common.ForkJoinDynamicDef.md) \| [`HttpTaskDef`](../interfaces/common.HttpTaskDef.md) \| [`InlineTaskDef`](../interfaces/common.InlineTaskDef.md) \| [`JsonJQTransformTaskDef`](../interfaces/common.JsonJQTransformTaskDef.md) \| [`KafkaPublishTaskDef`](../interfaces/common.KafkaPublishTaskDef.md) \| [`SetVariableTaskDef`](../interfaces/common.SetVariableTaskDef.md) \| [`SubWorkflowTaskDef`](../interfaces/common.SubWorkflowTaskDef.md) \| [`SwitchTaskDef`](../interfaces/common.SwitchTaskDef.md) \| [`TerminateTaskDef`](../interfaces/common.TerminateTaskDef.md) \| [`JoinTaskDef`](../interfaces/common.JoinTaskDef.md) \| [`WaitTaskDef`](../interfaces/common.WaitTaskDef.md)

#### Defined in

src/common/types.ts:33

___

### WorkflowInputParameters

Ƭ **WorkflowInputParameters**<`T`\>: `O2T`<`U2O`<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Defined in

src/common/types.ts:199

## Functions

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

src/common/generators/generator.ts:96

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

src/common/generators/index.ts:46

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

src/common/generators/EventTask.ts:11

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

src/common/generators/index.ts:59

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

src/common/generators/HttpTask.ts:11

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

src/common/generators/InlineTask.ts:47

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

src/common/generators/JsonJQTransform.ts:11

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

src/common/generators/ForkJoin.ts:16

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

src/common/generators/KafkaTask.ts:11

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

src/common/generators/SetVariableTask.ts:11

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

src/common/generators/SimpleTask.ts:11

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

src/common/generators/SubWorkflowTask.ts:11

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

src/common/generators/index.ts:33

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

src/common/generators/TerminateTask.ts:11

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

src/common/generators/WaitTask.ts:11

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

src/common/orkes/OrkesConductorClient.ts:23

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

src/common/generators/generator.ts:57
