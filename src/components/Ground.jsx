import React, { useEffect, useState } from 'react'
import './Ground.css'
import grassAsset from '../assets/Grass tiles v.2.png'
import Object from './Object'

function Ground() {
  const placementArray = [
    [1, 1], [1, 2], [1, 3],
    [2, 1], [2, 2], [2, 3],
    [3, 1], [3, 2], [3, 3],
  ]
  const assetArray = [
    [0, 0], [1, 0], [2, 0],
    [0, 1], [1, 1], [2, 1],
    [0, 2], [1, 2], [2, 2],
  ]

  const [tiles, setTiles] = useState()

  useEffect(() => {
    const tileArray = []

    for (let index = 0; index < placementArray.length; index++) {
      const element = placementArray[index]

      const tileStyle = 'ground'
      const styleTop = element[0]
      const styleLeft = element[1]
      const translateX = assetArray[index][0]
      const translateY = assetArray[index][1]
      const assetWidth = 'ground__asset'

      tileArray.push(
        // <div key={index} className='ground'
        //   style={{
        //     top: `calc(85px * ${styleTop})`,
        //     left: `calc(85px * ${styleLeft})`,
        //   }}
        // >
        <Object style={tileStyle} top={styleTop} left={styleLeft} styleWidth={assetWidth} asset={grassAsset} styleX={translateX} styleY={translateY} />
        // {/* </div> */}
      )
    }

    setTiles(tileArray)
  }, [])


  return (
    <div>
      {tiles}
    </div>
  )
}

export default Ground