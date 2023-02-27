import React, { useRef } from 'react'
import './GridLine.css'
import Grid from './Grid'

function GridLine() {
  const gridLineRef = useRef(null)

  return (
    <div ref={gridLineRef} className='gridLine'>
      <Grid coordinate="tes" />
    </div>
  )
}

export default GridLine