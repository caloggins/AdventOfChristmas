import { add } from './calculator'

describe('When numbers are in a file', () => {
  it('it returns the sum for the step 1 file', async () => {
    const file = './files/sample1.txt'
    const limits = {
      Red: 12,
      Green: 13,
      Blue: 14
    }
    expect(await add(file, limits)).toBe(8)
  })
})

describe('When using the real file', () => {
  const file = './files/actual.txt'
  const limits = {
    Red: 12,
    Green: 13,
    Blue: 14
  }
  it('part 1 results', async () => {
    expect(await add(file, limits)).toBe(0)
  })
})
