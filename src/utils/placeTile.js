export const placeTile = (placement, tes) => {
  const tileArray = []
  for (const iterator of placement) {
    tileArray.push(tes)
    // tileArray.push(iterator)
    // console.log(tes);
  }
  return tileArray
}