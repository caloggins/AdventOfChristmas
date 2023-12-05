import { findSplatLocations } from './parser'
import theoretically from 'jest-theories'

describe('findSplatLocations loads the splats', () => {
  const theories = [
    {
      input: [
        '...',
        '.*.',
        '*..'
      ],
      expected: [
        { row: 1, col: 1 },
        { row: 2, col: 0 }
      ]
    }
  ]

  theoretically(({ input, expected }) => `${input} returns ${expected}`, theories, theory => {
    expect(findSplatLocations(theory.input)).toStrictEqual(theory.expected)
  })
})
