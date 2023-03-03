export const objectUtils = (parameter, tile) => {
  // console.log(parameter)
  const tileArray = []
  // const tileArray = 'tes'
  let index = 0
  for (const iterator of parameter) {
    // console.log(iterator);
    index++
    console.log(index);
    tileArray.push(tile)
  }
  // console.log(tileArray);
  return tileArray
}
