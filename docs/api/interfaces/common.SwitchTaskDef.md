[@io-orkes/conductor-typescript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / SwitchTaskDef

# Interface: SwitchTaskDef

[common](../modules/common.md).SwitchTaskDef

## Hierarchy

- [`CommonTaskDef`](common.CommonTaskDef.md)

  ↳ **`SwitchTaskDef`**

## Table of contents

### Properties

- [decisionCases](common.SwitchTaskDef.md#decisioncases)
- [defaultCase](common.SwitchTaskDef.md#defaultcase)
- [evaluatorType](common.SwitchTaskDef.md#evaluatortype)
- [expression](common.SwitchTaskDef.md#expression)
- [inputParameters](common.SwitchTaskDef.md#inputparameters)
- [name](common.SwitchTaskDef.md#name)
- [taskReferenceName](common.SwitchTaskDef.md#taskreferencename)
- [type](common.SwitchTaskDef.md#type)

## Properties

### decisionCases

• **decisionCases**: `Record`<`string`, [`TaskDefTypes`](../modules/common.md#taskdeftypes)[]\>

#### Defined in

src/common/types.ts:169

___

### defaultCase

• **defaultCase**: [`TaskDefTypes`](../modules/common.md#taskdeftypes)[]

#### Defined in

src/common/types.ts:170

___

### evaluatorType

• **evaluatorType**: ``"javascript"`` \| ``"value-param"``

#### Defined in

src/common/types.ts:171

___

### expression

• **expression**: `string`

#### Defined in

src/common/types.ts:172

___

### inputParameters

• **inputParameters**: `Record`<`string`, `unknown`\>

#### Defined in

src/common/types.ts:167

___

### name

• **name**: `string`

#### Inherited from

[CommonTaskDef](common.CommonTaskDef.md).[name](common.CommonTaskDef.md#name)

#### Defined in

src/common/types.ts:4

___

### taskReferenceName

• **taskReferenceName**: `string`

#### Inherited from

[CommonTaskDef](common.CommonTaskDef.md).[taskReferenceName](common.CommonTaskDef.md#taskreferencename)

#### Defined in

src/common/types.ts:5

___

### type

• **type**: [`SWITCH`](../enums/common.TaskType.md#switch)

#### Defined in

src/common/types.ts:168
