import { CommonTaskDef, TaskType } from "./types";
import { nameTaskNameGenerator } from "./common";

export interface KafkaPublishTask extends CommonTaskDef {
  inputParameters: {
    kafka_request: {
      topic: string;
      value: string;
      bootStrapServers: string;
      headers: Record<string, string>;
      key: string;
      keySerializser: string;
    };
  };
  type: TaskType.KAFKA_PUBLISH;
}

export const generateKafkaPublishTask = (
  overrides: Partial<KafkaPublishTask>
): KafkaPublishTask => ({
  ...nameTaskNameGenerator("kafka"),
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
  type: TaskType.KAFKA_PUBLISH,
  ...overrides,
});
