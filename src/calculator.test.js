import { add } from './calculator'

describe('Finding the sum', () => {
  it('sample file', async () => {
    const file = './files/sample.txt'

    expect(await add(file)).toBe(4361)
  })

  it('second sample file', async () => {
    expect(await add('./files/sample2.txt')).toBe(7253)
  })

  it('part 1 results', async () => {
    expect(await add('./files/actual.txt')).toBe(0)
  })
})

// 85052390630 failed, too high
