import { parseGame } from './parser'
import theoretically from 'jest-theories'

describe('when fed lines', () => {
  const theories = [
    {
      input: 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
      expected:
      {
        Game: 1,
        Sets: [
          { Red: 4, Green: 0, Blue: 3 },
          { Red: 1, Green: 2, Blue: 6 },
          { Red: 0, Green: 2, Blue: 0 }
        ]
      }
    },
    {
      input: 'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
      expected:
      {
        Game: 2,
        Sets: [
          { Red: 0, Green: 2, Blue: 1 },
          { Red: 1, Green: 3, Blue: 4 },
          { Red: 0, Green: 1, Blue: 1 }
        ]
      }
    },
    {
      input: 'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
      expected:
        {
          Game: 3,
          Sets: [
            { Red: 20, Green: 8, Blue: 6 },
            { Red: 4, Green: 13, Blue: 5 },
            { Red: 1, Green: 5, Blue: 0 }
          ]
        }
    }
  ]

  theoretically(({ input, expected }) => 'it returns a game object', theories, theory => {
    expect(parseGame(theory.input)).toStrictEqual(theory.expected)
  })
})
