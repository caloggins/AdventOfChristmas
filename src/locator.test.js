import { locator } from './locator'

describe('finding the nearest location in the file', () => {
  it('for the sample file', async () => {
    expect(await locator('./files/sample.txt')).toBe(35)
  })

  it('for the actual file', async () => {
    expect(await locator('./files/actual.txt')).toBe(0)
  })
})
