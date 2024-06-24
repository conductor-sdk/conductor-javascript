/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Tag } from './Tag';
import type { WebhookExecutionHistory } from './WebhookExecutionHistory';
export type WebhookConfig = {
  createdBy?: string;
  headerKey?: string;
  headers?: Record<string, string>;
  id?: string;
  name?: string;
  receiverWorkflowNamesToVersions?: Record<string, number>;
  secretKey?: string;
  secretValue?: string;
  sourcePlatform?: string;
  tags?: Array<Tag>;
  urlVerified?: boolean;
  verifier?: 'SLACK_BASED' | 'SIGNATURE_BASED' | 'HEADER_BASED' | 'STRIPE' | 'TWITTER' | 'HMAC_BASED' | 'SENDGRID';
  webhookExecutionHistory?: Array<WebhookExecutionHistory>;
  workflowsToStart?: Record<string, Record<string, any>>;
};

