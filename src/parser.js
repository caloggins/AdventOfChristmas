const directions = [
  [-1, -1], [-1, 0], [-1, 1],
  [0, -1], [0, 1],
  [1, -1], [1, 0], [1, 1]
]

const isInBounds = (input, x, y) => {
  if (y < 0 || y >= input.length) { return false }
  if (x < 0 || x >= input[y].length) { return false }
  return true
}

export const checkNeighbors = (input, row, col) => {
  let isPart = false
  for (const [dy, dx] of directions) {
    const x = col + dx
    const y = row + dy

    if (isInBounds(input, x, y)) {
      if (/[^\d|.]/.test(input[y][x])) { isPart = true }
    }
  }

  return isPart
}

const exploreRow = (input, row) => {
  let buffer = ''
  let isPart = false
  const found = []

  for (let col = 0; col <= input[row].length; col++) {
    if (col < input[row].length && /\d/.test(input[row][col])) {
      buffer = buffer + input[row][col]
      if (!isPart) {
        isPart = checkNeighbors(input, row, col)
      }
    } else if (buffer.length > 0) {
      if (isPart) {
        found.push(parseInt(buffer))
        isPart = false
      }
      buffer = ''
    }
  }

  return found
}

export const findPartNumbers = (input) => {
  let parts = []
  for (let row = 0; row < input.length; row++) {
    const fromRow = exploreRow(input, row)
    parts = [...parts, ...fromRow]
  }
  return parts
}
