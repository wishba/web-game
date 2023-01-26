import React from 'react'
import './Control.css'
import buttonUp from '../assets/button-up-2.png'
import buttonRight from '../assets/button-right-2.png'
import buttonDown from '../assets/button-down-2.png'
import buttonLeft from '../assets/button-left-2.png'

function Control() {
  return (
    <div className='control'>
      <button className='control__up'>
        <img src={buttonUp} />
      </button>
      <button className='control__left'>
        <img src={buttonLeft} />
      </button>
      <button className='control__right'>
        <img src={buttonRight} />
      </button>
      <button className='control__down'>
        <img src={buttonDown} />
      </button>
    </div>
  )
}

export default Control