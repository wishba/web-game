import React, { useEffect, useRef } from 'react'
import character from '../assets/character.png'
import map from '../assets/map.png'
import './Word.css'

function World() {
  const worldBox = useRef(null)
  useEffect(() => {
    worldBox.current.focus()
  }, [])

  return (
    <div className='world' ref={worldBox} tabIndex={0}>
      <img className='map' src={map} alt="map" />
      <img className='character' src={character} alt="character" />
    </div>
  )
}

export default World
