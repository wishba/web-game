import React from 'react'
import './Ground.css'
// import grassAsset from '../assets/Grass tiles v.2.png'

function Object({ asset }) {
  return (
    <div>
      <img src={asset} alt="grass asset" />
    </div>
  )
}

export default Object