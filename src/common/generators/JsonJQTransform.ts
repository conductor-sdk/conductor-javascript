import { CommonTaskDef, TaskType } from "./types";
import { nameTaskNameGenerator } from "./common";

interface ContainingQueryExpression {
  queryExpression: string;
  [x: string | number | symbol]: unknown;
}

export interface JsonJQTransformTaskDef extends CommonTaskDef {
  type: TaskType.JSON_JQ_TRANSFORM;
  inputParameters: ContainingQueryExpression;
}

export const generateJQTransformTask = (
  overrides: Partial<JsonJQTransformTaskDef>
): JsonJQTransformTaskDef => ({
  ...nameTaskNameGenerator("jqTransform"),
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
