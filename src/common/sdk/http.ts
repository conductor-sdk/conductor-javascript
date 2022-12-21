import {
  TaskType,
  HttpTaskDef,
  HttpInputParameters,
} from "../types";

export const httpTask = (
  taskReferenceName: string,
  inputParameters: HttpInputParameters
): HttpTaskDef => ({
  name: taskReferenceName,
  taskReferenceName,
  inputParameters: {
    http_request: inputParameters,
  },
  type: TaskType.HTTP,
});
