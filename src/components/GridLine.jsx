import React, { useEffect, useRef, useState } from 'react'
import './GridLine.css'
import Grid from './Grid'

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
        tileArray.push(<Grid key={`${indexY}/${indexX}`} coordinate={`${indexY}/${indexX}`} />)
      }
    }
    setTiles(tileArray)
  }, [])

  return (
    <div ref={gridLineRef}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridColumn}, auto)`,
          width: 'fit-content',
          height: '100vh',
        }}
      >
        {tiles}
      </div>
    </div>
  )
}

export default GridLine