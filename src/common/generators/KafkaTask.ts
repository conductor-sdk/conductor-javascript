import { KafkaPublishTaskDef, TaskType } from "../types";
import { nameTaskNameGenerator } from "./common";

export const generateKafkaPublishTask = (
  overrides: Partial<KafkaPublishTaskDef> = {}
): KafkaPublishTaskDef => ({
  ...nameTaskNameGenerator("kafka", overrides),
  inputParameters: {
    kafka_request: {
      topic: "topic",
      value: "",
      bootStrapServers: "localhost:9092",
      headers: {},
      key: "123",
      keySerializser: "org.apache.kafka.common.serialization.IntegerSerializer",
    },
  },
  ...overrides,
  type: TaskType.KAFKA_PUBLISH,
});
