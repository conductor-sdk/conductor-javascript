/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Return strategies for signal API responses
 */
export enum ReturnStrategy {
    TARGET_WORKFLOW = 'TARGET_WORKFLOW',
    BLOCKING_WORKFLOW = 'BLOCKING_WORKFLOW',
    BLOCKING_TASK = 'BLOCKING_TASK',
    BLOCKING_TASK_INPUT = 'BLOCKING_TASK_INPUT'
}