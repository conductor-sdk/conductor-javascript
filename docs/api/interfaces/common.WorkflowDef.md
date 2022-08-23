[@io-orkes/conductor-typescript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / WorkflowDef

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

src/common/open-api/models/WorkflowDef.ts:9

___

### createdBy

• `Optional` **createdBy**: `string`

#### Inherited from

Omit.createdBy

#### Defined in

src/common/open-api/models/WorkflowDef.ts:11

___

### description

• `Optional` **description**: `string`

#### Inherited from

Omit.description

#### Defined in

src/common/open-api/models/WorkflowDef.ts:14

___

### failureWorkflow

• `Optional` **failureWorkflow**: `string`

#### Inherited from

Omit.failureWorkflow

#### Defined in

src/common/open-api/models/WorkflowDef.ts:19

___

### inputParameters

• **inputParameters**: `string`[]

#### Defined in

src/common/types.ts:204

___

### inputTemplate

• `Optional` **inputTemplate**: `Record`<`string`, `any`\>

#### Inherited from

Omit.inputTemplate

#### Defined in

src/common/open-api/models/WorkflowDef.ts:27

___

### name

• **name**: `string`

#### Inherited from

Omit.name

#### Defined in

src/common/open-api/models/WorkflowDef.ts:13

___

### outputParameters

• `Optional` **outputParameters**: `Record`<`string`, `any`\>

#### Inherited from

Omit.outputParameters

#### Defined in

src/common/open-api/models/WorkflowDef.ts:18

___

### ownerApp

• `Optional` **ownerApp**: `string`

#### Inherited from

Omit.ownerApp

#### Defined in

src/common/open-api/models/WorkflowDef.ts:8

___

### ownerEmail

• `Optional` **ownerEmail**: `string`

#### Inherited from

Omit.ownerEmail

#### Defined in

src/common/open-api/models/WorkflowDef.ts:23

___

### restartable

• `Optional` **restartable**: `boolean`

#### Inherited from

Omit.restartable

#### Defined in

src/common/open-api/models/WorkflowDef.ts:21

___

### schemaVersion

• `Optional` **schemaVersion**: `number`

#### Inherited from

Omit.schemaVersion

#### Defined in

src/common/open-api/models/WorkflowDef.ts:20

___

### tasks

• **tasks**: [`TaskDefTypes`](../modules/common.md#taskdeftypes)[]

#### Defined in

src/common/types.ts:206

___

### timeoutPolicy

• `Optional` **timeoutPolicy**: ``"TIME_OUT_WF"`` \| ``"ALERT_ONLY"``

#### Inherited from

Omit.timeoutPolicy

#### Defined in

src/common/open-api/models/WorkflowDef.ts:24

___

### timeoutSeconds

• **timeoutSeconds**: `number`

#### Inherited from

Omit.timeoutSeconds

#### Defined in

src/common/open-api/models/WorkflowDef.ts:25

___

### updateTime

• `Optional` **updateTime**: `number`

#### Inherited from

Omit.updateTime

#### Defined in

src/common/open-api/models/WorkflowDef.ts:10

___

### updatedBy

• `Optional` **updatedBy**: `string`

#### Inherited from

Omit.updatedBy

#### Defined in

src/common/open-api/models/WorkflowDef.ts:12

___

### variables

• `Optional` **variables**: `Record`<`string`, `any`\>

#### Inherited from

Omit.variables

#### Defined in

src/common/open-api/models/WorkflowDef.ts:26

___

### version

• **version**: `number`

#### Defined in

src/common/types.ts:205

___

### workflowStatusListenerEnabled

• `Optional` **workflowStatusListenerEnabled**: `boolean`

#### Inherited from

Omit.workflowStatusListenerEnabled

#### Defined in

src/common/open-api/models/WorkflowDef.ts:22
