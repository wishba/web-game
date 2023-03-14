import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import data from './data/data.json'
import soundStep from './assets/Bubble heavy 1.wav'
import Hero from './components/hero/Hero'
import Ground from './components/ground/Ground'
import letterAsset from './assets/Basic Plants.png'

function App() {
  const styles = {
    '--zoom': '5',
    '--tile': 'calc(var(--zoom) * 16px)',
    '--font-size': 'calc(var(--zoom) * 10px)',
  }

  const [positionX, setPositionX] = useState(-80)
  const [positionY, setPositionY] = useState(-80)
  const [press, setPress] = useState(false)
  const [pressUp, setPressUp] = useState(false)
  const [pressLeft, setPressLeft] = useState(false)
  const [pressRight, setPressRight] = useState(false)
  const [pressDown, setPressDown] = useState(false)
  const [face, setFace] = useState()
  const [key, setKey] = useState()

  const intervalMovement = useRef()
  const intervalAnimation = useRef()

  const positionXY = [
    Math.round(positionX * -1 / 40),
    Math.round(positionY * -1 / 40)
  ]
  const positionTile = [
    Math.round(positionX * -1 / 80),
    Math.round(positionY * -1 / 80)
  ]

  function step() { const sound = new Audio(soundStep); sound.play(); }

  function handleMoveStart(direction) {
    intervalMovement.current = setInterval(() => {
      switch (direction) {
        case 'up':
          setPositionY(positionY => positionY + 1)
          setPressUp(true)
          return
        case 'left':
          setPositionX(positionX => positionX + 1)
          setPressLeft(true)
          return
        case 'right':
          setPositionX(positionX => positionX - 1)
          setPressRight(true)
          return
        case 'down':
          setPositionY(positionY => positionY - 1)
          setPressDown(true)
          return
      }
    }, 25)
  }

  function handleAnimationStart(direction) {
    let count = 0
    function counter() { count++; if (count > 4) { count = 1 } }

    intervalAnimation.current = setInterval(() => {
      switch (direction) {
        case 'up':
          counter()
          setFace(`up--${count}`)
          step()
          return
        case 'left':
          counter()
          setFace(`left--${count}`)
          step()
          return
        case 'right':
          counter()
          setFace(`right--${count}`)
          step()
          return
        case 'down':
          counter()
          setFace(`down--${count}`)
          step()
          return
      }
    }, 250)
  }

  function handleStop() {
    clearInterval(intervalMovement.current)
    clearInterval(intervalAnimation.current)

    if (pressUp === true) { setPressUp(false) }
    if (pressLeft === true) { setPressLeft(false) }
    if (pressRight === true) { setPressRight(false) }
    if (pressDown === true) { setPressDown(false) }
  }

  function endFace(facing) {
    setTimeout(() => { setFace(`${facing}`); step(); }, 300)
  }

  useEffect(() => {
    console.log(`${positionX}/${positionY} | ${positionXY} | ${positionTile}`);

    function containsPosition(array, positionArray) {
      return array.some(element =>
        element[0] === positionArray[0] &&
        element[1] === positionArray[1]
      )
    }

    if (!containsPosition(data.ground, positionXY)) {
      if (pressUp === true) { setPositionY(positionY - 1) }
      if (pressLeft === true) { setPositionX(positionX - 1) }
      if (pressRight === true) { setPositionX(positionX + 1) }
      if (pressDown === true) { setPositionY(positionY + 1) }
    }
  }, [positionX, positionY])

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      setPress(true)
      setKey(event.key)
    })
    document.addEventListener('keyup', () => setPress(false))

    if (press === true) {
      console.log(key);
    }
  }, [press])

  return (
    <div style={styles} className='app__container'>
      <div className='app__camera'>
        <div className='app__camera--center app__hero'>
          <Hero face={face} />
        </div>

        <div style={{
          transform: `translate(${positionX}px, ${positionY}px)`,
        }}>
          <div className='app__camera--center'>
            <Ground />

            <div className='app__tile app__letter--container'>
              <img className='app__letter' src={letterAsset} alt="letter" />
            </div>
          </div>
        </div>
      </div>

      <div className='app__button--container'>
        <div className='app__zx'>
          <button className='app__button'><p>Z</p></button>
          <button className='app__button'><p>X</p></button>
        </div>

        <div className='app__arrow--container'>
          <button className='app__button app__button--up'
            onMouseDown={() => {
              handleMoveStart('up')
              handleAnimationStart('up')
              setFace('up')
            }}
            onMouseUp={() => {
              handleStop()
              endFace('up')
            }}
          >
            <p>&#8593;</p>
          </button>
          <button className='app__button app__button--left'
            onMouseDown={() => {
              handleMoveStart('left')
              handleAnimationStart('left')
              setFace('left')
            }}
            onMouseUp={() => {
              handleStop()
              endFace('left')
            }}
          >
            <p>&#8593;</p>
          </button>
          <button className='app__button app__button--right'
            onMouseDown={() => {
              handleMoveStart('right')
              handleAnimationStart('right')
              setFace('right')
            }}
            onMouseUp={() => {
              handleStop()
              endFace('right')
            }}>
            <p>&#8593;</p>
          </button>
          <button className='app__button app__button--down'
            onMouseDown={() => {
              handleMoveStart('down')
              handleAnimationStart('down')
              setFace('down')
            }}
            onMouseUp={() => {
              handleStop()
              endFace('down')
            }}>
            <p>&#8593;</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App