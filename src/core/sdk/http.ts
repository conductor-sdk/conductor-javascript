import {
  TaskType,
  HttpTaskDef,
  HttpInputParameters,
} from "../../common/types";

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
