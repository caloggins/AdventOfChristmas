import { loader } from './loader'
import { planter } from './planter'

describe('Locate nearest location', () => {
  xit('returns the lowest location for a seed in the file', async () => {
    const data = await loader('./files/sample.txt')
    expect(planter(data)).toBe(35)
  })
})
