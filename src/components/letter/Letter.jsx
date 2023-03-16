import React from 'react'
import './Letter.css'

function Letter({ display }) {
  return (
    <div className='letter' style={{ display: display }} >
      <button>close(x)</button>
      <p>Dear Adventurer,</p>
      <br />
      <p>
        To claim your treasure, you must cross the narrow and dangerous bridge that
        connects our island to the mainland. The sea below is infested with dangerous
        creatures, and we urge you to stay away from the edges. Though the journey is
        perilous, the treasure is worth the risk. May fortune favor the brave.
      </p>
      <br />
      <p>Sincerely,</p>
      <p>The Guardians of the Treasure Island</p>
    </ div>
  )
}

export default Letter