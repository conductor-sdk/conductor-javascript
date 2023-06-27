
import type { ConductorLogger } from "../common";

export const noopLogger: ConductorLogger = {
  //eslint-disable-next-line
  debug: (...args: any) => {},
  //eslint-disable-next-line
  info: (...args: any) => {},
  //eslint-disable-next-line
  error: (...args: any) => {},
};