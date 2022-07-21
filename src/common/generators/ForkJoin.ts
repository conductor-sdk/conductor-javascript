import { WorkflowTask } from "../open-api/models/WorkflowTask";
import { CommonTaskDef, TaskType } from "./types";
import { nameTaskNameGenerator } from "./common";

export interface ForkJoinTaskDef extends CommonTaskDef {
  type: TaskType.FORK_JOIN;
  inputParameters: Record<string, string>;
  forkTasks: Array<Array<WorkflowTask>>;
}

export interface JoinTaskDef extends CommonTaskDef {
  type: TaskType.JOIN;
  inputParameters: Record<string, string>;
  joinOn: string[];
  optional: boolean;
  asyncComplete: boolean;
}

export const generateForkJoinTask = (
  overrides: Partial<ForkJoinTaskDef>
): ForkJoinTaskDef => ({
  ...nameTaskNameGenerator("forkJoin"),
  inputParameters: {},
  forkTasks: [[]],
  type: TaskType.FORK_JOIN,
  ...overrides,
});

export const generateJoinTask = (
  overrides: Partial<JoinTaskDef>
): JoinTaskDef => ({
  ...nameTaskNameGenerator("join"),
  type: TaskType.JOIN,
  inputParameters: {},
  joinOn: [],
  optional: false,
  asyncComplete: false,
  ...overrides,
});
