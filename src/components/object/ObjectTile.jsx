import React from 'react'
import './ObjectTile.css'

function ObjectTile({ asset, assetWidth }) {
  return (
    <div className='tile--size'>
      <img src={asset} alt="tile"
        style={{
          'width': `calc(var(--zoom) * ${assetWidth}px)`
        }}
      />
    </div>
  )
}

export default ObjectTile