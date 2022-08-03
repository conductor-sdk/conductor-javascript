import { EventTaskDef, TaskType } from "../types";
import { nameTaskNameGenerator } from "./common";

export const generateEventTask = (
  overrides: Partial<EventTaskDef> = {}
): EventTaskDef => ({
  ...nameTaskNameGenerator("event", overrides),
  sink: "sqs:sqs_queue_name",
  asyncComplete: false,
  ...overrides,
  type: TaskType.EVENT,
});
