
export type FetchFn = (
  input: RequestInfo,
  init?: RequestInit | undefined
) => Promise<Response>;
