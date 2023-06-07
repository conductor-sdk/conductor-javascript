import { ConductorError} from "./types";

export const errorMapper = (error: any): ConductorError =>
  new ConductorError(error?.body?.message, error);

export const tryCatchReThrow = (fn: Function) => {
  try {
    return fn();
  } catch (error) {
    throw errorMapper(error);
  }
};
