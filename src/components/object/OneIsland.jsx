import React from 'react'
// import grassAsset from '../../assets/Grass tiles v.2.png'

function OneIsland({ grassAsset }) {
  return (
    <>
      <img src={grassAsset} alt="grass asset" />
    </>
  )
}

export default OneIsland

// import React, { useEffect, useState } from 'react'
// import ObjectTile from './ObjectTile'
// import grassAsset from '../../assets/Grass tiles v.2.png'
// import { objectUtils } from './utils/objectUtils'

// function OneIsland() {
//   const placementArray = [
//     [1, 1], [1, 2], [1, 3],
//     [2, 1], [2, 2], [2, 3],
//     [3, 1], [3, 2], [3, 3],
//   ]
//   const assetArray = [
//     [0, 0], [1, 0], [2, 0],
//     [0, 1], [1, 1], [2, 1],
//     [0, 2], [1, 2], [2, 2],
//   ]

//   // objectUtils(placementArray)

//   const [tiles, setTiles] = useState()
//   // const objectTile = <div>
//   // <ObjectTile asset={grassAsset} assetWidth={176} />
//   // </div>

//   useEffect(() => {
//     // setTiles(objectUtils(placementArray, objectTile))
//     setTiles(objectUtils(placementArray, 'tes'))
//   }, [])

//   // console.log(placementArray);

//   return (
//     <>
//       {tiles}
//       {/* <ObjectTile placement={placementArray} asset={grassAsset} assetWidth={176} /> */}
//     </>
//   )
// }

// export default OneIsland