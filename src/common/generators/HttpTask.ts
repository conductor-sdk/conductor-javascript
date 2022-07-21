import { CommonTaskDef, TaskType } from "./types";
import { nameTaskNameGenerator } from "./common";

export interface HttpTaskDef extends CommonTaskDef {
  inputParameters: {
    http_request: {
      uri: string;
      method: "GET" | "PUT" | "POST" | "DELETE" | "OPTIONS" | "HEAD";
      accept?: string;
      contentType?: string;
      headers?: Record<string, string>;
      body?: unknown;
      connectionTimeOut?: number;
      readTimeOut?: string;
    };
  };
  type: TaskType.HTTP;
}

export const generateHTTPTask = (
  overrides: Partial<HttpTaskDef>
): HttpTaskDef => ({
  ...nameTaskNameGenerator("terminate"),
  inputParameters: {
    http_request: {
      uri: "https://jsonplaceholder.typicode.com/posts/${workflow.input.queryid}",
      method: "GET",
    },
  },
  type: TaskType.HTTP,
  ...overrides,
});
