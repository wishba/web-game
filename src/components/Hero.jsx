import './Hero.css'
import heroAsset from '../assets/Basic Charakter Spritesheet.png'

function Hero() {
  return (
    <div className='hero'>
      <img className='hero__asset' src={heroAsset} alt="hero" />
    </div>
  )
}

export default Hero