import './App.css'
import { useRef, useState } from 'react'
import Hero from './components/Hero'
import MapGrid from './containers/MapGrid'

function App() {
  const intervalRef = useRef(null)

  const [position, setPosition] = useState({ x: 0, y: 0 })

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

  return (
    <div className="App">
      <MapGrid />

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
