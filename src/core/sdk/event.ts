import { TaskType, EventTaskDef } from "../../common/types";

export const eventTask = (
  taskReferenceName: string,
  eventPrefix: string,
  eventSuffix: string
): EventTaskDef => ({
  name: taskReferenceName,
  taskReferenceName,
  sink: `${eventPrefix}:${eventSuffix}`,
  type: TaskType.EVENT,
});

export const sqsEventTask = (taskReferenceName: string, queueName: string) =>
  eventTask(taskReferenceName, "sqs", queueName);

export const conductorEventTask = (
  taskReferenceName: string,
  eventName: string
) => eventTask(taskReferenceName, "conductor", eventName);
