import React from 'react'
import './Land.css'
import c1_1 from '../assets/Grass hill tiles v.2.png'

function Land() {
  return (
    <div className='land'>
      <div className='land__tile--container'
        style={{
          top: 'calc(17px * 1 * 5)',
          left: 'calc(17px * 1 * 5)',
        }}
      >
        <img className='land__tile' src={c1_1} alt="tile" />
      </div>
      <div className='land__tile--container'
        style={{
          top: 'calc(17px * 1 * 5)',
          left: 'calc(17px * 2 * 5)',
        }}
      >
        <img className='land__tile' src={c1_1} alt="tile"
          style={{
            transform: 'translateX(calc(-1 * var(--map-tile-width)))',
          }}
        />
      </div>
    </div>
  )
}

export default Land