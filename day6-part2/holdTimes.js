import { distance } from './distance.js'

export const holdTimes = (raceTime, raceDistance) => {
  const times = []

  for (let holdTime = 0; holdTime < raceTime; holdTime++) {
    const distanceTravelled = distance(holdTime, raceTime)
    if (distanceTravelled > raceDistance) {
      times.push(holdTime)
    }
  }

  return times.length
}
