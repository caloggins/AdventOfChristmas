import { lines } from './loader'

describe('Loading Games', () => {
  it('returns the lines of the file', async () => {
    const expected = [
      '467..114..',
      '...*......',
      '..35..633.',
      '......#...',
      '617*......',
      '.....+.58.',
      '..592.....',
      '......755.',
      '...$.*....',
      '.664.598..'
    ]

    expect(await lines('./files/sample.txt')).toEqual(expected)
  })

  it('returns the correct count for the actual file', async () => {
    expect((await lines('./files/actual.txt')).length).toBe(140)
  })
})
