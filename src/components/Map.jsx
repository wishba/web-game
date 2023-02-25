import React from 'react'
import './Map.css'
import c1_1 from '../assets/Grass hill tiles v.2.png'

function Map() {
  return (
    <div className='map'>
      <div className='map__1-1'>
        <img className='tile__1-1' src={c1_1} alt="tile" />
      </div>
      <div className='map__2-1'>
        <img className='tile__2-1' src={c1_1} alt="tile" />
      </div>
    </div>
  )
}

export default Map