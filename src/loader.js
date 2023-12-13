import { readFile } from 'fs/promises'
import { createReadStream } from 'fs'
import { createInterface } from 'readline'

export const readByLine = (path, callback, finished = () => {}) => {
  const stream = createReadStream(path)

  const reader = createInterface({
    input: stream,
    crlfDelay: Infinity
  })

  reader.on('line', callback)

  reader.on('close', finished)
}

export const loader = async (path) => {
  const contents = await readFile(path, 'utf-8')
  return contents.split(/\r?\n/)
}
