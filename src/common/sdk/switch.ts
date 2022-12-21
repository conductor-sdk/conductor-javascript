import { TaskType, SwitchTaskDef, TaskDefTypes } from "../types";

export const switchTask = (
  taskReferenceName: string,
  expression: string,
  decisionCases: Record<string, TaskDefTypes[]> = {},
  defaultCase: TaskDefTypes[] = []
): SwitchTaskDef => ({
  name: taskReferenceName,
  taskReferenceName,
  decisionCases,
  evaluatorType: "value-param",
  inputParameters: {},
  expression,
  defaultCase,
  type: TaskType.SWITCH,
});
