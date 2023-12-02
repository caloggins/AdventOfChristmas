import { lines } from './loader'
import { parseGame } from './parser'
import { checkGame } from './checker'

export const add = async (file, limits) => {
  const games = (await lines(file))
    .map(line => parseGame(line))

  const valid = games.filter(game => checkGame(game, limits))

  const ids = valid.map(game => game.Game)

  return ids.reduce((a, b) => a + b, 0)
}
