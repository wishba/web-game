import React from 'react'
import './Dialogue.css'

function Dialogue({ text, ok, next, yesNo }) {
  const dialogueOk = ok
  const dialogueNext = next
  const dialogueYesNo = yesNo

  return (
    <div className='dialogue'>
      <br />
      <p>{text}</p>
      <br />
      {dialogueOk === true ? <button>ok(z)</button> : ''}
      {dialogueNext === true ? <button>next(z)</button> : ''}
      {dialogueYesNo === true ? <button>yes(z)</button> : ''}
      {dialogueYesNo === true ? <button>no(x)</button> : ''}
      {/* {dialogueOk === true ? <button className='dialogue__button'>ok(z)</button> : ''}
      {dialogueNext === true ? <button className='dialogue__button'>next(z)</button> : ''}
      {dialogueYesNo === true ? <button className='dialogue__button'>yes(z)</button> : ''}
      {dialogueYesNo === true ? <button>no(x)</button> : ''} */}
    </div>
  )
}

export default Dialogue