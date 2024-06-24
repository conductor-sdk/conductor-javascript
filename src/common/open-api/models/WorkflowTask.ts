/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CacheConfig } from './CacheConfig';
import type { StateChangeEvent } from './StateChangeEvent';
import type { SubWorkflowParams } from './SubWorkflowParams';
import type { TaskDef } from './TaskDef';
export type WorkflowTask = {
  asyncComplete?: boolean;
  cacheConfig?: CacheConfig;
  /**
   * @deprecated
   */
  caseExpression?: string;
  /**
   * @deprecated
   */
  caseValueParam?: string;
  decisionCases?: Record<string, Array<WorkflowTask>>;
  defaultCase?: Array<WorkflowTask>;
  defaultExclusiveJoinTask?: Array<string>;
  description?: string;
  /**
   * @deprecated
   */
  dynamicForkJoinTasksParam?: string;
  dynamicForkTasksInputParamName?: string;
  dynamicForkTasksParam?: string;
  dynamicTaskNameParam?: string;
  evaluatorType?: string;
  expression?: string;
  forkTasks?: Array<Array<WorkflowTask>>;
  inputParameters?: Record<string, unknown>;
  joinOn?: Array<string>;
  joinStatus?: string;
  loopCondition?: string;
  loopOver?: Array<WorkflowTask>;
  name: string;
  onStateChange?: Record<string, Array<StateChangeEvent>>;
  optional?: boolean;
  rateLimited?: boolean;
  retryCount?: number;
  scriptExpression?: string;
  sink?: string;
  startDelay?: number;
  subWorkflowParam?: SubWorkflowParams;
  taskDefinition?: TaskDef;
  taskReferenceName: string;
  type?: string;
  workflowTaskType?: 'SIMPLE' | 'DYNAMIC' | 'FORK_JOIN' | 'FORK_JOIN_DYNAMIC' | 'DECISION' | 'SWITCH' | 'JOIN' | 'DO_WHILE' | 'SUB_WORKFLOW' | 'START_WORKFLOW' | 'EVENT' | 'WAIT' | 'HUMAN' | 'USER_DEFINED' | 'HTTP' | 'LAMBDA' | 'INLINE' | 'EXCLUSIVE_JOIN' | 'TERMINATE' | 'KAFKA_PUBLISH' | 'JSON_JQ_TRANSFORM' | 'UPDATE_SECRET' | 'UPDATE_TASK' | 'JUMP' | 'SET_VARIABLE';
};

