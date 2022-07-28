import { SetVariableTaskDef, TaskType } from "./types";
import { nameTaskNameGenerator } from "./common";


export const generateSetVariableTask = (
  overrides: Partial<SetVariableTaskDef>
): SetVariableTaskDef => ({
  ...nameTaskNameGenerator("setVariable"),
  inputParameters: {},
  type: TaskType.SET_VARIABLE,
  ...overrides
});
