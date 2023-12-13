import theoretically from 'jest-theories'
import { maps, mapSourceToDestination, processSeedThroughMaps } from './maps'

describe('building seed maps', () => {
  test('should return the locations for the given seeds', () => {
    const expected = [
      [
        { destination: 0, source: 15, range: 37 },
        { destination: 37, source: 52, range: 2 },
        { destination: 39, source: 0, range: 15 }
      ]
    ]
    const text = [
      'soil-to-fertilizer map:',
      '0 15 37',
      '37 52 2',
      '39 0 15',
      ''
    ]

    const result = maps(text)

    expect(result).toStrictEqual(expected)
  })

  test('can return a map when input has seed line', () => {
    const expected = [
      [
        { destination: 0, source: 15, range: 37 },
        { destination: 37, source: 52, range: 2 },
        { destination: 39, source: 0, range: 15 }
      ]
    ]
    const text = [
      'seeds: 79 14 55 13',
      '',
      'soil-to-fertilizer map:',
      '0 15 37',
      '37 52 2',
      '39 0 15',
      ''
    ]

    const result = maps(text)

    expect(result).toStrictEqual(expected)
  })

  it('can process multiple maps', () => {
    const text = [
      'seed-to-soil map:',
      '50 98 2',
      '52 50 48',
      '',
      'soil-to-fertilizer map:',
      '0 15 37',
      '37 52 2',
      '39 0 15',
      ''
    ]
    const expected = [
      [
        { destination: 50, source: 98, range: 2 },
        { destination: 52, source: 50, range: 48 }
      ],
      [
        { destination: 0, source: 15, range: 37 },
        { destination: 37, source: 52, range: 2 },
        { destination: 39, source: 0, range: 15 }
      ]
    ]

    expect(maps(text)).toEqual(expected)
  })
})

describe('mapping the source to the destination', () => {
  const theories = [
    { input: 0, expected: 39 },
    { input: 79, expected: 79 },
    { input: 52, expected: 37 },
    { input: 14, expected: 53 }
  ]

  theoretically(({ input, expected }) => `${input} should yield ${expected}`, theories, theory => {
    const map = [
      { destination: 0, source: 15, range: 37 },
      { destination: 37, source: 52, range: 2 },
      { destination: 39, source: 0, range: 15 }
    ]

    expect(mapSourceToDestination(theory.input, map)).toBe(theory.expected)
  })
})

describe('handles multiple maps', () => {
  test('one range', () => {
    const seed = 14
    const maps = [
      [
        { destination: 50, source: 98, range: 2 },
        { destination: 52, source: 50, range: 48 }
      ],
      [
        { destination: 0, source: 15, range: 37 },
        { destination: 37, source: 52, range: 2 },
        { destination: 39, source: 0, range: 15 }
      ]
    ]

    expect(processSeedThroughMaps(seed, maps)).toEqual(53)
  })
})
