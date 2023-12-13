import { loader, readByLine } from './loader'

describe('Loading Games', () => {
  it('returns the correct count for the actual file', async () => {
    expect((await loader('./files/actual.txt')).length).toBe(204)
  })
})

describe('Parsing files', () => {
  it('reads the file line by line', done => {
    const callback = jest.fn()
    const end = () => {
      expect(callback).toHaveBeenCalledTimes(33)
      done()
    }

    readByLine('./files/sample.txt', callback, end)
  })
})
