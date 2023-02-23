import React from 'react'
import './MovementButton.css'

function MovementButton() {
  return (
    <div className='button__container'>
      <button className='button'>
        <p className='button--arrow'>&#8593;</p>
      </button>
      <button className='button button--left'>
        <p className='button--arrow'>&#8593;</p>
      </button>
      <button className='button button--right'>
        <p className='button--arrow'>&#8593;</p>
      </button>
      <button className='button button--bottom'>
        <p className='button--arrow'>&#8593;</p>
      </button>
    </div>
  )
}

export default MovementButton