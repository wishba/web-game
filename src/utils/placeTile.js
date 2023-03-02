export const placeTile = (props) => {
  const tileArray = []
  for (const iterator of props) {
    tileArray.push(iterator)
  }
  return tileArray
}