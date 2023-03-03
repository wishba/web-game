import React from 'react'

function Tile({ tileIndex, tileElement, tileAssetCoordinate }) {
  return (
    <div className='groundBridge'
      style={{
        top: `calc(85px * ${tileElement[0]})`,
        left: `calc(85px * ${tileElement[1]})`,
      }}
    >
      <img className='groundBridge__asset' src={tileElement} alt="ground"
        style={{ transform: `translate(calc(-16px * 5 * ${tileAssetCoordinate[tileIndex][0]}), calc(-16px * 5 * ${tileAssetCoordinate[tileIndex][1]}))` }}
      />
    </div>
  )
}

export default Tile