import React from 'react'
import './Control.css'
import buttonUp from '../assets/button-up-2.png'
import buttonRight from '../assets/button-right-2.png'
import buttonDown from '../assets/button-down-2.png'
import buttonLeft from '../assets/button-left-2.png'

function Control() {
  let interval
  const down = () => {
    interval = setInterval(() => {
      console.log('hold')
    }, 500)
  }
  const up = () => {
    clearInterval(interval)
  }

  return (
    <div className='control'>
      <button className='control__up'
        onMouseDown={down}
        onMouseUp={up}
      >
        <img src={buttonUp} />
      </button>
      <button className='control__left'
        onMouseDown={down}
        onMouseUp={up}
      >
        <img src={buttonLeft} />
      </button>
      <button className='control__right'
        onMouseDown={down}
        onMouseUp={up}
      >
        <img src={buttonRight} />
      </button>
      <button className='control__down'
        onMouseDown={down}
        onMouseUp={up}
      >
        <img src={buttonDown} />
      </button>
    </div>
  )
}

export default Control