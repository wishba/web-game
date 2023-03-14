import React from 'react'
import './Hero.css'
import heroAsset from '../../assets/Basic Charakter Spritesheet.png'

function Hero({ face }) {
  return (
    <div>
      <p className='hero__emotion'>!</p>
      <div className='hero__container'>
        <img className={`hero ${face}`} src={heroAsset} alt="hero" />
      </div>
    </div>
  )
}

export default Hero