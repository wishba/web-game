import React from 'react'
import './Movement.css'
import Camera from '../screen/Camera'

function Movement() {
  return (
    <>
      <Camera cameraX={0} cameraY={0} />
      <div className='movement'>
        <button className='movement__button movement__button--up'>
          <p className='movement__arrow'>&#8593;</p>
        </button>
        <button className='movement__button movement__button--left'>
          <p className='movement__arrow'>&#8593;</p>
        </button>
        <button className='movement__button movement__button--right'>
          <p className='movement__arrow'>&#8593;</p>
        </button>
        <button className='movement__button movement__button--down'>
          <p className='movement__arrow'>&#8593;</p>
        </button>
      </div>
    </>
  )
}

export default Movement