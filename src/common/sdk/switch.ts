import { TaskType, SwitchTaskDef, TaskDefTypes } from "../types";

export const switchTask = (
  taskReferenceName: string,
  decisionCases: Record<string, TaskDefTypes[]> = {},
  defaultCase: TaskDefTypes[] = [],
): SwitchTaskDef => ({
  name: taskReferenceName,
  taskReferenceName,
  decisionCases,
  evaluatorType:"javascript",
  inputParameters:{},
  expression: "",
  defaultCase,
  type: TaskType.SWITCH,
});
