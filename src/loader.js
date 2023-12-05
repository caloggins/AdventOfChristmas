import { readFile } from 'fs/promises'

export const loader = async (path) => {
  const contents = await readFile(path, 'utf-8')
  return contents.split(/\r?\n/)
}
