[@io-orkes/conductor-typescript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / DoWhileTaskDef

# Interface: DoWhileTaskDef

[common](../modules/common.md).DoWhileTaskDef

## Hierarchy

- [`CommonTaskDef`](common.CommonTaskDef.md)

  ↳ **`DoWhileTaskDef`**

## Table of contents

### Properties

- [asyncComplete](common.DoWhileTaskDef.md#asynccomplete)
- [decisionCases](common.DoWhileTaskDef.md#decisioncases)
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

• **asyncComplete**: `boolean`

#### Defined in

src/common/types.ts:56

___

### decisionCases

• **decisionCases**: `Record`<`string`, [`TaskDefTypes`](../modules/common.md#taskdeftypes)[]\>

#### Defined in

src/common/types.ts:53

___

### inputParameters

• **inputParameters**: `Record`<`string`, `string`\>

#### Defined in

src/common/types.ts:51

___

### loopCondition

• **loopCondition**: `string`

#### Defined in

src/common/types.ts:57

___

### loopOver

• **loopOver**: [`TaskDefTypes`](../modules/common.md#taskdeftypes)[]

#### Defined in

src/common/types.ts:58

___

### name

• **name**: `string`

#### Inherited from

[CommonTaskDef](common.CommonTaskDef.md).[name](common.CommonTaskDef.md#name)

#### Defined in

src/common/types.ts:4

___

### optional

• **optional**: `boolean`

#### Defined in

src/common/types.ts:55

___

### startDelay

• **startDelay**: `number`

#### Defined in

src/common/types.ts:54

___

### taskReferenceName

• **taskReferenceName**: `string`

#### Inherited from

[CommonTaskDef](common.CommonTaskDef.md).[taskReferenceName](common.CommonTaskDef.md#taskreferencename)

#### Defined in

src/common/types.ts:5

___

### type

• **type**: [`DO_WHILE`](../enums/common.TaskType.md#do_while)

#### Defined in

src/common/types.ts:52
