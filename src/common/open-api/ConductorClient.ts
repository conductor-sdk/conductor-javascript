/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { NodeHttpRequest } from './core/NodeHttpRequest';

import { AdminResourceService } from './services/AdminResourceService';
import { EventResourceService } from './services/EventResourceService';
import { MetadataResourceService } from './services/MetadataResourceService';
import { QueueAdminResourceService } from './services/QueueAdminResourceService';
import { TaskResourceService } from './services/TaskResourceService';
import { WorkflowBulkResourceService } from './services/WorkflowBulkResourceService';
import { WorkflowResourceService } from './services/WorkflowResourceService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class ConductorClient {

  public readonly adminResource: AdminResourceService;
  public readonly eventResource: EventResourceService;
  public readonly metadataResource: MetadataResourceService;
  public readonly queueAdminResource: QueueAdminResourceService;
  public readonly taskResource: TaskResourceService;
  public readonly workflowBulkResource: WorkflowBulkResourceService;
  public readonly workflowResource: WorkflowResourceService;

  public readonly request: BaseHttpRequest;

  constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = NodeHttpRequest) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? 'http://localhost:8080',
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
    this.eventResource = new EventResourceService(this.request);
    this.metadataResource = new MetadataResourceService(this.request);
    this.queueAdminResource = new QueueAdminResourceService(this.request);
    this.taskResource = new TaskResourceService(this.request);
    this.workflowBulkResource = new WorkflowBulkResourceService(this.request);
    this.workflowResource = new WorkflowResourceService(this.request);
  }
}
