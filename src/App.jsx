import Hero from './components/Hero'
import './App.css'
import { useEffect, useRef, useState } from 'react'

function App() {
  const heroRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const { offsetLeft, offsetTop } = heroRef.current
    console.log(`hero, position ${offsetLeft}/${offsetTop}`)
  }, []);

  function handleMoveUp() {
    console.log('button up, clicked')
    setPosition({ x: position.x, y: position.y - 1 })
    console.log(`hero, position ${position.x}/${position.y * - 1 + 1}`);
  }
  function handleMoveLeft() {
    console.log('button left, clicked')
    setPosition({ x: position.x - 1, y: position.y })
    console.log(`hero, position ${position.x - 1}/${position.y}`);
  }
  function handleMoveRight() {
    console.log('button right, clicked')
    setPosition({ x: position.x + 1, y: position.y })
    console.log(`hero, position ${position.x + 1}/${position.y}`);
  }
  function handleMoveDown() {
    console.log('button down, clicked')
    setPosition({ x: position.x, y: position.y + 1 })
    console.log(`hero, position ${position.x}/${position.y * - 1 - 1}`);
  }

  return (
    <div className="App">
      <div ref={heroRef} style={{ position: 'relative', left: position.x, top: position.y }}>
        <Hero />
      </div>

      <div className='button__container'>
        <button className='button button--up'
          onClick={handleMoveUp}
        >
          <p className='button__arrow'>&#8593;</p>
        </button>
        <button className='button button--left'
          onClick={handleMoveLeft}
        >
          <p className='button__arrow'>&#8593;</p>
        </button>
        <button className='button button--right'
          onClick={handleMoveRight}
        >
          <p className='button__arrow'>&#8593;</p>
        </button>
        <button className='button button--bottom'
          onClick={handleMoveDown}
        >
          <p className='button__arrow'>&#8593;</p>
        </button>
      </div>
    </div>
  )
}

export default App
