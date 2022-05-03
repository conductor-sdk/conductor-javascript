export function sleep(time: number) {
  return new Promise<void>((resolve) => {
    const timeout = setTimeout(() => {
      resolve()
      clearTimeout(timeout)
    }, time)
  })
}
