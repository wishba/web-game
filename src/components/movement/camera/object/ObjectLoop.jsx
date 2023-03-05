import React, { useEffect, useState } from 'react'

function ObjectLoop({ placement, tileCoordinate, tileAsset }) {
  const [tile, setTile] = useState()
  useEffect(() => {
    const tileArray = []
    for (let index = 0; index < placement.length; index++) {
      tileArray.push(
        <div key={index} className='object__tile'
          style={{
            top: `calc(var(--zoom) * 16px * ${placement[index][0]})`,
            left: `calc(var(--zoom) * 16px * ${placement[index][1]})`,
          }}
        >
          <div style={{
            transform: `
                translate(
                  calc(var(--zoom) * 16px * -${tileCoordinate[index][0]}), 
                  calc(var(--zoom) * 16px * -${tileCoordinate[index][1]}))`
          }}>
            {tileAsset}
          </div>
        </div>
      )
    }
    setTile(tileArray)
  }, [])

  return (<>{tile}</>)
}

export default ObjectLoop