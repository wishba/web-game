import React, { useEffect, useState } from 'react'
import './Ground.css'
import groundAsset from '../assets/Grass tiles v.2.png'

function Ground() {
  const groundArray = [
    [1, 1], [1, 2], [1, 3],
    [2, 1], [2, 2], [2, 3],
    [3, 1], [3, 2], [3, 3],
  ]
  const tileArray = [
    [0, 0], [1, 0], [2, 0],
    [0, 1], [1, 1], [2, 1],
    [0, 2], [1, 2], [2, 2],
  ]

  const [groundTile, setGroundTile] = useState()

  useEffect(() => {
    const groundTileArray = []

    for (let index = 0; index < groundArray.length; index++) {
      const element = groundArray[index];

      groundTileArray.push(
        <div key={index} className='ground'
          style={{
            top: `calc(85px * ${element[0]})`,
            left: `calc(85px * ${element[1]})`,
          }}
        >
          <img className='ground__asset' src={groundAsset} alt="ground"
            style={{ transform: `translate(calc(-15px * 5 * ${tileArray[index][0]}), calc(-15px * 5 * ${tileArray[index][1]}))` }}
          />
        </div>
      )
    }

    setGroundTile(groundTileArray)
  }, [])


  return (
    <div>
      {groundTile}
    </div>
  )
}

export default Ground