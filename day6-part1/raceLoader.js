import { readFile } from 'fs/promises'

const readFrom = async (path) => {
  const contents = await readFile(path, 'utf-8')
  return contents.split(/\r?\n/)
}

const parse = (contents) => {
  return [...contents.matchAll(/\d+/g)]
    .map(o => parseInt(o))
}

export const loadFrom = async (path) => {
  const contents = await readFrom(path)
  return {
    times: parse(contents[0]),
    distances: parse(contents[1])
  }
}
