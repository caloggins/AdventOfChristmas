import { loader } from './loader.js'
import { maps } from './maps.js'
import { seedRanges } from './seeds.js'

export const parseFile = async (path) => {
  const contents = await loader(path)
  const data = { }

  data.seeds = seedRanges(contents[0])
  data.maps = maps(contents, 2)

  return data
}
