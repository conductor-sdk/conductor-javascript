import { Poller } from "../Poller";
import { expect, describe, test, jest } from "@jest/globals";

describe("Poller", () => {
  test("Should run the poll function once for each interval if concurrency is just one", async () => {
    const functionToRun = jest.fn();
    const poller = new Poller(
      async () => {
        functionToRun();
      },
      { concurrency: 1, pollInterval: 1000 }
    );
    poller.startPolling();
    await new Promise((r) => setTimeout(() => r(true), 3000));
    poller.stopPolling();
    expect(functionToRun).toHaveBeenCalledTimes(3);
  });

  test("Should run the poll function once for each interval if concurrency is just one", async () => {
    const functionToRun = jest.fn();
    const poller = new Poller(
      async () => {
        functionToRun();
      },
      { concurrency: 2, pollInterval: 1000 }
    );
    poller.startPolling();
    await new Promise((r) => setTimeout(() => r(true), 3000));
    poller.stopPolling();
    expect(functionToRun).toHaveBeenCalledTimes(6);
  });
  test("Should be able to change add concurrency dynamically", async () => {
    const functionToRun = jest.fn();
    const poller = new Poller(
      async () => {
        functionToRun();
      },
      { concurrency: 1, pollInterval: 1000 }
    );
    poller.startPolling();
    await new Promise((r) => setTimeout(() => r(true), 1000));
    poller.updateOptions({ concurrency: 2 });
    await new Promise((r) => setTimeout(() => r(true), 2000));
    poller.stopPolling();
    expect(functionToRun).toHaveBeenCalledTimes(5);
  });
  test("Should be able to change remove concurrency dynamically", async () => {
    const functionToRun = jest.fn();
    const poller = new Poller(
      async () => {
        functionToRun();
      },
      { concurrency: 2, pollInterval: 1000 }
    );
    poller.startPolling();
    await new Promise((r) => setTimeout(() => r(true), 1000));
    poller.updateOptions({ concurrency: 1 });
    await new Promise((r) => setTimeout(() => r(true), 2000));
    poller.stopPolling();
    expect(functionToRun).toHaveBeenCalledTimes(4);
  });
  
  test("Should be able to change the pollInterval", async () => {
    const functionToRun = jest.fn();
    const poller = new Poller(
      async () => {
        functionToRun();
      },
      { concurrency: 1, pollInterval: 1000 }
    );
    poller.startPolling();
    await new Promise((r) => setTimeout(() => r(true), 1000));
    poller.updateOptions({ pollInterval: 500 });
    await new Promise((r) => setTimeout(() => r(true), 2000));
    poller.stopPolling();
    expect(functionToRun).toHaveBeenCalledTimes(5);
  });
});
