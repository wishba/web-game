import React from 'react'
import './Ground.css'
// import grassAsset from '../assets/Grass tiles v.2.png'

function Object({ placement, asset }) {
  return (
    <div className='ground'
      style={{
        top: `calc(85px * ${placement[0]})`,
        left: `calc(85px * ${placement[1]})`,
      }}
    >
      <img className='ground__asset' src={asset} alt="grass asset" />
    </div>
  )
}

export default Object