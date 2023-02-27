import React, { useEffect, useState } from 'react'
import './Ground.css'
import groundAsset from '../assets/Grass tiles v.2.png'

function ground() {
  const [groundTile, setGroundTile] = useState()

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
          top: 'calc(85px * 1)',
          left: 'calc(85px * 1)',
        }}
      >
        <img className='ground__asset' src={groundAsset} alt="ground" />
      </div>

      <div className='ground'
        style={{
          top: 'calc(85px * 1)',
          left: 'calc(85px * 2)',
        }}
      >
        <img className='ground__asset' src={groundAsset} alt="ground" />
      </div>

      <div className='ground'
        style={{
          top: 'calc(85px * 1)',
          left: 'calc(85px * 3)',
        }}
      >
        <img className='ground__asset' src={groundAsset} alt="ground" />
      </div>
    </>
  )
}

export default ground