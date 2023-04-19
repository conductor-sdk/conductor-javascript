[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / WorkflowDef

# Interface: WorkflowDef

[common](../modules/common.md).WorkflowDef

## Hierarchy

- `Omit`<`OriginalWorkflowDef`, ``"tasks"`` \| ``"version"`` \| ``"inputParameters"``\>

  ↳ **`WorkflowDef`**

## Table of contents

### Properties

- [createTime](common.WorkflowDef.md#createtime)
- [createdBy](common.WorkflowDef.md#createdby)
- [description](common.WorkflowDef.md#description)
- [failureWorkflow](common.WorkflowDef.md#failureworkflow)
- [inputParameters](common.WorkflowDef.md#inputparameters)
- [inputTemplate](common.WorkflowDef.md#inputtemplate)
- [name](common.WorkflowDef.md#name)
- [outputParameters](common.WorkflowDef.md#outputparameters)
- [ownerApp](common.WorkflowDef.md#ownerapp)
- [ownerEmail](common.WorkflowDef.md#owneremail)
- [restartable](common.WorkflowDef.md#restartable)
- [schemaVersion](common.WorkflowDef.md#schemaversion)
- [tasks](common.WorkflowDef.md#tasks)
- [timeoutPolicy](common.WorkflowDef.md#timeoutpolicy)
- [timeoutSeconds](common.WorkflowDef.md#timeoutseconds)
- [updateTime](common.WorkflowDef.md#updatetime)
- [updatedBy](common.WorkflowDef.md#updatedby)
- [variables](common.WorkflowDef.md#variables)
- [version](common.WorkflowDef.md#version)
- [workflowStatusListenerEnabled](common.WorkflowDef.md#workflowstatuslistenerenabled)

## Properties

### createTime

• `Optional` **createTime**: `number`

#### Inherited from

Omit.createTime

#### Defined in

[src/common/open-api/models/WorkflowDef.ts:9](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/WorkflowDef.ts#L9)

___

### createdBy

• `Optional` **createdBy**: `string`

#### Inherited from

Omit.createdBy

#### Defined in

[src/common/open-api/models/WorkflowDef.ts:11](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/WorkflowDef.ts#L11)

___

### description

• `Optional` **description**: `string`

#### Inherited from

Omit.description

#### Defined in

[src/common/open-api/models/WorkflowDef.ts:14](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/WorkflowDef.ts#L14)

___

### failureWorkflow

• `Optional` **failureWorkflow**: `string`

#### Inherited from

Omit.failureWorkflow

#### Defined in

[src/common/open-api/models/WorkflowDef.ts:19](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/WorkflowDef.ts#L19)

___

### inputParameters

• **inputParameters**: `string`[]

#### Defined in

[src/common/types.ts:211](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L211)

___

### inputTemplate

• `Optional` **inputTemplate**: `Record`<`string`, `any`\>

#### Inherited from

Omit.inputTemplate

#### Defined in

[src/common/open-api/models/WorkflowDef.ts:27](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/WorkflowDef.ts#L27)

___

### name

• **name**: `string`

#### Inherited from

Omit.name

#### Defined in

[src/common/open-api/models/WorkflowDef.ts:13](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/WorkflowDef.ts#L13)

___

### outputParameters

• `Optional` **outputParameters**: `Record`<`string`, `any`\>

#### Inherited from

Omit.outputParameters

#### Defined in

[src/common/open-api/models/WorkflowDef.ts:18](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/WorkflowDef.ts#L18)

___

### ownerApp

• `Optional` **ownerApp**: `string`

#### Inherited from

Omit.ownerApp

#### Defined in

[src/common/open-api/models/WorkflowDef.ts:8](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/WorkflowDef.ts#L8)

___

### ownerEmail

• `Optional` **ownerEmail**: `string`

#### Inherited from

Omit.ownerEmail

#### Defined in

[src/common/open-api/models/WorkflowDef.ts:23](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/WorkflowDef.ts#L23)

___

### restartable

• `Optional` **restartable**: `boolean`

#### Inherited from

Omit.restartable

#### Defined in

[src/common/open-api/models/WorkflowDef.ts:21](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/WorkflowDef.ts#L21)

___

### schemaVersion

• `Optional` **schemaVersion**: `number`

#### Inherited from

Omit.schemaVersion

#### Defined in

[src/common/open-api/models/WorkflowDef.ts:20](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/WorkflowDef.ts#L20)

___

### tasks

• **tasks**: [`TaskDefTypes`](../modules/common.md#taskdeftypes)[]

#### Defined in

[src/common/types.ts:213](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L213)

___

### timeoutPolicy

• `Optional` **timeoutPolicy**: ``"TIME_OUT_WF"`` \| ``"ALERT_ONLY"``

#### Inherited from

Omit.timeoutPolicy

#### Defined in

[src/common/open-api/models/WorkflowDef.ts:24](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/WorkflowDef.ts#L24)

___

### timeoutSeconds

• **timeoutSeconds**: `number`

#### Inherited from

Omit.timeoutSeconds

#### Defined in

[src/common/open-api/models/WorkflowDef.ts:25](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/WorkflowDef.ts#L25)

___

### updateTime

• `Optional` **updateTime**: `number`

#### Inherited from

Omit.updateTime

#### Defined in

[src/common/open-api/models/WorkflowDef.ts:10](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/WorkflowDef.ts#L10)

___

### updatedBy

• `Optional` **updatedBy**: `string`

#### Inherited from

Omit.updatedBy

#### Defined in

[src/common/open-api/models/WorkflowDef.ts:12](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/WorkflowDef.ts#L12)

___

### variables

• `Optional` **variables**: `Record`<`string`, `any`\>

#### Inherited from

Omit.variables

#### Defined in

[src/common/open-api/models/WorkflowDef.ts:26](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/WorkflowDef.ts#L26)

___

### version

• **version**: `number`

#### Defined in

[src/common/types.ts:212](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L212)

___

### workflowStatusListenerEnabled

• `Optional` **workflowStatusListenerEnabled**: `boolean`

#### Inherited from

Omit.workflowStatusListenerEnabled

#### Defined in

[src/common/open-api/models/WorkflowDef.ts:22](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/open-api/models/WorkflowDef.ts#L22)
