import { seedRanges } from './seeds'

describe('get seed ranges', () => {
  it('splits the list of seeds into pairs', () => {
    const input = 'seeds: 79 14 55 13'
    const expected = [
      { firstSeed: 79, numberOfSeeds: 14 },
      { firstSeed: 55, numberOfSeeds: 13 }
    ]

    const seeds = seedRanges(input)

    expect(seeds).toEqual(expected)
  })
})
