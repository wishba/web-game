import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import GridLine from './components/GridLine'
import Ground from './components/Ground'
import Hero from './components/Hero'

function App() {
  const styles = { '--zoom': '5' }
  const [position, setPosition] = useState({ x: 85, y: 85 - 30 })
  const [facingState, setFacingState] = useState('front')
  const moveIntervalRef = useRef(null)
  const animationIntervalRef = useRef(null)

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

    moveIntervalRef.current = setInterval(() => {
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
    }, 20)

    let counter = 0
    function count() {
      counter++
      if (counter > 4) {
        counter = 1
      }
    }
    animationIntervalRef.current = setInterval(() => {
      switch (direction) {
        case 'up':
          count()
          setFacingState(`u${counter}`)
          return
        case 'left':
          count()
          setFacingState(`l${counter}`)
          return
        case 'right':
          count()
          setFacingState(`r${counter}`)
          return
        case 'down':
          count()
          setFacingState(`f${counter}`)
          return
      }
    }, 300)
  }
  function handleMoveStop() {
    clearInterval(moveIntervalRef.current)
    clearInterval(animationIntervalRef.current)
  }

  useEffect(() => {
    if (position.x < 85 * 1) {
      position.x = 85 * 1
    }
    if (position.x > 85 * 3) {
      position.x = 85 * 3
    }
    if (position.y < 85 * 1 - 30) {
      position.y = 85 * 1 - 30
    }
    if (position.y > 85 * 3 - 30) {
      position.y = 85 * 3 - 30
    }
  }, [position])

  return (
    <div style={styles}>
      <div className='button__container'>
        <button className='button button--up'
          onMouseDown={() => {
            handleMoveStart('up')
            setFacingState('back')
          }}
          onMouseUp={() => {
            handleMoveStop()
            let count = 0
            const intervalBack = setInterval(() => {
              count++
              if (count == 1) {
                setFacingState('back')
                clearInterval(intervalBack)
              }
            }, 250)
          }}
        >
          <p className='button__arrow'>&#8593;</p>
        </button>

        <button className='button button--left'
          onMouseDown={() => {
            handleMoveStart('left')
            setFacingState('left')
          }}

          onMouseUp={() => {
            handleMoveStop()
            let count = 0
            const intervalBack = setInterval(() => {
              count++
              if (count == 1) {
                setFacingState('left')
                clearInterval(intervalBack)
              }
            }, 250)
          }}
        >
          <p className='button__arrow'>&#8593;</p>
        </button>

        <button className='button button--right'
          onMouseDown={() => {
            handleMoveStart('right')
            setFacingState('right')
          }}

          onMouseUp={() => {
            handleMoveStop()
            let count = 0
            const intervalBack = setInterval(() => {
              count++
              if (count == 1) {
                setFacingState('right')
                clearInterval(intervalBack)
              }
            }, 250)
          }}
        >
          <p className='button__arrow'>&#8593;</p>
        </button>

        <button className='button button--bottom'
          onMouseDown={() => {
            handleMoveStart('down')
            setFacingState('front')
          }}
          onMouseUp={() => {
            handleMoveStop()
            let count = 0
            const intervalBack = setInterval(() => {
              count++
              if (count == 1) {
                setFacingState('front')
                clearInterval(intervalBack)
              }
            }, 250)
          }}
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
        <Hero facing={facingState} />
      </div>

      <Ground />

      {/* <GridLine /> */}
    </div>
  )
}

export default App