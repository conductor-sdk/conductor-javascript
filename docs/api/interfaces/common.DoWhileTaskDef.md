[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / DoWhileTaskDef

# Interface: DoWhileTaskDef

[common](../modules/common.md).DoWhileTaskDef

## Hierarchy

- [`CommonTaskDef`](common.CommonTaskDef.md)

  ↳ **`DoWhileTaskDef`**

## Table of contents

### Properties

- [asyncComplete](common.DoWhileTaskDef.md#asynccomplete)
- [inputParameters](common.DoWhileTaskDef.md#inputparameters)
- [loopCondition](common.DoWhileTaskDef.md#loopcondition)
- [loopOver](common.DoWhileTaskDef.md#loopover)
- [name](common.DoWhileTaskDef.md#name)
- [optional](common.DoWhileTaskDef.md#optional)
- [startDelay](common.DoWhileTaskDef.md#startdelay)
- [taskReferenceName](common.DoWhileTaskDef.md#taskreferencename)
- [type](common.DoWhileTaskDef.md#type)

## Properties

### asyncComplete

• `Optional` **asyncComplete**: `boolean`

#### Defined in

[src/common/types.ts:55](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L55)

___

### inputParameters

• **inputParameters**: `Record`<`string`, `unknown`\>

#### Defined in

[src/common/types.ts:51](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L51)

___

### loopCondition

• **loopCondition**: `string`

#### Defined in

[src/common/types.ts:56](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L56)

___

### loopOver

• **loopOver**: [`TaskDefTypes`](../modules/common.md#taskdeftypes)[]

#### Defined in

[src/common/types.ts:57](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L57)

___

### name

• **name**: `string`

#### Inherited from

[CommonTaskDef](common.CommonTaskDef.md).[name](common.CommonTaskDef.md#name)

#### Defined in

[src/common/types.ts:4](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L4)

___

### optional

• `Optional` **optional**: `boolean`

#### Defined in

[src/common/types.ts:54](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L54)

___

### startDelay

• `Optional` **startDelay**: `number`

#### Defined in

[src/common/types.ts:53](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L53)

___

### taskReferenceName

• **taskReferenceName**: `string`

#### Inherited from

[CommonTaskDef](common.CommonTaskDef.md).[taskReferenceName](common.CommonTaskDef.md#taskreferencename)

#### Defined in

[src/common/types.ts:5](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L5)

___

### type

• **type**: [`DO_WHILE`](../enums/common.TaskType.md#do_while)

#### Defined in

[src/common/types.ts:52](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L52)
