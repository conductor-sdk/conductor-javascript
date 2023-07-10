import { TaskType, SwitchTaskDef, TaskDefTypes } from "../../common/types";

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
  inputParameters: {
    switchCaseValue: expression,
  },
  expression: "switchCaseValue",
  defaultCase,
  type: TaskType.SWITCH,
});
