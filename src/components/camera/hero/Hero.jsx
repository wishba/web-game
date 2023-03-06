import React from 'react'
import './Hero.css'
import heroAsset from '../../../assets/Basic Charakter Spritesheet.png'

function Hero({ face, move }) {
  return (
    <div className='hero__container'
      style={{ transform: `${move}` }}
    // style={{ transform: 'translateX(50px)' }}
    >
      <div style={{
        content: '',
        width: '10px',
        height: '10px',
        backgroundColor: 'red',
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: '1',
        transform: 'translate(-50%, -50%)',
      }}></div>
      <img className={`hero ${face} hero--left`} src={heroAsset} alt="hero" />
    </div>
  )
}

export default Hero