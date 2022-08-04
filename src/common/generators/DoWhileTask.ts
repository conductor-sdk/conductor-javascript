import { TaskType, DoWhileTaskDef } from "../types";
import { DoWhileTaskDefGen, NestedTaskMapper } from "./types";
import { nameTaskNameGenerator } from "./common";


export const generateDoWhileTask = (
  overrides: Partial<DoWhileTaskDefGen> = {},
  nestedTasksMapper: NestedTaskMapper
): DoWhileTaskDef => ({
  ...nameTaskNameGenerator("doWhile", overrides),
  inputParameters: {},
  decisionCases: {},
  startDelay: 0,
  optional: false,
  asyncComplete: false,
  loopCondition:"",
  ...overrides,
  loopOver: nestedTasksMapper(overrides?.loopOver || []),
  type: TaskType.DO_WHILE,
});
