import { lines } from './loader'
import { findGearRatios } from './ratios'

export const add = async (file) => {
  const data = await lines(file)

  const ratios = findGearRatios(data)

  if (ratios.length === 0) { return 0 }

  return ratios.reduce((a, b) => a + b)
}
