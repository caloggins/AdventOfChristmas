import { lines, numbers } from './helpers'

describe('Reading the file', () => {
  it('returns the contents of the file', async () => {
    const contents = await lines('./files/sample.txt')

    expect(contents).toStrictEqual(['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'])
  })
})

describe('Extracting numbers', () => {
  it('handles numbers on ends', () => {
    expect(numbers('1abc2')).toBe(12)
  })

  it('handles numbers inside', () => {
    expect(numbers('pqr3stu8vwx')).toBe(38)
  })

  it('handles more than 2 numbers', () => {
    expect(numbers('a1b2c3d4e5f')).toBe(15)
  })

  it('handles one number', () => {
    expect(numbers('treb7uchet')).toBe(77)
  })
})
