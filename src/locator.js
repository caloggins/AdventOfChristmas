import { loader } from './loader'
import { processFile } from './parser'

export const locator = async (path) => {
  const contents = await loader(path)
  const locations = processFile(contents)
  return Math.min(...locations)
}
