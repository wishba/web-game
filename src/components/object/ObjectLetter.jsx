import React from 'react'
import './Object.css'
import letterAsset from '../../assets/Basic Plants.png'

function ObjectLetter() {
  return (
    <div className='app__tile' style={{ position: 'absolute' }}>
      <img className='objectLetter' src={letterAsset} alt="letter" />
    </div>
  )
}

export default ObjectLetter