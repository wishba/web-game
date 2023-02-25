import React from 'react'
import './Land.css'
import c1_1 from '../assets/Grass hill tiles v.2.png'

function Land() {
  return (
    <div className='land'>
      <div className='land__tile land__1-1--container'>
        <img className='land__1-1' src={c1_1} alt="tile" />
      </div>
      <div className='land__tile land__2-1--container'>
        <img className='land__2-1' src={c1_1} alt="tile" />
      </div>
    </div>
  )
}

export default Land