import React from 'react'
import './Camera.css'
import Hero from './hero/Hero'
import Object from './object/Object'
import GridLine from './gridLine/GridLine'

function Camera({ cameraX, cameraY }) {
  return (
    <div>
      <Hero />

      <div style={{
        'transform': `translate(${cameraX}px, ${cameraY}px)`,
      }}>
        <Object />
        <GridLine />
      </div>
    </div>
  )
}

export default Camera