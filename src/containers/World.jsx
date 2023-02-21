import React, { useEffect, useRef } from 'react'
import character from '../assets/character.png'
import map from '../assets/map.png'
import './Word.css'

// todo
// - make it so if user click outside the world, it still focus on world
// - change how far the scroll went or add delay between scroll

function World() {
  const worldBox = useRef(null)

  function handleMove() {
    const scrollX = worldBox.current.scrollTop
    const scrollY = worldBox.current.scrollLeft
    console.log(`X:${scrollX} Y:${scrollY}`)
  }

  useEffect(() => {
    worldBox.current.focus()
  }, [])

  return (
    <div className='world' ref={worldBox} tabIndex={0} onScroll={handleMove}>
      <img className='map' src={map} alt="map" />
      <img className='character' src={character} alt="character" />
    </div>
  )
}

export default World
