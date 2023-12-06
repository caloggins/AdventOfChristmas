import { buildMap } from './buildMap'

describe('given a set of numbers', () => {
  it('returns a map', () => {
    const input = [
      '50 98 2',
      '52 50 48'
    ]
    const expected = [
      [50, 98, 2],
      [52, 50, 48]
    ]
    expect(buildMap(input)).toStrictEqual(expected)
  })
})
