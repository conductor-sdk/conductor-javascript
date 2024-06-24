/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Option } from './Option';
export type IntegrationDefFormField = {
  defaultValue?: string;
  description?: string;
  fieldName?: 'api_key' | 'user' | 'endpoint' | 'environment' | 'projectName' | 'indexName' | 'publisher' | 'password' | 'namespace' | 'batchSize' | 'batchWaitTime' | 'visibilityTimeout' | 'connectionType' | 'region' | 'awsAccountId' | 'externalId' | 'roleArn' | 'protocol' | 'mechanism' | 'port' | 'schemaRegistryUrl' | 'schemaRegistryApiKey' | 'schemaRegistryApiSecret' | 'authenticationType' | 'tls' | 'cipherSuite' | 'pubSubMethod' | 'keyStorePassword' | 'keyStoreLocation' | 'schemaRegistryAuthType' | 'valueSubjectNameStrategy' | 'datasourceURL' | 'jdbcDriver' | 'subscription' | 'serviceAccountCredentials' | 'file' | 'queueManager' | 'groupId' | 'channel' | 'dimensions' | 'distance_metric' | 'indexing_method' | 'inverted_list_count';
  fieldType?: 'DROPDOWN' | 'TEXT' | 'PASSWORD' | 'FILE';
  label?: string;
  optional?: boolean;
  value?: string;
  valueOptions?: Array<Option>;
};

