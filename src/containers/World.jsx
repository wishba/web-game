import React from 'react'
import character from '../assets/character.png'
import map from '../assets/map.png'
import './Word.css'

function World() {
  return (
    <div>
      <div className='character__camera'>
        <img className='character' src={character} alt="character" />
      </div>
      <img src={map} alt="map" />
    </div>
  )
}

export default World
