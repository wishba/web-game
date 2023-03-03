import React, { useEffect, useState } from 'react'
import Bridge from './Bridge'
import OneIsland from './OneIsland'
import TwoIsland from './TwoIsland'

function ObjectTile({ oneIslandPlacement, oneIsland }) {
  const [tile, setTile] = useState()
  useEffect(() => {
    const tileArray = []
    for (let index = 0; index < oneIslandPlacement.length; index++) {
      tileArray.push(
        <div key={`oneIsland-${index}`}>
          {oneIsland}
        </div>
      )
    }
    setTile(tileArray)
  }, [])

  return (
    <>
      {tile}
      {/* <OneIsland /> */}
      {/* <Bridge /> */}
      {/* <TwoIsland /> */}
    </>
  )
}

export default ObjectTile
// import React from 'react'
// import Bridge from './Bridge'
// import OneIsland from './OneIsland'
// import TwoIsland from './TwoIsland'

// function Object() {
//   return (
//     <div>
//       <OneIsland />
//       <Bridge />
//       <TwoIsland />
//     </div>
//   )
// }

// export default Object