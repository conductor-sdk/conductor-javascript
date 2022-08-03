import { JsonJQTransformTaskDef, TaskType } from "../types";
import { nameTaskNameGenerator } from "./common";

export const generateJQTransformTask = (
  overrides: Partial<JsonJQTransformTaskDef> = {}
): JsonJQTransformTaskDef => ({
  ...nameTaskNameGenerator("jqTransform", overrides),
  inputParameters: {
    key1: {
      value1: ["a", "b"],
    },
    key2: {
      value2: ["c", "d"],
    },
    queryExpression: "{ key3: (.key1.value1 + .key2.value2) }",
  },
  type: TaskType.JSON_JQ_TRANSFORM,
  ...overrides,
});
