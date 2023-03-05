import React, { useEffect, useRef, useState } from 'react'
import './GridLine.css'

function GridLine() {
  const gridLineRef = useRef()
  const [tiles, setTiles] = useState()
  const [gridColumn, setGridColumn] = useState()

  useEffect(() => {
    const tileHorizontal = Math.floor(gridLineRef.current.offsetWidth / 16 / 5)
    const tileVertical = Math.floor(gridLineRef.current.offsetHeight / 16 / 5)

    setGridColumn(tileHorizontal)

    const tileArray = []
    for (let indexY = 0; indexY < tileVertical; indexY++) {
      for (let indexX = 0; indexX < tileHorizontal; indexX++) {
        tileArray.push(
          <div className='gridLine__tile' key={`${indexY}/${indexX}`}>
            {`${indexY}/${indexX}`}
          </div>
        )
      }
    }
    setTiles(tileArray)
  }, [])

  return (
    <div ref={gridLineRef}>
      <div className='gridLine'
        style={{
          gridTemplateColumns: `repeat(${gridColumn}, auto)`,
          height: 'calc(var(--zoom) * 16px * 6)',
          width: 'calc(var(--zoom) * 16px * 14)',
        }}
      >
        {tiles}
      </div>
    </div>
  )
}

export default GridLine