import { parseFile } from './parser.js'
import { processSeedThroughMaps } from './maps.js'

export const getLocationForRange = (range, maps) => {
  let location = -1

  for (let count = 0; count < range.numberOfSeeds; count++) {
    const newLocation = processSeedThroughMaps(range.firstSeed + count, maps)
    if ((location === -1) || (newLocation < location)) {
      location = newLocation
    }
  }

  return location
}

export const findLocations = (data) => {
  let locations = []

  for (const range of data.seeds) {
    const location = getLocationForRange(range, data.maps)
    locations = [...locations, location]
  }

  return locations
}

export const locator = async (path) => {
  const data = await parseFile(path)

  const locations = findLocations(data)

  return Math.min(...locations)
}
