import React from 'react'
import './Grid.css'

function Grid({ coordinate }) {
  return (
    <div className='grid' >
      {coordinate}
    </div>
  )
}

export default Grid