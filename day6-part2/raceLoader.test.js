import { loadFrom } from './raceLoader.js'

test('it should load the race', async () => {
  const expected = {
    times: [71530],
    distances: [940200]
  }
  expect(await loadFrom('./files/sample.txt')).toEqual(expected)
})
