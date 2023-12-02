const checkSet = (set, limit) => {
  return set.Red <= limit.Red && set.Green <= limit.Green && set.Blue <= limit.Blue
}

export const checkGame = (game, limit) => {
  let result = true
  game.Sets.forEach(set => { result = result && checkSet(set, limit) })
  return result
}
