import { ForkJoinDynamicDef, TaskType } from "./types";
import { nameTaskNameGenerator } from "./common";


export const generateForkJoinDynamic = (
  overrides: Partial<ForkJoinDynamicDef>
): ForkJoinDynamicDef => ({
  ...nameTaskNameGenerator("forkJoinDynamic"),
  inputParameters: {
    dynamicTasks: "",
    dynamicTasksInput: "",
  },
  type: TaskType.FORK_JOIN_DYNAMIC,
  dynamicForkTasksParam: "dynamicTasks",
  dynamicForkTasksInputParamName: "dynamicTasksInput",
  startDelay: 0,
  optional: false,
  asyncComplete: false,
  ...overrides,
});
