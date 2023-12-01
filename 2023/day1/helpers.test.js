import { lines, numbers, numberMap } from './helpers'
import theoretically from 'jest-theories'

describe('Reading the file', () => {
  it('returns the contents of the file', async () => {
    const expected = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet']

    const contents = await lines('./files/sample1.txt')

    expect(contents).toStrictEqual(expected)
  })
})

describe('Extracting numbers', () => {
  const theories = [
    { input: '1abc2', expected: 12 },
    { input: 'pqr3stu8vwx', expected: 38 },
    { input: 'a1b2c3d4e5f', expected: 15 },
    { input: 'treb7uchet', expected: 77 },
    { input: 'two1nine', expected: 29 },
    { input: 'abcone2threexyz', expected: 13 },
    { input: 'eightwothree', expected: 83 },
    { input: 'xtwone3four', expected: 24 },
    { input: '4nineeightseven2', expected: 42 },
    { input: 'zoneight234', expected: 14 },
    { input: '7pqrstsixteen', expected: 76 },
    { input: 'twone', expected: 21 },
    { input: 'oneight', expected: 18 }
  ]

  theoretically(({ input, expected }) => '{input} should convert to {expected}', theories, theory => {
    expect(numbers(theory.input)).toBe(theory.expected)
  })
})
