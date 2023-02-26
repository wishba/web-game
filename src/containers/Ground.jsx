import React, { useEffect } from 'react'
import './Ground.css'
import tileAssets from '../assets/Grass tiles v.2.png'

function Ground() {
  function groundCoordinate([x, y]) {
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

  const groundData = [[1, 1], [2, 1], [3, 1]]
  function groundTile() {
    for (let index = 0; index < groundData.length; index++) {
      console.log(`${index}) x:${groundData[index][0]} and y:${groundData[index][1]}`);
    }
  }

  useEffect(() => {
    groundTile()
  }, [])

  return (
    <div className='ground'>
      <div className='ground__tile--container' style={groundCoordinate([1, 1])}>
        <img className='ground__tile' src={tileAssets} alt="tile" style={tileCoordinate([0, 0])} />
      </div>

      <div className='ground__tile--container' style={groundCoordinate([2, 1])}>
        <img className='ground__tile' src={tileAssets} alt="tile" style={tileCoordinate([-1, 0])} />
      </div>

      <div className='ground__tile--container' style={groundCoordinate([3, 1])}>
        <img className='ground__tile' src={tileAssets} alt="tile" style={tileCoordinate([-2, 0])} />
      </div>
    </div>
  )
}

export default Ground