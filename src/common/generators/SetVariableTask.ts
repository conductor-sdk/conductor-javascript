import { CommonTaskDef, TaskType } from "./types";
import { nameTaskNameGenerator } from "./common";

export interface SetVariableTask extends CommonTaskDef {
  type: TaskType.SET_VARIABLE;
  inputParameters: Record<string, string>;
}

export const generateSetVariableTask = (
  overrides: Partial<SetVariableTask>
): SetVariableTask => ({
  ...nameTaskNameGenerator("setVariable"),
  inputParameters: {},
  type: TaskType.SET_VARIABLE,
  ...overrides
});
