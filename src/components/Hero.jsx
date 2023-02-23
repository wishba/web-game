import React from 'react'
import './Hero.css'
import hero from '../assets/Basic Charakter Spritesheet.png'

function Hero() {
  return (
    <>
      <img className='hero' src={hero} alt="hero" />
    </>
  )
}

export default Hero