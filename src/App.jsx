import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import GridLine from './components/GridLine'
import Ground from './components/Ground'
import Hero from './components/Hero'

function App() {
  const styles = { '--zoom': '5' }

  const intervalRef = useRef(null)

  const [position, setPosition] = useState({ x: 85, y: 85 })

  function handleMoveStart(direction) {
    setPosition(() => {
      switch (direction) {
        case 'up':
          return { x: position.x, y: position.y - 1 }
        case 'left':
          return { x: position.x - 1, y: position.y }
        case 'right':
          return { x: position.x + 1, y: position.y }
        case 'down':
          return { x: position.x, y: position.y + 1 }
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

  useEffect(() => {
    console.log(position);

    if (position.x < 85 * 1) {
      position.x = 85 * 1
    }
    if (position.x > 85 * 3) {
      position.x = 85 * 3
    }
    if (position.y < 85 * 1) {
      position.y = 85 * 1
    }
    if (position.y > 85 * 3) {
      position.y = 85 * 3
    }
  }, [position])

  return (
    <div style={styles}>
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

      <div
        style={{
          width: 'fit-content',
          position: 'relative',
          left: position.x,
          top: position.y
        }}
      >
        <Hero />
      </div>

      <Ground />

      <GridLine />
    </div>
  )
}

export default App