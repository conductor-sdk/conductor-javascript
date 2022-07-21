import { CommonTaskDef, TaskType } from "./types";
import { nameTaskNameGenerator } from "./common";

export interface ForkJoinDynamic extends CommonTaskDef {
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

export const generateForkJoinDynamic = (
  overrides: Partial<ForkJoinDynamic>
): ForkJoinDynamic => ({
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
