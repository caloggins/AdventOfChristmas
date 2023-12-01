import { lines, numbers } from './helpers'

export const add = async (input) => {
  const strings = await lines(input)

  return strings.map(s => numbers(s))
    .reduce((a, b) => a + b)
}
