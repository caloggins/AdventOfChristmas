import theoretically from 'jest-theories'
import { loader } from './loader'
import { add } from './calculator'

describe('the calculator can processes the files', () => {
  const theories = [
    { input: './files/sample.txt', expected: 13 },
    { input: './files/actual.txt', expected: 0 }
  ]

  theoretically(({ input, expected }) => `${input} resolves to ${expected} points`, theories, async theory => {
    const data = await loader(theory.input)
    expect(add(data)).toBe(theory.expected)
  })
})
