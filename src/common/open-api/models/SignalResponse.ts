/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Task } from './Task';
import type { Workflow } from './Workflow';

/**
 * SignalResponse represents a unified response from the signal API
 */
export class SignalResponse {
    // ========== COMMON FIELDS IN ALL RESPONSES ==========

    /** Type of response based on return strategy */
    responseType?: string;

    /** ID of the target workflow */
    targetWorkflowId?: string;

    /** Status of the target workflow */
    targetWorkflowStatus?: string;

    /** ID of the workflow */
    workflowId?: string;

    /** Input data for the workflow/task */
    input?: Record<string, any>;

    /** Output data from the workflow/task */
    output?: Record<string, any>;

    /** Priority of the workflow */
    priority?: number;

    /** Workflow variables */
    variables?: Record<string, any>;

    // ========== FIELDS SPECIFIC TO TARGET_WORKFLOW & BLOCKING_WORKFLOW ==========

    /** Array of tasks in the workflow */
    tasks?: Array<Task>;

    /** User who created the workflow */
    createdBy?: string;

    /** Timestamp when workflow was created */
    createTime?: number;

    /** Current status of the workflow */
    status?: string;

    /** Timestamp when workflow was last updated */
    updateTime?: number;

    // ========== FIELDS SPECIFIC TO BLOCKING_TASK & BLOCKING_TASK_INPUT ==========

    /** Type of the blocking task */
    taskType?: string;

    /** ID of the blocking task */
    taskId?: string;

    /** Reference name of the blocking task */
    referenceTaskName?: string;

    /** Number of retries for the task */
    retryCount?: number;

    /** Definition name of the task */
    taskDefName?: string;

    /** Type of the workflow containing the task */
    workflowType?: string;

    // ========== CHECK METHODS ==========

    /**
     * Returns true if the response contains target workflow details
     */
    isTargetWorkflow(): boolean {
        return this.responseType === 'TARGET_WORKFLOW';
    }

    /**
     * Returns true if the response contains blocking workflow details
     */
    isBlockingWorkflow(): boolean {
        return this.responseType === 'BLOCKING_WORKFLOW';
    }

    /**
     * Returns true if the response contains blocking task details
     */
    isBlockingTask(): boolean {
        return this.responseType === 'BLOCKING_TASK';
    }

    /**
     * Returns true if the response contains blocking task input
     */
    isBlockingTaskInput(): boolean {
        return this.responseType === 'BLOCKING_TASK_INPUT';
    }

    // ========== EXTRACTION METHODS ==========

    /**
     * Extracts workflow details from a SignalResponse
     * @throws Error if the response type doesn't contain workflow details
     */
    getWorkflow(): Workflow {
        if (!this.isTargetWorkflow() && !this.isBlockingWorkflow()) {
            throw new Error(
                `Response type ${this.responseType} does not contain workflow details`
            );
        }

        return {
            workflowId: this.workflowId!,
            status: this.status!,
            tasks: this.tasks || [],
            createdBy: this.createdBy,
            createTime: this.createTime,
            updateTime: this.updateTime,
            input: this.input || {},
            output: this.output || {},
            variables: this.variables || {},
            priority: this.priority
        } as Workflow;
    }

    /**
     * Extracts task details from a SignalResponse
     * @throws Error if the response type doesn't contain task details
     */
    getBlockingTask(): Task {
        if (!this.isBlockingTask() && !this.isBlockingTaskInput()) {
            throw new Error(
                `Response type ${this.responseType} does not contain task details`
            );
        }

        return {
            taskId: this.taskId!,
            taskType: this.taskType!,
            taskDefName: this.taskDefName!,
            referenceTaskName: this.referenceTaskName!,
            retryCount: this.retryCount || 0,
            status: this.status,
            inputData: this.input || {},
            outputData: this.output || {},
            workflowInstanceId: this.workflowId!,
            workflowType: this.workflowType!
        } as Task;
    }

    /**
     * Extracts task input from a SignalResponse
     * Only valid for BLOCKING_TASK_INPUT responses
     * @throws Error if the response type doesn't contain task input details
     */
    getTaskInput(): Record<string, any> {
        if (!this.isBlockingTaskInput()) {
            throw new Error(
                `Response type ${this.responseType} does not contain task input details`
            );
        }

        return this.input || {};
    }

    // ========== UTILITY METHODS ==========

    /**
     * Get the workflow ID from the response
     */
    getWorkflowId(): string {
        return this.workflowId || this.targetWorkflowId || '';
    }

    /**
     * Get the target workflow ID from the response
     */
    getTargetWorkflowId(): string {
        return this.targetWorkflowId || this.workflowId || '';
    }

    /**
     * Check if the response has workflow data
     */
    hasWorkflowData(): boolean {
        return this.isTargetWorkflow() || this.isBlockingWorkflow();
    }

    /**
     * Check if the response has task data
     */
    hasTaskData(): boolean {
        return this.isBlockingTask() || this.isBlockingTaskInput();
    }

    /**
     * Get response type as string
     */
    getResponseType(): string {
        return this.responseType || '';
    }

    /**
     * Check if the workflow/task is in a terminal state
     */
    isTerminal(): boolean {
        const terminalStates = ['COMPLETED', 'FAILED', 'TERMINATED', 'TIMED_OUT'];
        return terminalStates.includes(this.status || '');
    }

    /**
     * Check if the workflow/task is currently running
     */
    isRunning(): boolean {
        return this.status === 'RUNNING';
    }

    /**
     * Check if the workflow/task is paused
     */
    isPaused(): boolean {
        return this.status === 'PAUSED';
    }

    /**
     * Get a summary of the response for logging
     */
    getSummary(): string {
        const parts = [
            `type=${this.responseType}`,
            `workflowId=${this.workflowId}`,
            `status=${this.status}`
        ];

        if (this.hasTaskData()) {
            parts.push(`taskId=${this.taskId}`);
            parts.push(`taskType=${this.taskType}`);
        }

        if (this.hasWorkflowData() && this.tasks) {
            parts.push(`tasksCount=${this.tasks.length}`);
        }

        return `SignalResponse{${parts.join(', ')}}`;
    }

    /**
     * Convert to JSON for debugging (excludes large objects)
     */
    toDebugJSON(): Record<string, any> {
        return {
            responseType: this.responseType,
            workflowId: this.workflowId,
            targetWorkflowId: this.targetWorkflowId,
            targetWorkflowStatus: this.targetWorkflowStatus,
            status: this.status,
            taskId: this.taskId,
            taskType: this.taskType,
            referenceTaskName: this.referenceTaskName,
            createTime: this.createTime,
            updateTime: this.updateTime,
            priority: this.priority,
            retryCount: this.retryCount,
            tasksCount: this.tasks?.length,
            hasInput: Boolean(this.input && Object.keys(this.input).length > 0),
            hasOutput: Boolean(this.output && Object.keys(this.output).length > 0),
            hasVariables: Boolean(this.variables && Object.keys(this.variables).length > 0)
        };
    }

    /**
     * String representation for debugging
     */
    toString(): string {
        return this.getSummary();
    }
}