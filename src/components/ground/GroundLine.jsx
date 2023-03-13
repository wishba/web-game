import React from 'react'
import './GroundLine.css'

function GroundLine({ horizontal, vertical }) {
  const lineHorizontal = horizontal
  const lineVertical = vertical

  const tileArray = []
  for (let indexY = 0; indexY < lineVertical; indexY++) {
    for (let indexX = 0; indexX < lineHorizontal; indexX++) {
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
      gridTemplateColumns: `repeat(${lineHorizontal}, auto)`,
      width: 'fit-content',
    }}>
      {tileArray}
    </div>
  )
}

export default GroundLine