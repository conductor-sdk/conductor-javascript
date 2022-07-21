import { CommonTaskDef, TaskType } from "./types";
import { nameTaskNameGenerator } from "./common";

export interface InlineTaskDef extends CommonTaskDef {
  type: TaskType.INLINE;
  inputParameters: {
    value: string;
    evaluatorType: "javascript" | "value-param";
    expression: string;
  };
}

export const generateInlineTask = (
  override: Partial<InlineTaskDef>
): InlineTaskDef => ({
  ...nameTaskNameGenerator("terminate"),
  type: TaskType.INLINE,
  inputParameters: {
    value: "${workflow.input.value}",
    evaluatorType: "javascript",
    expression: "true",
  },
  ...override
});
