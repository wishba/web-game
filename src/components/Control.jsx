import React from 'react'
import './Control.css'
import buttonUp from '../assets/button-up-2.png'
import buttonRight from '../assets/button-right-2.png'
import buttonDown from '../assets/button-down-2.png'
import buttonLeft from '../assets/button-left-2.png'

function Control() {
  return (
    <div className='control'>
      <img className='control__up' src={buttonUp} />
      <img className='control__left' src={buttonLeft} />
      <img className='control__right' src={buttonRight} />
      <img className='control__down' src={buttonDown} />
    </div>
  )
}

export default Control