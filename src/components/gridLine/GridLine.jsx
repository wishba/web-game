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
          <div className='grid' key={`${indexY}/${indexX}`}>
            {`${indexY}/${indexX}`}
          </div>
        )
      }
    }
    setTiles(tileArray)
  }, [])

  return (
    <div ref={gridLineRef} className='gridLine__container'>
      <div className='gridLine'
        style={{
          gridTemplateColumns: `repeat(${gridColumn}, auto)`,
        }}
      >
        {tiles}
      </div>
    </div>
  )
}

export default GridLine