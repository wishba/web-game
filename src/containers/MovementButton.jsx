import React from 'react'
import './MovementButton.css'

function MovementButton() {
  function handleMoveUp() {
    console.log('button up, clicked')
  }
  function handleMoveLeft() {
    console.log('button left, clicked')
  }
  function handleMoveRight() {
    console.log('button right, clicked')
  }
  function handleMoveDown() {
    console.log('button down, clicked')
  }

  return (
    <div className='button__container'>
      <button className='button button--up'
        onClick={handleMoveUp}
      >
        <p className='button__arrow'>&#8593;</p>
      </button>
      <button className='button button--left'
        onClick={handleMoveLeft}
      >
        <p className='button__arrow'>&#8593;</p>
      </button>
      <button className='button button--right'
        onClick={handleMoveRight}
      >
        <p className='button__arrow'>&#8593;</p>
      </button>
      <button className='button button--bottom'
        onClick={handleMoveDown}
      >
        <p className='button__arrow'>&#8593;</p>
      </button>
    </div>
  )
}

export default MovementButton