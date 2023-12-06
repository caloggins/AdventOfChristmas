export const buildMap = (input, row = 0, map = []) => {
  if (row >= input.length || input[row].length === 0) {
    return map
  }

  const entry = [...input[row].matchAll(/\d+/g)].map(o => parseInt(o))
  map = [...map, entry]

  return buildMap(input, ++row, map)
}
