import { SwitchTaskDef, TaskType } from "../types";
import { nameTaskNameGenerator } from "./common";

export const generateSwitchTask = (
  overrides: Partial<SwitchTaskDef> = {}
): SwitchTaskDef => ({
  ...nameTaskNameGenerator("switch", overrides),
  inputParameters: {
    switchCaseValue: "",
  },
  type: TaskType.SWITCH,
  decisionCases: {},
  defaultCase: [],
  evaluatorType: "value-param",
  expression: "switchCaseValue",
  ...overrides,
});
