import React from 'react'
import './Land.css'
import c1_1 from '../assets/Grass hill tiles v.2.png'

function Land() {
  function landCoordinate([x, y]) {
    const coordinate = {
      left: `calc(17px * ${x} * 5)`,
      top: `calc(17px * ${y} * 5)`,
    }
    return coordinate
  }

  function tileCoordinate([x, y]) {
    const coordinate = {
      transform: `translate(calc(${x} * var(--map-tile-width)), calc(${y} * var(--map-tile-width)))`,
    }
    return coordinate
  }

  return (
    <div className='land'>
      <div className='land__tile--container' style={landCoordinate([1, 1])}>
        <img className='land__tile' src={c1_1} alt="tile" style={tileCoordinate([0, 0])} />
      </div>

      <div className='land__tile--container' style={landCoordinate([2, 1])}>
        <img className='land__tile' src={c1_1} alt="tile" style={tileCoordinate([-1, 0])} />
      </div>

      <div className='land__tile--container' style={landCoordinate([3, 1])}>
        <img className='land__tile' src={c1_1} alt="tile" style={tileCoordinate([-2, 0])} />
      </div>
    </div>
  )
}

export default Land