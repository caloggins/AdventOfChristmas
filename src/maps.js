const processLine = (text) => {
  const values = [...text.matchAll(/\d+/g)]
    .map(o => parseInt(o))
  return {
    destination: values[0],
    source: values[1],
    range: values[2]
  }
}

const buildMap = (input, start = 0) => {
  const map = []

  let row = start + 1
  while (row < input.length && input[row] !== '') {
    const element = processLine(input[row])
    map.push(element)
    row++
  }

  return map
}

export const processSeedThroughMaps = (seed, maps) => {
  for (const map of maps) {
    seed = mapSourceToDestination(seed, map)
  }

  return seed
}

export const mapSourceToDestination = (seed, map) => {
  for (const element of map) {
    if (seed >= element.source && seed < (element.source + element.range)) {
      return (element.destination - element.source) + seed
    }
  }
  return seed
}

export const maps = (input, start = 0) => {
  const maps = []
  for (let line = start; line < input.length; line++) {
    if (/map:/.test(input[line])) {
      maps.push(buildMap(input, line))
    }
  }
  return maps
}
