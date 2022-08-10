[@io-orkes/conductor-typescript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / ConductorClient

# Class: ConductorClient

[common](../modules/common.md).ConductorClient

## Table of contents

### Constructors

- [constructor](common.ConductorClient.md#constructor)

### Properties

- [adminResource](common.ConductorClient.md#adminresource)
- [applicationResource](common.ConductorClient.md#applicationresource)
- [authorizationResource](common.ConductorClient.md#authorizationresource)
- [eventResource](common.ConductorClient.md#eventresource)
- [groupResource](common.ConductorClient.md#groupresource)
- [healthCheckResource](common.ConductorClient.md#healthcheckresource)
- [metadataResource](common.ConductorClient.md#metadataresource)
- [migrationResource](common.ConductorClient.md#migrationresource)
- [publisherConfigResource](common.ConductorClient.md#publisherconfigresource)
- [queueAdminResource](common.ConductorClient.md#queueadminresource)
- [request](common.ConductorClient.md#request)
- [schedulerResource](common.ConductorClient.md#schedulerresource)
- [secretResource](common.ConductorClient.md#secretresource)
- [tagsExperimental](common.ConductorClient.md#tagsexperimental)
- [taskResource](common.ConductorClient.md#taskresource)
- [tokenResource](common.ConductorClient.md#tokenresource)
- [userResource](common.ConductorClient.md#userresource)
- [versionResource](common.ConductorClient.md#versionresource)
- [workflowBulkResource](common.ConductorClient.md#workflowbulkresource)
- [workflowResource](common.ConductorClient.md#workflowresource)

## Constructors

### constructor

• **new ConductorClient**(`config?`, `requestHandler?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `config?` | `Partial`<`ConductorClientAPIConfig`\> | `undefined` |
| `requestHandler` | [`ConductorHttpRequest`](../modules/common.md#conductorhttprequest) | `defaultRequestHandler` |

#### Defined in

src/common/open-api/ConductorClient.ts:64

## Properties

### adminResource

• `Readonly` **adminResource**: `AdminResourceService`

#### Defined in

src/common/open-api/ConductorClient.ts:42

___

### applicationResource

• `Readonly` **applicationResource**: `ApplicationResourceService`

#### Defined in

src/common/open-api/ConductorClient.ts:43

___

### authorizationResource

• `Readonly` **authorizationResource**: `AuthorizationResourceService`

#### Defined in

src/common/open-api/ConductorClient.ts:44

___

### eventResource

• `Readonly` **eventResource**: `EventResourceService`

#### Defined in

src/common/open-api/ConductorClient.ts:45

___

### groupResource

• `Readonly` **groupResource**: `GroupResourceService`

#### Defined in

src/common/open-api/ConductorClient.ts:46

___

### healthCheckResource

• `Readonly` **healthCheckResource**: `HealthCheckResourceService`

#### Defined in

src/common/open-api/ConductorClient.ts:47

___

### metadataResource

• `Readonly` **metadataResource**: `MetadataResourceService`

#### Defined in

src/common/open-api/ConductorClient.ts:48

___

### migrationResource

• `Readonly` **migrationResource**: `MigrationResourceService`

#### Defined in

src/common/open-api/ConductorClient.ts:49

___

### publisherConfigResource

• `Readonly` **publisherConfigResource**: `PublisherConfigResourceService`

#### Defined in

src/common/open-api/ConductorClient.ts:50

___

### queueAdminResource

• `Readonly` **queueAdminResource**: `QueueAdminResourceService`

#### Defined in

src/common/open-api/ConductorClient.ts:51

___

### request

• `Readonly` **request**: `BaseHttpRequest`

#### Defined in

src/common/open-api/ConductorClient.ts:62

___

### schedulerResource

• `Readonly` **schedulerResource**: `SchedulerResourceService`

#### Defined in

src/common/open-api/ConductorClient.ts:52

___

### secretResource

• `Readonly` **secretResource**: `SecretResourceService`

#### Defined in

src/common/open-api/ConductorClient.ts:53

___

### tagsExperimental

• `Readonly` **tagsExperimental**: `TagsExperimentalService`

#### Defined in

src/common/open-api/ConductorClient.ts:54

___

### taskResource

• `Readonly` **taskResource**: `TaskResourceService`

#### Defined in

src/common/open-api/ConductorClient.ts:55

___

### tokenResource

• `Readonly` **tokenResource**: `TokenResourceService`

#### Defined in

src/common/open-api/ConductorClient.ts:56

___

### userResource

• `Readonly` **userResource**: `UserResourceService`

#### Defined in

src/common/open-api/ConductorClient.ts:57

___

### versionResource

• `Readonly` **versionResource**: `VersionResourceService`

#### Defined in

src/common/open-api/ConductorClient.ts:58

___

### workflowBulkResource

• `Readonly` **workflowBulkResource**: `WorkflowBulkResourceService`

#### Defined in

src/common/open-api/ConductorClient.ts:59

___

### workflowResource

• `Readonly` **workflowResource**: `WorkflowResourceService`

#### Defined in

src/common/open-api/ConductorClient.ts:60
