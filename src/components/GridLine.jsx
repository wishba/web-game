import React, { useEffect, useRef } from 'react'
import './GridLine.css'
import Grid from './Grid'

function GridLine() {
  const gridLineRef = useRef(null)

  useEffect(() => {
    console.log(Math.floor(gridLineRef.current.offsetWidth / 16 / 5));
    console.log(Math.floor(gridLineRef.current.offsetHeight / 16 / 5));
  }, [])

  return (
    <div ref={gridLineRef} className='gridLine'>
      <Grid coordinate="tes" />
    </div>
  )
}

export default GridLine