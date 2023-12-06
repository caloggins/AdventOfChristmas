import { buildMap } from './buildMap'

const seeds = (data, row) => {
  return [...data[row].matchAll(/\d+/g)].map(o => parseInt(o))
}

const mapSourceToDestination = (source, map) => {
  for (const [destinationStart, sourceStart, range] of map) {
    if (source >= sourceStart && source < (sourceStart + range)) {
      return (destinationStart - sourceStart) + source
    }
  }
  return source
}

const maps = (data, row, sources) => {
  const map = buildMap(data, row)

  let destinations = []
  for (let pos = 0; pos < sources.length; pos++) {
    destinations = [...destinations, mapSourceToDestination(sources[pos], map)]
  }
  return destinations
}

const processRow = (data, row, locations) => {
  if (/map:/g.test(data[row])) { return maps(data, row, locations) }
  if (/seeds:/g.test(data[row])) { return seeds(data, row) }
  return locations
}

export const processFile = (data, row = 0, locations = []) => {
  for (row = 0; row < data.length; row++) {
    locations = processRow(data, row, locations)
  }
  return locations
}
