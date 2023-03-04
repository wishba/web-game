import './Hero.css'
import heroAsset from '../assets/Basic Charakter Spritesheet.png'

function Hero({ facing }) {
  return (
    <div className='hero'>
      <img className={`hero__asset hero--${facing}`} src={heroAsset} alt="hero" />
    </div>
  )
}

export default Hero