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
  workflowTaskType?: WorkflowTask.workflowTaskType;
};

export namespace WorkflowTask {

  export enum workflowTaskType {
    SIMPLE = 'SIMPLE',
    DYNAMIC = 'DYNAMIC',
    FORK_JOIN = 'FORK_JOIN',
    FORK_JOIN_DYNAMIC = 'FORK_JOIN_DYNAMIC',
    DECISION = 'DECISION',
    SWITCH = 'SWITCH',
    JOIN = 'JOIN',
    DO_WHILE = 'DO_WHILE',
    SUB_WORKFLOW = 'SUB_WORKFLOW',
    EVENT = 'EVENT',
    WAIT = 'WAIT',
    USER_DEFINED = 'USER_DEFINED',
    HTTP = 'HTTP',
    LAMBDA = 'LAMBDA',
    INLINE = 'INLINE',
    EXCLUSIVE_JOIN = 'EXCLUSIVE_JOIN',
    TERMINATE = 'TERMINATE',
    KAFKA_PUBLISH = 'KAFKA_PUBLISH',
    JSON_JQ_TRANSFORM = 'JSON_JQ_TRANSFORM',
    SET_VARIABLE = 'SET_VARIABLE',
  }


}
