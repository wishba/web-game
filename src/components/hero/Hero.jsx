import React from 'react'
import './Hero.css'
import heroAsset from '../../assets/Basic Charakter Spritesheet.png'

function Hero({ face }) {
  return (
    <div className='hero__container'>
      <img className={`hero ${face}`} src={heroAsset} alt="hero" />
      {/* <div style={{
        content: '',
        width: '8px',
        height: '8px',
        backgroundColor: 'red',
      }}></div> */}
    </div>
  )
}

export default Hero