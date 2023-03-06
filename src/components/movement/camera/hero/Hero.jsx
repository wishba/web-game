import React from 'react'
import './Hero.css'
import heroAsset from '../../../../assets/Basic Charakter Spritesheet.png'

function Hero({ face }) {
  return (
    <div className='hero__container'>
      <img className={`hero ${face}`} src={heroAsset} alt="hero" />
      {/* <img className='hero up-1' src={heroAsset} alt="hero" /> */}
    </div>
  )
}

export default Hero