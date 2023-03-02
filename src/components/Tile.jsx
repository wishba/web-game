import React from 'react'

function Tile({ tes1, tes2, tes3 }) {
  return (
    <div className='groundBridge'
      style={{
        top: `calc(85px * ${tes2[0]})`,
        left: `calc(85px * ${tes2[1]})`,
      }}
    >
      <img className='groundBridge__asset' src={tes2} alt="ground"
        style={{ transform: `translate(calc(-16px * 5 * ${tes3[tes1][0]}), calc(-16px * 5 * ${tes3[tes1][1]}))` }}
      />
    </div>
  )
}

export default Tile