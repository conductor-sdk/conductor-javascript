/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

// Service Registry Type enum
export enum ServiceType {
    HTTP = 'HTTP',
    gRPC = 'gRPC'
}

// Request Parameter Schema interface
export interface RequestParamSchema {
    type: string;
    format?: string;
    defaultValue?: any;
}

// Request Parameter interface
export interface RequestParam {
    name: string;
    type: string; // Query, Header, Path, etc.
    required: boolean;
    schema?: RequestParamSchema;
}

// Service Method interface
export interface ServiceMethod {
    id?: number;
    operationName: string;
    methodName: string;
    methodType: string; // GET, PUT, POST, UNARY, SERVER_STREAMING etc.
    inputType: string;
    outputType: string;
    requestParams?: RequestParam[];
    exampleInput?: Record<string, any>; // Sample input request
}

// Circuit Breaker Configuration interface
export interface OrkesCircuitBreakerConfig {
    failureRateThreshold?: number; // Percentage (e.g., 50.0 for 50%)
    slidingWindowSize?: number;
    minimumNumberOfCalls?: number;
    waitDurationInOpenState?: number; // In millisec
    permittedNumberOfCallsInHalfOpenState?: number;
    slowCallRateThreshold?: number; // Percentage of slow calls
    slowCallDurationThreshold?: number; // Defines "slow" call duration in milliSec
    automaticTransitionFromOpenToHalfOpenEnabled?: boolean; // Auto transition
    maxWaitDurationInHalfOpenState?: number; // Max time in HALF-OPEN state
}

// Service Registry Configuration interface
export interface ServiceRegistryConfig {
    circuitBreakerConfig?: OrkesCircuitBreakerConfig;
}

// Service Registry interface
export interface ServiceRegistry {
    name: string;
    type: ServiceType;
    serviceURI: string;
    methods?: ServiceMethod[];
    requestParams?: RequestParam[];
    config?: ServiceRegistryConfig;
}

// Circuit Breaker Transition Response interface
export interface CircuitBreakerTransitionResponse {
    service: string;
    previousState: string;
    currentState: string;
    transitionTimestamp: number;
    message: string;
}

// Proto Registry Entry interface
export interface ProtoRegistryEntry {
    filename: string;
    lastUpdated: number;
}