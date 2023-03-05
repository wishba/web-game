import React from 'react'
import './Camera.css'
import Hero from './hero/Hero'
import Object from './object/Object'
import GridLine from './gridLine/GridLine'

function Camera({ cameraX, cameraY }) {
  return (
    <div className='camera'>
      <Hero />

      <div style={{
        transform: `translate(${cameraX}px, ${cameraY}px)`,
      }}>
        <Object />

        <div style={{
          position: 'absolute',
          zIndex: '-1',
          top: '0',
        }}>
          <GridLine />
        </div>
      </div>
    </div>
  )
}

export default Camera