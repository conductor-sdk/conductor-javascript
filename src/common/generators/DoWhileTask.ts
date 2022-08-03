import { TaskType, DoWhileTaskDef } from "../types";
import { nameTaskNameGenerator } from "./common";

export const generateDoWhileTask = (
  overrides: Partial<DoWhileTaskDef> = {}
): DoWhileTaskDef => ({
  ...nameTaskNameGenerator("doWhile", overrides),
  inputParameters: {},
  decisionCases: {},
  startDelay: 0,
  optional: false,
  asyncComplete: false,
  loopCondition: "",
  loopOver: [],
  ...overrides,
  type: TaskType.DO_WHILE,
});
