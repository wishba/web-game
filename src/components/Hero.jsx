import './Hero.css'
import hero from '../assets/Basic Charakter Spritesheet.png'

function Hero() {
  return (
    <div className='hero'>
      <img className='hero__sprite' src={hero} alt="hero" />
    </div>
  )
}

export default Hero