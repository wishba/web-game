import React from 'react'
import './ObjectTile.css'

function ObjectTile({ asset }) {
  return (
    <div className='tile--size'>
      <img src={asset} alt="tile" />
    </div>
  )
}

export default ObjectTile