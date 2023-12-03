const matchers = {
  Red: /(\d+) red/gi,
  Green: /(\d+) green/gi,
  Blue: /(\d+) blue/gi
}

const findMaximum = (input, matcher) => {
  const matches = Array.from(input.matchAll(matcher))

  if (matches == null) return 0

  const numbers = matches.map(m => parseInt(m))

  return Math.max(...numbers)
}

export const getPowers = (input) => {
  const red = findMaximum(input, matchers.Red)
  const green = findMaximum(input, matchers.Green)
  const blue = findMaximum(input, matchers.Blue)

  return (red * green * blue)
}
