const getNumbers = (input) => {
  const matches = [...input.matchAll(/\d+/g)]
  return matches.map(m => parseInt(m))
}

const getPoints = (card) => {
  const raw = card.split(/:|\|/)

  const winningList = getNumbers(raw[1])
  const ownList = getNumbers(raw[2])

  const matched = ownList.filter(o => winningList.includes(o))

  if (matched.length === 0) { return 0 }

  return 1 * Math.pow(2, matched.length - 1)
}

export const add = (input) => {
  let cardPoints = []

  for (let card = 0; card < input.length; card++) {
    cardPoints = [...cardPoints, getPoints(input[card])]
  }

  return cardPoints.reduce((a, b) => a + b)
}
