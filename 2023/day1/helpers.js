import { readFile } from 'fs/promises'

export const lines = async (input) => {
  const pattern = /\r\n/
  const contents = await readFile(input, 'utf-8')
  return contents.split(pattern)
}

const numberFunction = (lookup, input) => {
  return (lookup[input] || parseInt(input))
}

export const numbers = (input) => {
  const pattern = /\d|one|two|three|four|five|six|seven|eight|nine/gi

  const matches = Array.from(input.matchAll(pattern))

  const first = numberFunction(numberMap, matches[0])
  const second = numberFunction(numberMap, matches[matches.length - 1])

  return (first * 10) + second
}

export const numberMap = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
}
