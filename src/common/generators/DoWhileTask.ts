import { TaskType, TaskDefTypes, DoWhileTaskDef } from "./types";
import { nameTaskNameGenerator } from "./common";


export const generateDoWhileTask = (
  overrides: Partial<DoWhileTaskDef>
): DoWhileTaskDef => ({
  ...nameTaskNameGenerator("doWhile"),
  inputParameters: {},
  type: TaskType.DO_WHILE,
  decisionCases: {},
  startDelay: 0,
  optional: false,
  asyncComplete: false,
  loopCondition: "",
  loopOver: [],
  ...overrides,
});
