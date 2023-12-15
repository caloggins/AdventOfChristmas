import { loadFrom } from './raceLoader.js'
import { holdTimes } from './holdTimes.js'

export const margin = async (path) => {
  const races = await loadFrom(path)

  const margins = []
  for (let race = 0; race < races.times.length; race++) {
    margins.push(holdTimes(races.times[race], races.distances[race]))
  }

  return margins.reduce((a, b) => a * b)
}
