import React from 'react'
import './Camera.css'
import Object from '../object/Object'

function Camera() {
  return (
    <div className='camera'>
      <div style={{
        'transform': 'translate(0px, 0px)'
      }}>
        <Object />
      </div>
    </div>
  )
}

export default Camera