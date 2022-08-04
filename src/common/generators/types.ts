import {
  WorkflowDef,
  ForkJoinTaskDef,
  SwitchTaskDef,
  DoWhileTaskDef,
  SimpleTaskDef,
  EventTaskDef,
  ForkJoinDynamicDef,
  HttpTaskDef,
  InlineTaskDef,
  JsonJQTransformTaskDef,
  KafkaPublishTaskDef,
  SetVariableTaskDef,
  SubWokflowTaskDef,
  TerminateTaskDef,
  JoinTaskDef,
  WaitTaskDef,
  InlineEvaluatorType,
  TaskDefTypes,
} from "../types";

export type TaskDefTypesGen =
  | SimpleTaskDef
  | DoWhileTaskDefGen
  | EventTaskDef
  | ForkJoinTaskDefGen
  | ForkJoinDynamicDef
  | HttpTaskDef
  | InlineTaskDefGen
  | JsonJQTransformTaskDef
  | KafkaPublishTaskDef
  | SetVariableTaskDef
  | SubWokflowTaskDef
  | SwitchTaskDefGen
  | TerminateTaskDef
  | JoinTaskDef
  | WaitTaskDef;

export interface WorkflowDefGen extends Omit<WorkflowDef, "tasks"> {
  tasks: Partial<TaskDefTypesGen>[];
}

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

export type DoWhileTaskDefGen = Omit<
  DoWhileTaskDef,
  "loopOver" 
> & {
  loopOver: Partial<TaskDefTypesGen>[];
};


export interface InlineInputParametersJavascript {
  expression: string | Function;
  evaluatorType: InlineEvaluatorType.JAVASCRIPT;
  [x: string]: unknown;
}

export interface InlineInputParametersValueParam {
  [x: string]: string;
  evaluatorType: InlineEvaluatorType.VALUE_PARAM;
  expression: string;
}

export interface InlineTaskDefGen extends Omit<InlineTaskDef,"inputParameters"> {
  inputParameters:
    | InlineInputParametersJavascript
    | InlineInputParametersValueParam;
}

export type NestedTaskMapper = { (tasks: Partial<TaskDefTypesGen>[]): TaskDefTypes[] }