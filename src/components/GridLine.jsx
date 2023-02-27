import React, { useEffect, useRef, useState } from 'react'
import './GridLine.css'
import Grid from './Grid'

function GridLine() {
  const gridLineRef = useRef(null)
  useEffect(() => {
    console.log(Math.floor(gridLineRef.current.offsetWidth / 16));
    console.log(Math.floor(gridLineRef.current.offsetHeight / 16));
  }, [])

  return (
    <div ref={gridLineRef} className='gridLine'
      style={{ border: '1px solid red', height: '100vh' }}
    >
      <Grid coordinate="tes" />
    </div>
  )
}

export default GridLine