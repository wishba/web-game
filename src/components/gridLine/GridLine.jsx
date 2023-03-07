import React from 'react'
import './GridLine.css'

function GridLine({ width, height }) {
  const areaWidth = width
  const areaHeight = height
  const tileArray = []

  for (let indexY = 0; indexY < areaHeight; indexY++) {
    for (let indexX = 0; indexX < areaWidth; indexX++) {
      tileArray.push(
        <div key={`${indexX}/${indexY}`} className='gridLine'>
          {`${indexX}/${indexY}`}
        </div>
      )
    }
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${areaWidth}, auto)`,
      width: 'fit-content',
      position: 'absolute',
      zIndex: '0',
    }}>
      {tileArray}
    </div>
  )
}

export default GridLine