import { readFile } from 'fs/promises'

export const lines = async (input) => {
  const pattern = /\r\n/
  const contents = await readFile(input, 'utf-8')
  return contents.split(pattern)
}

const tokenMap = [
  { match: /one/g, token: 'o1e' },
  { match: /two/g, token: 't2o' },
  { match: /three/g, token: 't3e' },
  { match: /four/g, token: 'f4r' },
  { match: /five/g, token: 'f5e' },
  { match: /six/g, token: 's6x' },
  { match: /seven/g, token: 's7n' },
  { match: /eight/g, token: 'e8t' },
  { match: /nine/g, token: 'n9e' }
]

export const numbers = (input) => {
  tokenMap.map(o => {
    input = input.replace(o.match, o.token)
    return input
  })

  const matches = Array.from(input.matchAll(/\d/g))

  return parseInt(matches[0] + matches[matches.length - 1])
}
