import { TaskType, JsonJQTransformTaskDef } from "../../common/types";

export const jsonJqTask = (
  taskReferenceName: string,
  script: string
): JsonJQTransformTaskDef => ({
  name: taskReferenceName,
  taskReferenceName,
  type: TaskType.JSON_JQ_TRANSFORM,
  inputParameters: {
    queryExpression: script,
  },
});
