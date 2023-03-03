import React from 'react'

function ObjectImage({ asset, width }) {
  return (
    <img src={asset} alt="tile asset"
      style={{ 'width': `calc(var(--zoom) * ${width}px)` }}
    />
  )
}

export default ObjectImage