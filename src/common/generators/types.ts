import { WorkflowDef as OriginalWorkflowDef } from "../open-api/models/WorkflowDef";

export interface CommonTaskDef {
  name: string;
  taskReferenceName: string;
}

export enum TaskType {
  START = "START",
  SIMPLE = "SIMPLE",
  DYNAMIC = "DYNAMIC",
  FORK_JOIN = "FORK_JOIN",
  FORK_JOIN_DYNAMIC = "FORK_JOIN_DYNAMIC",
  DECISION = "DECISION",
  SWITCH = "SWITCH",
  JOIN = "JOIN",
  DO_WHILE = "DO_WHILE",
  SUB_WORKFLOW = "SUB_WORKFLOW",
  EVENT = "EVENT",
  WAIT = "WAIT",
  USER_DEFINED = "USER_DEFINED",
  HTTP = "HTTP",
  LAMBDA = "LAMBDA",
  INLINE = "INLINE",
  EXCLUSIVE_JOIN = "EXCLUSIVE_JOIN",
  TERMINAL = "TERMINAL",
  TERMINATE = "TERMINATE",
  KAFKA_PUBLISH = "KAFKA_PUBLISH",
  JSON_JQ_TRANSFORM = "JSON_JQ_TRANSFORM",
  SET_VARIABLE = "SET_VARIABLE",
}

export type TaskDefTypes =
  | SimpleTaskDef
  | DoWhileTaskDef
  | EventTaskDef
  | ForkJoinTaskDef
  | ForkJoinDynamicDef
  | HttpTaskDef
  | InlineTaskDef
  | JsonJQTransformTaskDef
  | KafkaPublishTaskDef
  | SetVariableTaskDef
  | SubWokflowTaskDef
  | SwitchTaskDef
  | TerminateTaskDef
  | JoinTaskDef
  | WaitTaskDef;

export interface DoWhileTaskDef extends CommonTaskDef {
  inputParameters: Record<string, string>;
  type: TaskType.DO_WHILE;
  decisionCases: Record<string, TaskDefTypes[]>;
  startDelay: number;
  optional: boolean;
  asyncComplete: boolean;
  loopCondition: string;
  loopOver: TaskDefTypes[];
}

export interface EventTaskDef extends CommonTaskDef {
  type: TaskType.EVENT;
  sink: string;
  asyncComplete: boolean;
}

export interface ForkJoinTaskDef extends CommonTaskDef {
  type: TaskType.FORK_JOIN;
  inputParameters: Record<string, string>;
  forkTasks: Array<Array<TaskDefTypes>>;
}

export interface JoinTaskDef extends CommonTaskDef {
  type: TaskType.JOIN;
  inputParameters: Record<string, string>;
  joinOn: string[];
  optional: boolean;
  asyncComplete: boolean;
}

export interface ForkJoinDynamicDef extends CommonTaskDef {
  inputParameters: {
    dynamicTasks: string;
    dynamicTasksInput: string;
  };
  type: TaskType.FORK_JOIN_DYNAMIC;
  dynamicForkTasksParam: string; // not string "dynamicTasks",
  dynamicForkTasksInputParamName: string; // not string "dynamicTasksInput",
  startDelay: number;
  optional: boolean;
  asyncComplete: boolean;
}

export interface HttpTaskDef extends CommonTaskDef {
  inputParameters: {
    http_request: {
      uri: string;
      method: "GET" | "PUT" | "POST" | "DELETE" | "OPTIONS" | "HEAD";
      accept?: string;
      contentType?: string;
      headers?: Record<string, string>;
      body?: unknown;
      connectionTimeOut?: number;
      readTimeOut?: string;
    };
  };
  type: TaskType.HTTP;
}

export interface InlineTaskDef extends CommonTaskDef {
  type: TaskType.INLINE;
  inputParameters: {
    value: string;
    evaluatorType: "javascript" | "value-param";
    expression: string;
  };
}

interface ContainingQueryExpression {
  queryExpression: string;
  [x: string | number | symbol]: unknown;
}

export interface JsonJQTransformTaskDef extends CommonTaskDef {
  type: TaskType.JSON_JQ_TRANSFORM;
  inputParameters: ContainingQueryExpression;
}

export interface KafkaPublishTaskDef extends CommonTaskDef {
  inputParameters: {
    kafka_request: {
      topic: string;
      value: string;
      bootStrapServers: string;
      headers: Record<string, string>;
      key: string;
      keySerializser: string;
    };
  };
  type: TaskType.KAFKA_PUBLISH;
}

export interface SetVariableTaskDef extends CommonTaskDef {
  type: TaskType.SET_VARIABLE;
  inputParameters: Record<string, string>;
}

export interface SimpleTaskDef extends CommonTaskDef {
  type: TaskType.SIMPLE;
}

export interface SubWokflowTaskDef extends CommonTaskDef {
  type: TaskType.SUB_WORKFLOW;
  subWorkflowParam: {
    name: string;
    version: number;
    taskToDomain: Record<string, string>;
  };
}

export interface SwitchTaskDef extends CommonTaskDef {
  inputParameters: {
    switchCaseValue: string;
  };
  type: TaskType.SWITCH;
  decisionCases: Record<string, TaskDefTypes[]>;
  defaultCase: TaskDefTypes[];
  evaluatorType: string; // TODO this is not string
  expression: string; // TODO this is not string "switchCaseValue"
}

export interface TerminateTaskDef extends CommonTaskDef {
  inputParameters: {
    terminationStatus: string; // TODO it aint string.
    workflowOutput: Record<string, string>;
  };
  type: TaskType.TERMINATE;
  startDelay: number;
  optional: boolean;
}

export interface WaitTaskDef extends CommonTaskDef {
  type: TaskType.WAIT;
}

export type TaskDefTypesGen =
  | SimpleTaskDef
  | DoWhileTaskDefGen
  | EventTaskDef
  | ForkJoinTaskDefGen
  | ForkJoinDynamicDef
  | HttpTaskDef
  | InlineTaskDef
  | JsonJQTransformTaskDef
  | KafkaPublishTaskDef
  | SetVariableTaskDef
  | SubWokflowTaskDef
  | SwitchTaskDefGen
  | TerminateTaskDef
  | JoinTaskDef
  | WaitTaskDef;

export type WorkflowDef = Omit<OriginalWorkflowDef, "tasks"> & {
  tasks: TaskDefTypes[];
};

export type WorkflowDefGen = Omit<OriginalWorkflowDef, "tasks"> & {
  tasks: Partial<TaskDefTypesGen>[];
};

export type ForkJoinTaskDefGen = Omit<ForkJoinTaskDef, "forkTasks"> & {
  forkTasks: Array<Array<Partial<TaskDefTypesGen>>>;
};

export type SwitchTaskDefGen = Omit<
  SwitchTaskDef,
  "decisionCases" | "defaultCase"
> & {
  decisionCases: Record<string, Partial<TaskDefTypesGen>[]>;
  defaultCase: Partial<TaskDefTypesGen>[];
};

export type DoWhileTaskDefGen = Omit<DoWhileTaskDef, "loopOver"> & {
  loopOver: Partial<TaskDefTypesGen>[];
};
