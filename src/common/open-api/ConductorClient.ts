/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { NodeHttpRequest } from './core/NodeHttpRequest';

import { AdminResourceService } from './services/AdminResourceService';
import { ApplicationResourceService } from './services/ApplicationResourceService';
import { AuthorizationResourceService } from './services/AuthorizationResourceService';
import { EventResourceService } from './services/EventResourceService';
import { GroupResourceService } from './services/GroupResourceService';
import { HealthCheckResourceService } from './services/HealthCheckResourceService';
import { MetadataResourceService } from './services/MetadataResourceService';
import { MigrationResourceService } from './services/MigrationResourceService';
import { QueueAdminResourceService } from './services/QueueAdminResourceService';
import { SchedulerResourceService } from './services/SchedulerResourceService';
import { TaskResourceService } from './services/TaskResourceService';
import { TokenResourceService } from './services/TokenResourceService';
import { UserResourceService } from './services/UserResourceService';
import { WorkflowBulkResourceService } from './services/WorkflowBulkResourceService';
import { WorkflowResourceService } from './services/WorkflowResourceService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class ConductorClient {

  public readonly adminResource: AdminResourceService;
  public readonly applicationResource: ApplicationResourceService;
  public readonly authorizationResource: AuthorizationResourceService;
  public readonly eventResource: EventResourceService;
  public readonly groupResource: GroupResourceService;
  public readonly healthCheckResource: HealthCheckResourceService;
  public readonly metadataResource: MetadataResourceService;
  public readonly migrationResource: MigrationResourceService;
  public readonly queueAdminResource: QueueAdminResourceService;
  public readonly schedulerResource: SchedulerResourceService;
  public readonly taskResource: TaskResourceService;
  public readonly tokenResource: TokenResourceService;
  public readonly userResource: UserResourceService;
  public readonly workflowBulkResource: WorkflowBulkResourceService;
  public readonly workflowResource: WorkflowResourceService;

  public readonly request: BaseHttpRequest;

  constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = NodeHttpRequest) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? 'https://play.orkes.io',
      VERSION: config?.VERSION ?? '0',
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? 'include',
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
      AGENT: config?.AGENT // conductor-client-modification
    });

    this.adminResource = new AdminResourceService(this.request);
    this.applicationResource = new ApplicationResourceService(this.request);
    this.authorizationResource = new AuthorizationResourceService(this.request);
    this.eventResource = new EventResourceService(this.request);
    this.groupResource = new GroupResourceService(this.request);
    this.healthCheckResource = new HealthCheckResourceService(this.request);
    this.metadataResource = new MetadataResourceService(this.request);
    this.migrationResource = new MigrationResourceService(this.request);
    this.queueAdminResource = new QueueAdminResourceService(this.request);
    this.schedulerResource = new SchedulerResourceService(this.request);
    this.taskResource = new TaskResourceService(this.request);
    this.tokenResource = new TokenResourceService(this.request);
    this.userResource = new UserResourceService(this.request);
    this.workflowBulkResource = new WorkflowBulkResourceService(this.request);
    this.workflowResource = new WorkflowResourceService(this.request);
  }
}
