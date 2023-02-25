import React from 'react'
import './Map.css'
import c1_1 from '../assets/Grass hill tiles v.2.png'

function Map() {
  return (
    <div className='map'>
      <div className='map__tile'>
        <img className='tile__1-1' src={c1_1} alt="tile"
          style={{
            // position: 'absolute'
          }}
        />
      </div>
    </div>
  )
}

export default Map