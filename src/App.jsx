import Hero from './components/Hero'
import './App.css'
import { useEffect, useRef, useState } from 'react'

function App() {
  const heroRef = useRef(null)
  const intervalRef = useRef(null)
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

  function handleMoveRightStart() {
    setPosition({ x: position.x + 1, y: position.y })
    intervalRef.current = setInterval(() => {
      setPosition((prevState) => ({ x: prevState.x + 1, y: prevState.y }))
    }, 25)
  }
  function handleMoveRightStop() {
    clearInterval(intervalRef.current)
  }

  function handleMoveDown() {
    console.log('button down, clicked')
    setPosition({ x: position.x, y: position.y + 1 })
    console.log(`hero, position ${position.x}/${position.y * - 1 - 1}`);
  }


  function handleMoveStart(direction) {
    setPosition((prevState) => {
      switch (direction) {
        case 'up':
          return { x: position.x, y: position.y - 1 }
        case 'left':
          return { x: position.x - 1, y: position.y }
        case 'right':
          return { x: position.x + 1, y: position.y }
        case 'down':
          return { x: position.x, y: position.y + 1 }
        default:
          return prevState
      }
    })

    intervalRef.current = setInterval(() => {
      switch (direction) {
        case 'up':
          return setPosition((prevState) => ({ x: prevState.x, y: prevState.y - 1 }))
        case 'left':
          return setPosition((prevState) => ({ x: prevState.x - 1, y: prevState.y }))
        case 'right':
          return setPosition((prevState) => ({ x: prevState.x + 1, y: prevState.y }))
        case 'down':
          return setPosition((prevState) => ({ x: prevState.x, y: prevState.y + 1 }))
      }
    }, 25)
  }

  function handleMoveStop() {
    clearInterval(intervalRef.current)
  }

  return (
    <div className="App">
      <div ref={heroRef}
        style={{ position: 'relative', left: position.x, top: position.y }}
      >
        <Hero />
      </div>

      <div className='button__container'>
        <button className='button button--up'
          onMouseDown={() => handleMoveStart('up')}
          onMouseUp={handleMoveStop}
        >
          <p className='button__arrow'>&#8593;</p>
        </button>
        <button className='button button--left'
          onMouseDown={() => handleMoveStart('left')}
          onMouseUp={handleMoveStop}
        >
          <p className='button__arrow'>&#8593;</p>
        </button>
        <button className='button button--right'
          onMouseDown={() => handleMoveStart('right')}
          onMouseUp={handleMoveStop}
        >
          <p className='button__arrow'>&#8593;</p>
        </button>
        <button className='button button--bottom'
          onMouseDown={() => handleMoveStart('down')}
          onMouseUp={handleMoveStop}
        >
          <p className='button__arrow'>&#8593;</p>
        </button>
      </div>
    </div>
  )
}

export default App
