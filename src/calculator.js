import { lines } from './loader'
import { findPartNumbers } from './parser'

export const add = async (file) => {
  const parts = findPartNumbers(await lines(file))

  return parts.reduce((a, b) => a + b)
}
