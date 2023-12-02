import { lines } from './loader'
import { getPowers } from './parser'

export const add = async (file, limits) => {
  const powers = (await lines(file))
    .map(line => getPowers(line))

  return powers.reduce((a, b) => a + b)
}
