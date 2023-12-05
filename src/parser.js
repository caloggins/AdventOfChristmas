const searchRow = (input, row) => {
  let buffer = ''
  let found = []

  for (let col = 0; col <= input[row].length; col++) {
    if (col < input[row].length && /\d/.test(input[row][col])) {
      buffer = buffer + input[row][col]
    } else if (buffer.length > 0) {
      found = [...found, { value: buffer, row, col: (col - buffer.length) }]
      buffer = ''
    }
  }

  return found
}

export const findPossibleGears = (input) => {
  let possibleGears = []
  for (let row = 0; row < input.length; row++) {
    const fromRow = searchRow(input, row)
    possibleGears = [...possibleGears, ...fromRow]
  }
  return possibleGears
}

const searchRowForSplats = (input, row) => {
  let splats = []

  for (let col = 0; col < input[row].length; col++) {
    if (/\*/.test(input[row][col])) {
      splats = [...splats, { row, col }]
    }
  }

  return splats
}

export const findSplatLocations = (input) => {
  let splats = []
  for (let row = 0; row < input.length; row++) {
    splats = [...splats, ...searchRowForSplats(input, row)]
  }
  return splats
}
