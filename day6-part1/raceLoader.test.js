import { loadFrom } from './raceLoader.js'

test('it should load the race', async () => {
  const expected = {
    times: [7, 15, 30],
    distances: [9, 40, 200]
  }
  expect(await loadFrom('./files/sample.txt')).toEqual(expected)
})
