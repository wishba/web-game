import React from 'react'
import GridLine from '../gridLine/GridLine'
import Object from '../object/Object'
import './Screen.css'

function Screen() {
  return (
    <div className='screen'>
      <div>
        <Object />
        {/* <GridLine /> */}
      </div>
    </div>
  )
}

export default Screen