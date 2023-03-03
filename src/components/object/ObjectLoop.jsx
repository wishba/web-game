import React, { useEffect, useState } from 'react'

function ObjectLoop({ placement, tileCoordinate, tileAsset }) {
  const [tile, setTile] = useState()
  useEffect(() => {
    const tileArray = []
    for (let index = 0; index < placement.length; index++) {
      tileArray.push(
        <div key={index} className='appTile__container'
          style={{
            'top': `calc(var(--zoom) * 16 * ${placement[index][0]}px)`,
            'left': `calc(var(--zoom) * 16 * ${placement[index][1]}px)`,
          }}
        >
          <div className='appTile'>
            <div style={{
              'transform': `
                translate(
                  calc(var(--zoom) * 16 * -${tileCoordinate[index][0]}px), 
                  calc(var(--zoom) * 16 * -${tileCoordinate[index][1]}px))`
            }}>
              {tileAsset}
            </div>
          </div>
        </div>
      )
    }
    setTile(tileArray)
  }, [])

  return (<>{tile}</>)
}

export default ObjectLoop