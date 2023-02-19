import React from 'react'
import character from '../assets/character.png'
import map from '../assets/map.png'
import './Word.css'

function World() {
  return (
    <div className='world'>
      <img className='map' src={map} alt="map" />
      <img className='character' src={character} alt="character" />
    </div>
  )
}

export default World
