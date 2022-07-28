import { ForkJoinTaskDef, JoinTaskDef, TaskType } from "./types";
import { nameTaskNameGenerator } from "./common";

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
