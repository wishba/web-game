import React from 'react'
import character from '../assets/character.png'
import map from '../assets/map.png'
import './Word.css'

function World() {
  return (
    <div>
      <img className='character' src={character} alt="character" />
      <img className='map' src={map} alt="map" />
    </div>
  )
}

export default World
