import {test, expect} from '@jest/globals'
import {sleep} from "../sleep"

test('allows waiting for a specified amount of time', async () => {
  const start = new Date()
  expect.assertions(1)
  await sleep(100)
  const now = new Date()
  expect(now.getTime() - start.getTime()).toBeGreaterThanOrEqual(50)
})

