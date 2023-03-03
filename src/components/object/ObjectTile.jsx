// import React, { useEffect, useState } from 'react'
// import './ObjectTile.css'

// function ObjectTile({ asset, assetWidth, placement }) {
//   const [tiles, setTiles] = useState()
//   const tileArray = []
//   let index = 0
//   // console.log(placement);
//   for (const key in placement) {
//     if (Object.hasOwnProperty.call(placement, key)) {
//       const element = placement[key];
//       index++
//       // console.log(index);
//       // console.log(element);
//       tileArray.push(
//         <div key={index} className='tile--size'>
//           <img src={asset} alt="tile"
//             // styale={{
//               'width': `calc(var(--zoom) * ${assetWidth}px)`
//             }}
//           />
//         </div>
//       )
//     }
//   }
//   // console.log(tileArray);
//   useEffect(() => {
//     setTiles(tileArray)
//   }, [])

//   return (
//     <div>
//       {tiles}
//     </div>
//     // <div className='tile--size'>
//     //   <img src={asset} alt="tile"
//     //     style={{
//     //       'width': `calc(var(--zoom) * ${assetWidth}px)`
//     //     }}
//     //   />
//     // </div>
//   )
// }

// export default ObjectTile