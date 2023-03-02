import React, { useEffect, useState } from 'react'
import './GroundBridge.css'
import bridgeAsset from '../assets/Wood Bridge.png'
import { placeTile } from '../utils/placeTile'

function GroundBridge() {
  const bridgeArray = [
    [2, 3], [2, 4], [2, 5], [2, 6], [2, 7],
  ]
  const tileArray = [
    [2, 1], [3, 1], [3, 1], [3, 1], [4, 1],
  ]

  const [bridgeTile, setBridgeTile] = useState()
  const [test, setTest] = useState()

  useEffect(() => {
    setTest(placeTile(bridgeArray))

    const groundTileArray = []

    for (let index = 0; index < bridgeArray.length; index++) {
      const element = bridgeArray[index];

      groundTileArray.push(
        <div key={index} className='groundBridge'
          style={{
            top: `calc(85px * ${element[0]})`,
            left: `calc(85px * ${element[1]})`,
          }}
        >
          <img className='groundBridge__asset' src={bridgeAsset} alt="ground"
            style={{ transform: `translate(calc(-16px * 5 * ${tileArray[index][0]}), calc(-16px * 5 * ${tileArray[index][1]}))` }}
          />
        </div>
      )
    }

    setBridgeTile(groundTileArray)
  }, [])

  return (
    <div>
      {/* {bridgeTile} */}
      <p>{test}</p>
    </div>
  )
}

export default GroundBridge