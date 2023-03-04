import React from 'react'
import './Camera.css'
import Object from '../object/Object'
import Hero from '../hero/Hero'

function Camera({ cameraX, cameraY }) {
  return (
    <div className='camera__container'>
      <div className='camera'>
        <div className='camera__hero'>
          <Hero />
        </div>

        <div style={{
          'transform': `translate(${cameraX}px, ${cameraY}px)`
        }}>
          <Object />
        </div>
      </div>
    </div>
  )
}

export default Camera