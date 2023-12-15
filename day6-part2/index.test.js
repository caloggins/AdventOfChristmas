import { margin } from './index.js'

test('given the file it finds the margin of error', async () => {
  expect(await margin('./files/sample.txt')).toEqual(71503)
})

test('given the actual file', async () => {
  expect(await margin('./files/actual.txt')).toEqual(0)
})
