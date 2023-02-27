import React, { useEffect, useState } from 'react'
import './Ground.css'
import groundAsset from '../assets/Grass tiles v.2.png'

function ground() {
  const groundArray = [
    [1, 1], [1, 2], [1, 3],
  ]

  const [groundTile, setGroundTile] = useState()

  useEffect(() => {
    const groundTileArray = []

    for (let index = 0; index < groundArray.length; index++) {
      const element = groundArray[index];
      console.log(`${element[0]}:${element[1]}`);

      groundTileArray.push(
        <div key={index} className='ground'
          style={{
            top: `calc(85px * ${element[0]})`,
            left: `calc(85px * ${element[1]})`,
          }}
        >
          <img className='ground__asset' src={groundAsset} alt="ground" />
        </div>
      )
    }

    setGroundTile(groundTileArray)
  }, [])


  return (
    <div>
      {groundTile}

      {/* <div className='ground'
        style={{
          top: `calc(85px * ${groundArray[0][0]})`,
          left: `calc(85px * ${groundArray[0][0]})`,
        }}
      >
        <img className='ground__asset' src={groundAsset} alt="ground" />
      </div> */}

      {/* <div className='ground'
        style={{
          top: `calc(85px * ${groundArray[1][0]})`,
          left: `calc(85px * ${groundArray[1][1]})`,
        }}
      >
        <img className='ground__asset' src={groundAsset} alt="ground" />
      </div> */}

      {/* <div className='ground'
        style={{
          top: `calc(85px * ${groundArray[2][0]})`,
          left: `calc(85px * ${groundArray[2][1]})`,
        }}
      >
        <img className='ground__asset' src={groundAsset} alt="ground" />
      </div> */}
    </div>
  )
}

export default ground