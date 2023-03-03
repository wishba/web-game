import React from 'react'

function ObjectImage({ asset, width }) {
  // function ObjectImage({ asset, width, positionX, positionY }) {
  return (
    <div className='appTile'
    // style={{
    //   'left': `calc(var(--zoom) * 16 * ${positionX}px)`,
    //   'top': `calc(var(--zoom) * 16 * ${positionY}px)`,
    // }}
    >
      <img src={asset} alt="tile asset"
        style={{
          'width': `calc(var(--zoom) * ${width}px)`
        }}
      />
    </div>
  )
}

export default ObjectImage