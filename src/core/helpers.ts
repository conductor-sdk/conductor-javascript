import { ConductorError } from "./types";

export const errorMapper = (error: any): ConductorError =>
  new ConductorError(error?.body?.message, error);

export const tryCatchReThrow = (fn: Function) => {
  try {
    return fn();
  } catch (error) {
    throw errorMapper(error);
  }
};

export function reverseFind<T>(
  array: T[],
  predicate: (a: T, idx?: number, arr?: T[]) => boolean
): T | undefined {
  for (let i = array.length - 1; i >= 0; i--) {
    if (predicate(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
}
