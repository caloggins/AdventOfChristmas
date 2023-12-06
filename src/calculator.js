const parseNumbers = (input) => {
  const matches = [...input.matchAll(/\d+/g)]
  return matches.map(m => parseInt(m))
}

const createCard = (card) => {
  const raw = card.split(/:|\|/)

  const winningList = parseNumbers(raw[1])
  const ownList = parseNumbers(raw[2])

  const matched = ownList.filter(o => winningList.includes(o))

  return {
    wins: matched.length,
    count: 1
  }
}

const buildListOfCards = (input, row = 0) => {
  if (row >= input.length) {
    return []
  }

  return [createCard(input[row]), ...buildListOfCards(input, row + 1)]
}

const distributeWins = (cards, row = 0) => {
  if (row >= cards.length) {
    return
  }

  for (let i = 0; i < cards[row].count; i++) {
    for (let i = 1; i <= cards[row].wins; i++) {
      if (row + i < cards.length) {
        cards[row + i].count++
      }
    }
  }

  distributeWins(cards, ++row)
}

export const add = (input) => {
  const cards = buildListOfCards(input)

  distributeWins(cards)

  const counts = cards.map(o => o.count)
  return counts.reduce((a, b) => a + b)
}
