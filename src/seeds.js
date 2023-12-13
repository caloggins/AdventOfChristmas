export const seedRanges = (input) => {
  const list = [...input.matchAll(/\d+/g)].map(o => parseInt(o))

  const chunkSize = 2
  const seeds = []

  for (let i = 0; i < list.length; i += chunkSize) {
    const slice = list.slice(i, i + chunkSize)
    seeds.push({ firstSeed: slice[0], numberOfSeeds: slice[1] })
  }

  return seeds
}
