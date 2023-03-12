import React, { useEffect, useState } from 'react'
import './Ground.css'

function GroundTiles({ placement, tileCoordinate, asset, width }) {
  const [tile, setTile] = useState()
  useEffect(() => {
    const tileArray = []
    for (let index = 0; index < placement.length; index++) {
      tileArray.push(
        // <div key={index}
        <div key={index} className='app__tile'
          style={{
            position: 'absolute',
            // left: `calc(var(--zoom) * 16px * ${placement[index][0]})`,
            // top: `calc(var(--zoom) * 16px * ${placement[index][1]})`,
          }}
        >
          <div style={{
            transform: `
              translate(
                calc(var(--zoom) * 16px * -${tileCoordinate[index][0]}), 
                calc(var(--zoom) * 16px * -${tileCoordinate[index][1]}))`
          }}>
            <img src={asset} alt="tile asset"
              style={{ width: `calc(var(--zoom) * ${width}px)` }}
            />
          </div>
        </div>
      )
    }
    setTile(tileArray)
  }, [])

  return (<>{tile}</>)
}

export default GroundTiles