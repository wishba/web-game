import React from 'react'
import './Camera.css'
import Object from '../object/Object'
import Hero from '../hero/Hero'
import GridLine from '../gridLine/GridLine'

function Camera({ cameraX, cameraY }) {
  return (
    <div className='camera__container'>
      {/* <div className='camera'> */}
      {/* <div className='camera__hero'> */}
      <Hero />
      {/* </div> */}

      <div style={{
        // 'transform':
        //   `translate(
        //     calc(var(--zoom) * 16px * 2 + ${cameraX}px), 
        //     calc(var(--zoom) * 16px * 2 + ${cameraY}px)
        //   )`,
        // 'transform':
        //   `translate(
        //     calc(var(--zoom) * 16px * ${cameraX}), 
        //     calc(var(--zoom) * 16px * ${cameraY})
        //   )`,
        'transform': `translate(${cameraX}px, ${cameraY}px)`,
        // 'transform': `translate(${cameraX}px, ${cameraY}px)`,
      }}>
        <Object />
        <GridLine />
      </div>
      <div className='camera'></div>
      {/* </div> */}
    </div>
  )
}

export default Camera