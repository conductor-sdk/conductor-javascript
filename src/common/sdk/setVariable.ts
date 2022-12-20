import { TaskType, SetVariableTaskDef, TaskDefTypes } from "../types";

export const setVariableTask = (
  taskReferenceName: string,
  inputParameters: Record<string, unknown>
): SetVariableTaskDef => ({
  name: taskReferenceName,
  taskReferenceName,
  type: TaskType.SET_VARIABLE,
  inputParameters,
});
