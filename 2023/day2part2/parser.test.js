import { getPowers } from './parser'
import theoretically from 'jest-theories'

describe('when fed lines', () => {
  const theories = [
    {
      input: 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
      expected: 48
    },
    {
      input: 'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
      expected: 12
    },
    {
      input: 'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
      expected: 1560
    },
    {
      input: 'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
      expected: 630
    },
    {
      input: 'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
      expected: 36
    }
  ]

  theoretically(({ input, expected }) => 'it returns the power of the game', theories, theory => {
    expect(getPowers(theory.input)).toStrictEqual(theory.expected)
  })
})
