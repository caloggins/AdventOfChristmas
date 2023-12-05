import { readFile } from 'fs/promises'

export const lines = async (input) => {
  const contents = await readFile(input, 'utf-8')
  return contents.split(/\r?\n/)
}
