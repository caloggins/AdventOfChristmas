import { processFile } from './parser'

describe('Processing the file', () => {
  it('processess the seed line', () => {
    const lines = [
      'seeds: 79 14 55 13',
      ''
    ]

    expect(processFile(lines)).toEqual([79, 14, 55, 13])
  })

  it('processes a map', () => {
    const seeds = [79, 14, 55, 13]
    const lines = [
      'seed-to-soil map:',
      '50 98 2',
      '52 50 48',
      ''
    ]

    expect(processFile(lines, 0, seeds)).toEqual([81, 14, 57, 13])
  })

  it('can process another map', () => {
    const seeds = [81, 14]
    const lines = [
      'soil-to-fertilizer map:',
      '0 15 37',
      '37 52 2',
      '39 0 15',
      ''
    ]

    expect(processFile(lines, 0, seeds)).toEqual([81, 53])
  })

  it('can process multiple maps', () => {
    const seeds = [79, 14]
    const lines = [
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

    expect(processFile(lines, 0, seeds)).toEqual([81, 53])
  })
})
