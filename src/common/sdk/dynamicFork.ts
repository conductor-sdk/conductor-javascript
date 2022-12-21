import { TaskType, ForkJoinDynamicDef, TaskDefTypes } from "../types";

export const dynamicForkTask = (
  taskReferenceName: string,
  preForkTasks: TaskDefTypes[] = []
): ForkJoinDynamicDef => ({
  name: taskReferenceName,
  taskReferenceName,
  inputParameters: {
    dynamicTasks: preForkTasks,
    dynamicTasksInput: "",
  },
  type: TaskType.FORK_JOIN_DYNAMIC,
  dynamicForkTasksParam: "dynamicTasks",
  dynamicForkTasksInputParamName: "dynamicTasksInput",
});
