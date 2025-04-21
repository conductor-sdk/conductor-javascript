/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export interface SignalResponse {
    responseType?: string;
    targetWorkflowId?: string;
    targetWorkflowStatus?: string;
    requestId?: string;
    workflowId?: string;
    correlationId?: string;
    input?: Record<string, any>;
    output?: Record<string, any>;
}
