/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubWorkflowParams } from './SubWorkflowParams';
import type { TaskDef } from './TaskDef';

export type WorkflowTask = {
  name: string;
  taskReferenceName: string;
  description?: string;
  inputParameters?: Record<string, any>;
  type?: string;
  dynamicTaskNameParam?: string;
  caseValueParam?: string;
  caseExpression?: string;
  scriptExpression?: string;
  decisionCases?: Record<string, Array<WorkflowTask>>;
  dynamicForkJoinTasksParam?: string;
  dynamicForkTasksParam?: string;
  dynamicForkTasksInputParamName?: string;
  defaultCase?: Array<WorkflowTask>;
  forkTasks?: Array<Array<WorkflowTask>>;
  startDelay?: number;
  subWorkflowParam?: SubWorkflowParams;
  joinOn?: Array<string>;
  sink?: string;
  optional?: boolean;
  taskDefinition?: TaskDef;
  rateLimited?: boolean;
  defaultExclusiveJoinTask?: Array<string>;
  asyncComplete?: boolean;
  loopCondition?: string;
  loopOver?: Array<WorkflowTask>;
  retryCount?: number;
  evaluatorType?: string;
  expression?: string;
  workflowTaskType?: 'SIMPLE' | 'DYNAMIC' | 'FORK_JOIN' | 'FORK_JOIN_DYNAMIC' | 'DECISION' | 'SWITCH' | 'JOIN' | 'DO_WHILE' | 'SUB_WORKFLOW' | 'START_WORKFLOW' | 'EVENT' | 'WAIT' | 'USER_DEFINED' | 'HTTP' | 'LAMBDA' | 'INLINE' | 'EXCLUSIVE_JOIN' | 'TERMINATE' | 'KAFKA_PUBLISH' | 'JSON_JQ_TRANSFORM' | 'SET_VARIABLE';
};
