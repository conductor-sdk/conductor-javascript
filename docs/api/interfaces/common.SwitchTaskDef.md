[@io-orkes/conductor-javascript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / SwitchTaskDef

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

[src/common/types.ts:171](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L171)

___

### defaultCase

• **defaultCase**: [`TaskDefTypes`](../modules/common.md#taskdeftypes)[]

#### Defined in

[src/common/types.ts:172](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L172)

___

### evaluatorType

• **evaluatorType**: ``"javascript"`` \| ``"value-param"``

#### Defined in

[src/common/types.ts:173](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L173)

___

### expression

• **expression**: `string`

#### Defined in

[src/common/types.ts:174](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L174)

___

### inputParameters

• **inputParameters**: `Record`<`string`, `unknown`\>

#### Defined in

[src/common/types.ts:169](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L169)

___

### name

• **name**: `string`

#### Inherited from

[CommonTaskDef](common.CommonTaskDef.md).[name](common.CommonTaskDef.md#name)

#### Defined in

[src/common/types.ts:4](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L4)

___

### taskReferenceName

• **taskReferenceName**: `string`

#### Inherited from

[CommonTaskDef](common.CommonTaskDef.md).[taskReferenceName](common.CommonTaskDef.md#taskreferencename)

#### Defined in

[src/common/types.ts:5](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L5)

___

### type

• **type**: [`SWITCH`](../enums/common.TaskType.md#switch)

#### Defined in

[src/common/types.ts:170](https://github.com/conductor-sdk/conductor-javascript/blob/dbd8275/src/common/types.ts#L170)
