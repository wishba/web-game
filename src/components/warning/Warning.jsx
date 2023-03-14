import React from 'react'
import './Warning.css'

function Warning() {
  return (
    <div className='warning'>
      <p>you've found a letter, do you want to read it?</p>
      <button>yes(z)</button>
      <button>no(x)</button>
    </div>
  )
}

export default Warning