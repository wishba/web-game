import React, { useEffect, useState } from 'react'
import './Ground.css'
import groundAsset from '../assets/Grass tiles v.2.png'

function ground() {
  const [groundTile, setGroundTile] = useState()

  const groundArray = [
    [1, 1], [1, 2], [1, 3],
    [2, 1], [2, 2], [2, 3],
    [3, 1], [3, 2], [3, 3],
  ]

  useEffect(() => {
    const groundTileTotal = 3
    const groundTileArray = []

    for (let index = 0; index < groundTileTotal; index++) {
      groundTileArray.push(
        <div className='ground' key={`ground${index}`}>
          <img className='ground__asset' src={groundAsset} alt="ground" />
        </div>
      )
    }
    setGroundTile(groundTileArray)
  }, [])


  return (
    <>
      {/* {groundTile} */}

      <div className='ground'
        style={{
          top: `calc(85px * ${groundArray[0][0]})`,
          left: `calc(85px * ${groundArray[0][0]})`,
        }}
      >
        <img className='ground__asset' src={groundAsset} alt="ground" />
      </div>

      <div className='ground'
        style={{
          top: `calc(85px * ${groundArray[1][0]})`,
          left: `calc(85px * ${groundArray[1][1]})`,
        }}
      >
        <img className='ground__asset' src={groundAsset} alt="ground" />
      </div>

      <div className='ground'
        style={{
          top: `calc(85px * ${groundArray[2][0]})`,
          left: `calc(85px * ${groundArray[2][1]})`,
        }}
      >
        <img className='ground__asset' src={groundAsset} alt="ground" />
      </div>
    </>
  )
}

export default ground