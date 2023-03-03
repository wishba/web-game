import React, { useEffect, useState } from 'react'

function ObjectTile({ placement, tileAsset }) {
  const [tile, setTile] = useState()
  useEffect(() => {
    const tileArray = []
    for (let index = 0; index < placement.length; index++) {
      tileArray.push(
        <div key={index}>
          {tileAsset}
        </div>
      )
    }
    setTile(tileArray)
  }, [])

  return (<>{tile}</>)
}

export default ObjectTile