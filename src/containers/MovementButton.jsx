import React from 'react'
import './MovementButton.css'

function MovementButton() {
  return (
    <div className='button__container'>
      <button className='button button--up'>
        <p className='button__arrow'>&#8593;</p>
      </button>
      <button className='button button--left'>
        <p className='button__arrow'>&#8593;</p>
      </button>
      <button className='button button--right'>
        <p className='button__arrow'>&#8593;</p>
      </button>
      <button className='button button--bottom'>
        <p className='button__arrow'>&#8593;</p>
      </button>
    </div>
  )
}

export default MovementButton