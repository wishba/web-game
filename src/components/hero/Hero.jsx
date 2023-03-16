import React from 'react'
import './Hero.css'
import heroAsset from '../../assets/Basic Charakter Spritesheet.png'

function Hero({ facing, emotion }) {
  return (
    <div>
      <p className='hero__emotion'
        style={{ display: `${emotion}` }}
      >!</p>
      <div className='hero__container'>
        <img className={`hero ${facing}`} src={heroAsset} alt="hero" />
      </div>
    </div>
  )
}

export default Hero