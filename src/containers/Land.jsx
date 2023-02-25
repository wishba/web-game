import React from 'react'
import './Land.css'
import c1_1 from '../assets/Grass hill tiles v.2.png'

function Land() {
  function landCoordinate([x, y]) {
    const coordinate = {
      top: `calc(17px * ${x} * 5)`,
      left: `calc(17px * ${y} * 5)`,
    }
    return coordinate
  }

  return (
    <div className='land'>
      <div className='land__tile--container' style={landCoordinate([1, 1])}>
        <img className='land__tile' src={c1_1} alt="tile"
          style={{
            transform: 'translate(0, 0)',
          }}
        />
      </div>
      <div className='land__tile--container' style={landCoordinate([1, 2])}>
        <img className='land__tile' src={c1_1} alt="tile"
          style={{
            transform: 'translate(calc(-1 * var(--map-tile-width)), 0)',
          }}
        />
      </div>
    </div>
  )
}

export default Land