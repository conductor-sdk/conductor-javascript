/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExternalStorageLocation } from '../models/ExternalStorageLocation';
import type { RerunWorkflowRequest } from '../models/RerunWorkflowRequest';
import type { ScrollableSearchResultWorkflowSummary } from '../models/ScrollableSearchResultWorkflowSummary';
import type { SearchResultWorkflow } from '../models/SearchResultWorkflow';
import type { SearchResultWorkflowSummary } from '../models/SearchResultWorkflowSummary';
import type { SkipTaskRequest } from '../models/SkipTaskRequest';
import type { StartWorkflowRequest } from '../models/StartWorkflowRequest';
import type { Workflow } from '../models/Workflow';
import type { WorkflowRun } from '../models/WorkflowRun';
import type { WorkflowStatus } from '../models/WorkflowStatus';
import type { WorkflowTestRequest } from '../models/WorkflowTestRequest';


import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
import {TaskRun} from "../models/TaskRun";
import {ReturnStrategy} from "../../types";
import {
  CircuitBreakerTransitionResponse,
  ProtoRegistryEntry,
  ServiceMethod,
  ServiceRegistry
} from "../models/ServiceRegistryModels";

export class ServiceRegistryResourceService {

  constructor(public readonly httpRequest: BaseHttpRequest) { }

  /**
   * Retrieve all registered services
   * @returns Array<ServiceRegistryModels> List of all registered services
   * @throws ApiError
   */
  public getRegisteredServices(): CancelablePromise<Array<ServiceRegistry>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/registry/service',
    });
  }

  /**
   * Remove a service by name
   * @param name The name of the service to remove
   * @returns void
   * @throws ApiError
   */
  public removeService(name: string): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/registry/service/{name}',
      path: {
        'name': name,
      },
    });
  }

  /**
   * Get a service by name
   * @param name The name of the service to retrieve
   * @returns ServiceRegistryModels The requested service registry
   * @throws ApiError
   */
  public getService(name: string): CancelablePromise<ServiceRegistry> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/registry/service/{name}',
      path: {
        'name': name,
      },
    });
  }

  /**
   * Open the circuit breaker for a service
   * @param name The name of the service
   * @returns CircuitBreakerTransitionResponse Response with circuit breaker status
   * @throws ApiError
   */
  public openCircuitBreaker(name: string): CancelablePromise<CircuitBreakerTransitionResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/registry/service/{name}/circuit-breaker/open',
      path: {
        'name': name,
      },
    });
  }

  /**
   * Close the circuit breaker for a service
   * @param name The name of the service
   * @returns CircuitBreakerTransitionResponse Response with circuit breaker status
   * @throws ApiError
   */
  public closeCircuitBreaker(name: string): CancelablePromise<CircuitBreakerTransitionResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/registry/service/{name}/circuit-breaker/close',
      path: {
        'name': name,
      },
    });
  }

  /**
   * Get circuit breaker status for a service
   * @param name The name of the service
   * @returns CircuitBreakerTransitionResponse Response with circuit breaker status
   * @throws ApiError
   */
  public getCircuitBreakerStatus(name: string): CancelablePromise<CircuitBreakerTransitionResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/registry/service/{name}/circuit-breaker/status',
      path: {
        'name': name,
      },
    });
  }

  /**
   * Add or update a service registry
   * @param serviceRegistry The service registry to add or update
   * @returns void
   * @throws ApiError
   */
  public addOrUpdateService(serviceRegistry: ServiceRegistry): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/registry/service',
      body: serviceRegistry,
      mediaType: 'application/json',
    });
  }

  /**
   * Add or update a service method
   * @param registryName The name of the registry
   * @param method The service method to add or update
   * @returns void
   * @throws ApiError
   */
  public addOrUpdateServiceMethod(registryName: string, method: ServiceMethod): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/registry/service/{registryName}/methods',
      path: {
        'registryName': registryName,
      },
      body: method,
      mediaType: 'application/json',
    });
  }

  /**
   * Remove a service method
   * @param registryName The name of the registry
   * @param serviceName The name of the service
   * @param method The name of the method
   * @param methodType The type of the method
   * @returns void
   * @throws ApiError
   */
  public removeMethod(
      registryName: string,
      serviceName: string,
      method: string,
      methodType: string
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/registry/service/{registryName}/methods',
      path: {
        'registryName': registryName,
      },
      query: {
        'serviceName': serviceName,
        'method': method,
        'methodType': methodType,
      },
    });
  }

  /**
   * Get proto data
   * @param registryName The name of the registry
   * @param filename The name of the proto file
   * @returns binary The proto file data
   * @throws ApiError
   */
  public getProtoData(registryName: string, filename: string): CancelablePromise<Blob> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/registry/service/protos/{registryName}/{filename}',
      path: {
        'registryName': registryName,
        'filename': filename,
      },
      headers: {
        'Accept': 'application/octet-stream'
      }
    });
  }

  /**
   * Set proto data
   * @param registryName The name of the registry
   * @param filename The name of the proto file
   * @param data The proto file data
   * @returns void
   * @throws ApiError
   */
  public setProtoData(registryName: string, filename: string, data: Blob): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/registry/service/protos/{registryName}/{filename}',
      path: {
        'registryName': registryName,
        'filename': filename,
      },
      body: data,
      mediaType: 'application/octet-stream',
    });
  }

  /**
   * Delete a proto file
   * @param registryName The name of the registry
   * @param filename The name of the proto file
   * @returns void
   * @throws ApiError
   */
  public deleteProto(registryName: string, filename: string): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/registry/service/protos/{registryName}/{filename}',
      path: {
        'registryName': registryName,
        'filename': filename,
      },
    });
  }

  /**
   * Get all proto files for a registry
   * @param registryName The name of the registry
   * @returns Array<ProtoRegistryEntry> List of proto registry entries
   * @throws ApiError
   */
  public getAllProtos(registryName: string): CancelablePromise<Array<ProtoRegistryEntry>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/registry/service/protos/{registryName}',
      path: {
        'registryName': registryName,
      },
    });
  }

  /**
   * Discover service methods
   * @param name The name of the service
   * @param create Whether to create the discovered methods (defaults to false)
   * @returns Array<ServiceMethod> The discovered service methods
   * @throws ApiError
   */
  public discover(name: string, create: boolean = false): CancelablePromise<Array<ServiceMethod>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/registry/service/{name}/discover',
      path: {
        'name': name,
      },
      query: {
        'create': create,
      },
    });
  }
}
