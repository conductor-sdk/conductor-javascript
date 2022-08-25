import { ForkJoinTaskDef, JoinTaskDef, TaskType } from "../types";
import { nameTaskNameGenerator } from "./common";
import { ForkJoinTaskDefGen, NestedTaskMapper } from "./types";

export const generateForkJoinTask = (
  overrides: Partial<ForkJoinTaskDefGen> = {},
  nestedMapper: NestedTaskMapper
): ForkJoinTaskDef => ({
  ...nameTaskNameGenerator("forkJoin", overrides),
  inputParameters: {},
  ...overrides,
  type: TaskType.FORK_JOIN,
  forkTasks: (overrides?.forkTasks || []).map(nestedMapper),
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
