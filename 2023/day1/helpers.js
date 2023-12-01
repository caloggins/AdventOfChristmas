import { readFile } from 'fs/promises'

export const lines = async (input) => {
  const pattern = /\r?\n/
  const contents = await readFile(input, 'utf-8')
  return contents.split(pattern)
}

export const numbers = (input) => {
  const pattern = /\d/g

  const matches = Array.from(input.matchAll(pattern))

  return parseInt(matches[0] + matches[matches.length - 1])
}
