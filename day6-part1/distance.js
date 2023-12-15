export const distance = (waitTime, raceTime) => {
  return waitTime * (raceTime - waitTime)
}
