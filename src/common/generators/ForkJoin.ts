import { ForkJoinTaskDef, JoinTaskDef, TaskType } from "../types";
import { nameTaskNameGenerator } from "./common";

export const generateForkJoinTask = (
  overrides: Partial<ForkJoinTaskDef> = {}
): ForkJoinTaskDef => ({
  ...nameTaskNameGenerator("forkJoin", overrides),
  inputParameters: {},
  forkTasks: [[]],
  type: TaskType.FORK_JOIN,
  ...overrides,
});

export const generateJoinTask = (
  overrides: Partial<JoinTaskDef> = {}
): JoinTaskDef => ({
  ...nameTaskNameGenerator("join", overrides),
  inputParameters: {},
  joinOn: [],
  optional: false,
  asyncComplete: false,
  ...overrides,
  type: TaskType.JOIN,
});
