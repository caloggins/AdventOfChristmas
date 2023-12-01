import { add } from './calculator'

describe('When numbers are in a file', () => {
  it('it returns the sum for the step 1 file', async () => {
    expect(await add('./files/sample1.txt')).toBe(142)
  })

  it('it returns the sum for the step 2 file', async () => {
    expect(await add('./files/sample2.txt')).toBe(281)
  })
})

describe('When using the real file', () => {
  it('part 1 results', async () => {
    expect(await add('./files/actual1.txt')).toBe(54951)
  })

  it('part 2 results', async () => {
    expect(await add('./files/actual1.txt')).toBe(0)
  })
})
