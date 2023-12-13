import { locator, findLocations, getLocationForRange } from './locator'

describe('finding the nearest location in the file', () => {
  it('for the sample file', async () => {
    expect(await locator('./files/sample.txt')).toBe(46)
  })

  xit('for the actual file', async () => {
    expect(await locator('./files/actual.txt')).toBe(0)
  })
})

describe('finds locations', () => {
  test('multiple seed ranges', () => {
    const data = {
      seeds: [
        { firstSeed: 79, numberOfSeeds: 2 },
        { firstSeed: 14, numberOfSeeds: 2 },
        { firstSeed: 52, numberOfSeeds: 2 }
      ],
      maps: [
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
    }
    const expected = [81, 0, 54]

    expect(findLocations(data)).toEqual(expected)
  })
})
