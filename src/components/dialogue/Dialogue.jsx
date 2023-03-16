import React from 'react'
import './Dialogue.css'

function Dialogue({ text, choice, display }) {
  return (
    <div className='dialogue' style={{ display: display }}>
      <br />
      <p>{text}</p>
      <br />
      {choice === 'ok' ? <button className='dialogue__button'>ok(z)</button> : ''}
      {choice === 'next' ? <button className='dialogue__button'>next(z)</button> : ''}
      {choice === 'yesNo' ? <div className='dialogue__button'><button>yes(z)</button><button>no(x)</button></div> : ''}
    </div>
  )
}

export default Dialogue