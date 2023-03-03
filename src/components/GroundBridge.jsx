import React, { useEffect, useState } from 'react'
import './GroundBridge.css'
import Tile from './Tile'

function GroundBridge() {
  const placementCoordinate = [
    [2, 3], [2, 4], [2, 5], [2, 6], [2, 7],
  ]
  const assetCoordinate = [
    [2, 1], [3, 1], [3, 1], [3, 1], [4, 1],
  ]

  const [bridgeTile, setBridgeTile] = useState()

  useEffect(() => {
    const tileArray = []

    for (let index = 0; index < placementCoordinate.length; index++) {
      const element = placementCoordinate[index];

      tileArray.push(
        <div key={index}>
          <Tile tileIndex={index} tileElement={element} tileAssetCoordinate={assetCoordinate} />
        </div>
      )
    }

    setBridgeTile(tileArray)
  }, [])

  return (
    <div>
      {bridgeTile}
    </div>
  )
}

export default GroundBridge