import React, { useEffect, useState } from 'react'
import './GroundBridge.css'
import Tile from './Tile'

function GroundBridge() {
  const bridgeArray = [
    [2, 3], [2, 4], [2, 5], [2, 6], [2, 7],
  ]
  const tileArray = [
    [2, 1], [3, 1], [3, 1], [3, 1], [4, 1],
  ]

  const [bridgeTile, setBridgeTile] = useState()

  useEffect(() => {
    const groundTileArray = []

    for (let index = 0; index < bridgeArray.length; index++) {
      const element = bridgeArray[index];

      groundTileArray.push(
        <div key={index}>
          <Tile tes1={index} tes2={element} tes3={tileArray} />
        </div>
      )
    }

    setBridgeTile(groundTileArray)
  }, [])

  return (
    <div>
      {bridgeTile}
    </div>
  )
}

export default GroundBridge