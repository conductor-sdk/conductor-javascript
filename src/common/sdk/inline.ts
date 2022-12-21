import { TaskType, InlineTaskDef } from "../types";

export const inlineTask = (
  taskReferenceName: string,
  script: string,
  evaluatorType: "javascript" | "graaljs" = "javascript"
): InlineTaskDef => ({
  name: taskReferenceName,
  taskReferenceName,
  inputParameters: {
    evaluatorType,
    expression: script,
  },
  type: TaskType.INLINE,
});
