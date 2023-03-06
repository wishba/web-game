import React from 'react'
import './Camera.css'
import Hero from './hero/Hero'
import Object from './object/Object'
import GridLine from './gridLine/GridLine'

function Camera({
  cameraX,
  cameraY,
  face,
  move
}) {
  return (
    <div className='camera'>
      <div className='camera__hero'>
        <Hero face={face} move={move} />
      </div>

      <div style={{
        transform: `translate(${cameraX}px, ${cameraY}px)`,
      }}>
        <div style={{
          transform: 'translate(calc(16px * var(--zoom) * 2), calc(16px * var(--zoom) * 2))',
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
    </div>
  )
}

export default Camera