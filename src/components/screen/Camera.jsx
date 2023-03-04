import React from 'react'
import './Camera.css'
import Object from '../object/Object'

function Camera({ cameraX, cameraY }) {
  return (
    <div className='camera'>
      <div style={{
        'transform': `translate(${cameraX}px, ${cameraY}px)`
      }}>
        <Object />
      </div>
    </div>
  )
}

export default Camera