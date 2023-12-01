import { add } from './calculator'

describe('When numbers are in a file', () => {
  it('it returns the sum for the sample file', async () => {
    expect(await add('./files/sample.txt')).toBe(142)
  })
})

describe('When using the real file', () => {
  it('it returns the sum', async () => {
    expect(await add('./files/actual.txt')).toBe(0)
  })
})
