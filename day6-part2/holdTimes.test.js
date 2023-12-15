import { holdTimes } from './holdTimes.js'
import theoretically from 'jest-theories'

const theories = [
  {
    input: { time: 7, distance: 9 },
    expected: 4
  },
  {
    input: { time: 15, distance: 40 },
    expected: 8
  },
  {
    input: { time: 30, distance: 200 },
    expected: 9
  }
]

theoretically(({ input, expected }) => `A ${input.distance}mm race lasting ${input.time}ms returns ${expected}`, theories, theory => {
  expect(holdTimes(theory.input.time, theory.input.distance)).toEqual(theory.expected)
})
