import React from 'react'
import './MovementButton.css'

function MovementButton() {
  return (
    <div className='movementButton'>
      <button>up</button>
      <button>left</button>
      <button>right</button>
      <button>down</button>
    </div>
  )
}

export default MovementButton