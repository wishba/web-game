import React from 'react'

function ObjectImage({ asset, width }) {
  return (
    <div className='appTile'>
      <img src={asset} alt="tile asset"
        style={{
          'width': `calc(var(--zoom) * ${width}px)`
        }}
      />
    </div>
  )
}

export default ObjectImage