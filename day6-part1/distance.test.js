import { distance } from './distance.js'
import theoretically from 'jest-theories'

const theories = [
  { input: 0, expected: 0 },
  { input: 1, expected: 6 },
  { input: 2, expected: 10 }
]

theoretically(({ input, expected }) => `it returns ${expected} when hold time is ${input}`, theories, theory => {
  expect(distance(theory.input, 7)).toEqual(theory.expected)
})
