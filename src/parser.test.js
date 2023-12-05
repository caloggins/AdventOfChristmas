import { findPartNumbers, checkNeighbors } from './parser'
import theoretically from 'jest-theories'

describe('findPartNumbers', () => {
  const theories = [
    {
      input: ['467..114..'],
      expected: []
    }, {
      input: ['467*..114'],
      expected: [467]
    }, {
      input: ['467*..114*'],
      expected: [467, 114]
    }, {
      input: [
        '467..114..',
        '...*......',
        '..35..633.',
        '......#...'
      ],
      expected: [467, 35, 633]
    }, {
      input: [
        '.......................*......*',
        '...910*...............233..189.',
        '2......391.....789*............',
        '...................983.........',
        '0........106-...............226',
        '.%............................$',
        '...*......$812......812..851...',
        '.99.711.............+.....*....',
        '...........................113.',
        '28*.....411....%...............'
      ],
      expected: [910, 233, 189, 391, 789, 983, 0, 106, 226, 812, 812, 851, 99, 711, 113, 28]
    }
  ]

  theoretically(({ input, expected }) => 'it returns the list of valid parts', theories, theory => {
    expect(findPartNumbers(theory.input)).toEqual(theory.expected)
  })
})

describe('checkNeighbors', () => {
  const data = [
    '467..114..',
    '...*......',
    '..35..633.',
    '......#...'
  ]
  const theories = [
    {
      // no symbol
      input: [0, 0],
      expected: false
    }, {
      // symbol is below
      input: [0, 3],
      expected: true
    }, {
      // symbol is above
      input: [2, 4],
      expected: true
    }, {
      // symbol is behind
      input: [1, 4],
      expected: true
    }, {
      // symbol is ahead
      input: [1, 2],
      expected: true
    }, {
      // diff symnbol on a diagonal
      input: [2, 6],
      expected: true
    }
  ]

  theoretically(({ input, expected }) => 'it returns true if there is a symbol next to the number', theories, theory => {
    expect(checkNeighbors(data, theory.input[0], theory.input[1])).toBe(theory.expected)
  })
})
