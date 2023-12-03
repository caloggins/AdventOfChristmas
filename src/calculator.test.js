import { add } from './calculator'

describe('When numbers are in a file', () => {
  it('it returns the sum for the step 1 file', async () => {
    const file = './files/sample1.txt'

    expect(await add(file)).toBe(2286)
  })
})

describe('When using the real file', () => {
  const file = './files/actual.txt'

  it('part 1 results', async () => {
    expect(await add(file)).toBe(0)
  })
})
