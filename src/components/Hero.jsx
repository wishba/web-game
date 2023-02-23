import React, { useEffect, useRef, useState } from 'react'
import './Hero.css'
import hero from '../assets/Basic Charakter Spritesheet.png'

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const { offsetLeft, offsetTop } = heroRef.current;
    console.log(`X position: ${offsetLeft}, Y position: ${offsetTop}`);
  }, []);


  return (
    <div ref={heroRef} className='hero'>
      <img className='hero__sprite' src={hero} alt="hero" />
    </div>
  )
}

export default Hero