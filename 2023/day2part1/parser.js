const matchers = {
  Red: /(\d+) red/,
  Green: /(\d+) green/,
  Blue: /(\d+) blue/
}

const getCount = (input, matcher) => {
  const match = input.match(matcher)
  if (match) return parseInt(match[1])
  return 0
}

const parseSet = (input) => {
  return {
    Red: getCount(input, matchers.Red),
    Green: getCount(input, matchers.Green),
    Blue: getCount(input, matchers.Blue)
  }
}

export const parseGame = (input) => {
  const id = parseInt(input.match(/Game (\d+):/)[1])
  const sets = input.split(': ')[1].split(';')
    .map(set => parseSet(set))

  return {
    Game: id,
    Sets: sets
  }
}
