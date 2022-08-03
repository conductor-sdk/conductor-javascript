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
  WaitTaskDef
} from "../types";


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

export type DoWhileTaskDefGen = Omit<DoWhileTaskDef, "loopOver"> & {
  loopOver: Partial<TaskDefTypesGen>[];
};
