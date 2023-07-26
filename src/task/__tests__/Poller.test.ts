import { Poller } from "../Poller";
import { expect, describe, test, jest } from "@jest/globals";

type Task = { description: string; id: number };

const fakeTaskGenerator = (count: number): Promise<Task[]> =>
  Promise.resolve(
    Array.from({ length: count }, (_, i) => ({
      description: `task${i}`,
      id: i,
    }))
  );
const BASE_TIME = 100;

describe("Poller", () => {
  test("Should run the poll function once for each interval if concurrency is just one", async () => {
    const mockPoller: (count: number) => Promise<Task[]> =
      jest.fn(fakeTaskGenerator);

    const mockPerformWorkFunction: (work: Task) => Promise<void> = jest.fn(
      () => Promise.resolve()
    );

    const poller = new Poller<Task>(mockPoller, mockPerformWorkFunction, {
      concurrency: 1,
      pollInterval: BASE_TIME,
    });

    poller.startPolling();

    await new Promise((r) => setTimeout(() => r(true), BASE_TIME));

    // Concurrency is one so work only for one
    expect(mockPerformWorkFunction).toBeCalledTimes(1);

    // Work for the first task
    expect(mockPerformWorkFunction).toHaveBeenCalledWith({
      description: "task0",
      id: 0,
    });

    await new Promise((r) => setTimeout(() => r(true), 3 * BASE_TIME));
    poller.stopPolling();

    // Should have been called 3 times one for each interval
    expect(mockPoller).toHaveBeenCalledTimes(4);

    // Handling one concurrent event
    expect(mockPoller).toHaveBeenCalledWith(1);
  });

  test("Should run the poll function 1 for each task. but handle two tasks concurrently", async () => {
    const mockPoller: (count: number) => Promise<Task[]> =
      jest.fn(fakeTaskGenerator);

    const mockPerformWorkFunction: (work: Task) => Promise<void> = jest.fn(
      () => Promise.resolve()
    );

    const poller = new Poller<Task>(mockPoller, mockPerformWorkFunction, {
      concurrency: 2,
      pollInterval: BASE_TIME,
    });

    poller.startPolling();
    await new Promise((r) => setTimeout(() => r(true), BASE_TIME));

    // Concurrency is two so should have been called twice
    expect(mockPerformWorkFunction).toBeCalledTimes(2);

    // Work for the first task
    expect(mockPerformWorkFunction).toHaveBeenCalledWith({
      description: "task0",
      id: 0,
    });
    expect(mockPerformWorkFunction).toHaveBeenCalledWith({
      description: "task1",
      id: 1,
    });

    await new Promise((r) => setTimeout(() => r(true), 3 * BASE_TIME));

    poller.stopPolling();

    // Should have been called 4 times one for each interval
    expect(mockPoller).toHaveBeenCalledTimes(4);

    // Handling one concurrent event
    expect(mockPoller).toHaveBeenCalledWith(2);
  });

  test("Should be able to keep the pooler with work if tasks take too long", async () => {
    const mockPoller: (count: number) => Promise<Task[]> =
      jest.fn(fakeTaskGenerator);

    const mockPerformWorkFunction: (work: Task) => Promise<void> = jest.fn(
      async (work: Task): Promise<void> => {
        if (work.id === 0) {
          // Add work load on first task
          await new Promise<void>((r) => setTimeout(() => r(), 2 * BASE_TIME));
        }
      }
    );

    const poller = new Poller<Task>(mockPoller, mockPerformWorkFunction, {
      concurrency: 2,
      pollInterval: BASE_TIME,
    });

    poller.startPolling();
    await new Promise((r) => setTimeout(() => r(true), BASE_TIME));

    // Concurrency is two so should have been called twice
    expect(mockPerformWorkFunction).toBeCalledTimes(2);

    // Work for the first task
    expect(mockPerformWorkFunction).toHaveBeenCalledWith({
      description: "task0",
      id: 0,
    });
    expect(mockPerformWorkFunction).toHaveBeenCalledWith({
      description: "task1",
      id: 1,
    });

    await new Promise((r) => setTimeout(() => r(true), BASE_TIME * 3));
    poller.stopPolling();

    // Should have been called 4 times one for each interval
    expect(mockPoller).toHaveBeenCalledTimes(4);
    expect(mockPoller).toHaveBeenCalledWith(2);
    expect(mockPoller).toHaveBeenCalledWith(1); // it could not handle two because of the await
    expect(mockPoller).toHaveBeenCalledWith(2);
  });

  test("Should be able to change add concurrency dynamically", async () => {
    const mockPoller: (count: number) => Promise<Task[]> =
      jest.fn(fakeTaskGenerator);

    const mockPerformWorkFunction: (work: Task) => Promise<void> = jest.fn(
      () => Promise.resolve()
    );

    const poller = new Poller<Task>(mockPoller, mockPerformWorkFunction, {
      concurrency: 2,
      pollInterval: BASE_TIME,
    });

    poller.startPolling();
    await new Promise((r) => setTimeout(() => r(true), BASE_TIME));

    poller.updateOptions({ concurrency: 3 });

    // Concurrency is two so should have been called twice
    expect(mockPerformWorkFunction).toBeCalledTimes(2);

    // Work for the first task
    expect(mockPerformWorkFunction).toHaveBeenCalledWith({
      description: "task0",
      id: 0,
    });
    expect(mockPerformWorkFunction).toHaveBeenCalledWith({
      description: "task1",
      id: 1,
    });

    await new Promise((r) => setTimeout(() => r(true), BASE_TIME * 3));
    poller.stopPolling();

    // Should have been called 4 times one for each interval
    expect(mockPoller).toHaveBeenCalledTimes(4);

    expect(mockPoller).toHaveBeenCalledWith(2);
    expect(mockPoller).toHaveBeenCalledWith(3); // it could not handle two because of the await
    expect(mockPoller).toHaveBeenCalledWith(3);
  });
  
  test("Should be able to change remove concurrency dynamically", async () => {

    const mockPoller: (count: number) => Promise<Task[]> =
      jest.fn(fakeTaskGenerator);

    const mockPerformWorkFunction: (work: Task) => Promise<void> = jest.fn(
      () => Promise.resolve()
    );

    const poller = new Poller<Task>(mockPoller, mockPerformWorkFunction, {
      concurrency: 2,
      pollInterval: BASE_TIME,
    });

    poller.startPolling();
    await new Promise((r) => setTimeout(() => r(true), BASE_TIME));

    poller.updateOptions({ concurrency: 1 });

    // Concurrency is two so should have been called twice
    expect(mockPerformWorkFunction).toBeCalledTimes(2);

    // Work for the first task
    expect(mockPerformWorkFunction).toHaveBeenCalledWith({
      description: "task0",
      id: 0,
    });
    expect(mockPerformWorkFunction).toHaveBeenCalledWith({
      description: "task1",
      id: 1,
    });

    await new Promise((r) => setTimeout(() => r(true), BASE_TIME * 3));
    poller.stopPolling();

    // Should have been called 4 times one for each interval
    expect(mockPoller).toHaveBeenCalledTimes(4);

    expect(mockPoller).toHaveBeenCalledWith(2);
    expect(mockPoller).toHaveBeenCalledWith(1); // it could not handle two because of the await
    expect(mockPoller).toHaveBeenCalledWith(1);
  });

  test("Should be able to change the pollInterval", async () => {

    const mockPoller: (count: number) => Promise<Task[]> =
      jest.fn(fakeTaskGenerator);

    const mockPerformWorkFunction: (work: Task) => Promise<void> = jest.fn(
      () => Promise.resolve()
    );

    const poller = new Poller<Task>(mockPoller, mockPerformWorkFunction, {
      concurrency: 2,
      pollInterval: BASE_TIME,
    });

    poller.startPolling();
    await new Promise((r) => setTimeout(() => r(true), BASE_TIME));

    poller.updateOptions({ pollInterval: BASE_TIME * 2 });

    // Concurrency is two so should have been called twice
    expect(mockPerformWorkFunction).toBeCalledTimes(2);

    // Work for the first task
    expect(mockPerformWorkFunction).toHaveBeenCalledWith({
      description: "task0",
      id: 0,
    });
    expect(mockPerformWorkFunction).toHaveBeenCalledWith({
      description: "task1",
      id: 1,
    });

    await new Promise((r) => setTimeout(() => r(true), BASE_TIME * 3));
    poller.stopPolling();

    // Should have been called 3 times since interval was updated
    expect(mockPoller).toHaveBeenCalledTimes(3);

  });
});
