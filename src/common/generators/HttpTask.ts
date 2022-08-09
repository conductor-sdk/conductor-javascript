import { HttpTaskDef, TaskType } from "../types";
import { nameTaskNameGenerator } from "./common";

export const generateHTTPTask = (
  overrides: Partial<HttpTaskDef> = {}
): HttpTaskDef => ({
  ...nameTaskNameGenerator("httpTask", overrides),
  inputParameters: {
    http_request: {
      uri: "https://jsonplaceholder.typicode.com/posts/${workflow.input.queryid}",
      method: "GET",
    },
  },
  ...overrides,
  type: TaskType.HTTP,
});
