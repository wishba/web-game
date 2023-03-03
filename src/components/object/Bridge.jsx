import React from 'react'
import bridgeAsset from '../../assets/Wood Bridge.png'

function Bridge() {
  return (
    <>
      <img src={bridgeAsset} alt="bridge asset" />
    </>
  )
}

export default Bridge
// import React from 'react'
// import ObjectTile from './ObjectTile'
// import bridgeAsset from '../../assets/Wood Bridge.png'
// function Bridge() {
//   const placementArray = [
//     [2, 3], [2, 4], [2, 5], [2, 6], [2, 7],
//   ]
//   const assetArray = [
//     [2, 1], [3, 1], [3, 1], [3, 1], [4, 1],
//   ]
//   // return (
//     <>
//       <ObjectTile placement={placementArray} asset={bridgeAsset} assetWidth={80} />
//     </>
//   )
// }

// export default Bridge