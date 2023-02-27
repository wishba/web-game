import React from 'react'
import './Ground.css'
import groundAsset from '../assets/Grass tiles v.2.png'

function ground() {
  return (
    <div className='ground__container'>
      <div className='ground'>
        <img className='ground__asset' src={groundAsset} alt="ground" />
      </div>

      <div className='ground'>
        <img className='ground__asset' src={groundAsset} alt="ground" />
      </div>
    </div>
  )
}

export default ground