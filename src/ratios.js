import { findPossibleGears, findSplatLocations } from './parser'

const directions = [
  [-1, -1], [-1, 0], [-1, 1],
  [0, -1], [0, 1],
  [1, -1], [1, 0], [1, 1]
]

export const isAdjacent = (gear, splat) => {
  let keeper = false

  for (const [drow, dcol] of directions) {
    const checkRow = splat.row + drow
    if (gear.row !== checkRow) {
      continue
    }

    const checkCol = splat.col + dcol
    const end = gear.col + gear.value.length - 1
    if ((checkCol >= gear.col) && (checkCol <= end)) {
      keeper = true
    }
  }

  return keeper
}

const getAdjacent = (splat, gears, whichGear = 0) => {
  if (whichGear >= gears.length) { return [] }

  if (isAdjacent(gears[whichGear], splat)) {
    return [gears[whichGear].value, ...getAdjacent(splat, gears, ++whichGear)]
  }

  return getAdjacent(splat, gears, ++whichGear)
}

const findGears = (splats, gears, whichSplat = 0) => {
  if (whichSplat >= splats.length) { return [] }

  const adjacent = getAdjacent(splats[whichSplat], gears)

  if (adjacent.length === 2) {
    return [(adjacent[0] * adjacent[1]), ...findGears(splats, gears, ++whichSplat)]
  }

  return findGears(splats, gears, ++whichSplat)
}

export const findGearRatios = (input) => {
  const gears = findPossibleGears(input)
  const splats = findSplatLocations(input)

  return findGears(splats, gears)
}
