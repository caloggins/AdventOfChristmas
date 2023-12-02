import { checkGame } from './checker'
import theoretically from 'jest-theories'

const Games = [
  {
    Game: 1,
    Sets: [
      { Red: 1, Green: 0, Blue: 1 },
      { Red: 1, Green: 1, Blue: 0 },
      { Red: 0, Green: 1, Blue: 0 }
    ]
  },
  {
    Game: 2,
    Sets: [
      { Red: 0, Green: 1, Blue: 1 },
      { Red: 0, Green: 1, Blue: 0 },
      { Red: 2, Green: 1, Blue: 1 }
    ]
  },
  {
    Game: 3,
    Sets: [
      { Red: 0, Green: 0, Blue: 0 },
      { Red: 0, Green: 0, Blue: 0 },
      { Red: 0, Green: 2, Blue: 0 }
    ]
  },
  {
    Game: 4,
    Sets: [
      { Red: 0, Green: 0, Blue: 0 },
      { Red: 0, Green: 0, Blue: 2 },
      { Red: 0, Green: 0, Blue: 0 }
    ]
  }
]

describe('when passed a set of games', () => {
  const theories = [
    { input: Games[0], expected: true },
    { input: Games[1], expected: false },
    { input: Games[2], expected: false },
    { input: Games[3], expected: false }
  ]

  theoretically(({ input, expected }) => 'it return the ids of valid games', theories, theory => {
    expect(checkGame(theory.input, { Red: 1, Green: 1, Blue: 1 })).toEqual(theory.expected)
  })
})
