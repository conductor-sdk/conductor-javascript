import { InlineTaskDef, TaskType } from "./types";
import { nameTaskNameGenerator } from "./common";

export const generateInlineTask = (
  override: Partial<InlineTaskDef> = {}
): InlineTaskDef => ({
  ...nameTaskNameGenerator("terminate", override),
  type: TaskType.INLINE,
  inputParameters: {
    value: "${workflow.input.value}",
    evaluatorType: "javascript",
    expression: "true",
  },
  ...override,
});
