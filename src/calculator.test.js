import theoretically from 'jest-theories'
import { add } from './calculator'

describe('test cases', () => {
  const theories = [
    { input: './files/test-1.txt', expected: 1297949 },
    { input: './files/test-2.txt', expected: 0 },
    { input: './files/test-3.txt', expected: 0 },
    { input: './files/test-4.txt', expected: 4 },
    { input: './files/test-5.txt', expected: 0 },
    { input: './files/test-6.txt', expected: 6756 },
    { input: './files/test-7.txt', expected: 478 },
    { input: './files/test-8.txt', expected: 1297949 }
  ]

  theoretically(({ input, expected }) => `${input} should return ${expected}`, theories, async theory => {
    expect(await add(theory.input)).toBe(theory.expected)
  })
})

describe('Finding the sum', () => {
  it('sample file', async () => {
    const file = './files/sample.txt'

    expect(await add(file)).toBe(467835)
  })

  it('actual file results', async () => {
    expect(await add('./files/actual.txt')).toBe(0)
  })
})
