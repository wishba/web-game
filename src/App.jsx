import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import data from './data/data.json'
import soundStep from './assets/Bubble heavy 1.wav'
import Hero from './components/hero/Hero'
import GridLine from './components/ground/gridLine/GridLine'
import Area from './components/ground/area/Area'
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

  const [buttonUp, setButtonUp] = useState('')
  const [buttonLeft, setButtonLeft] = useState('')
  const [buttonRight, setButtonRight] = useState('')
  const [buttonDown, setButtonDown] = useState('')
  const [buttonZ, setButtonZ] = useState('')
  const [buttonX, setButtonX] = useState('')

  const [face, setFace] = useState()
  const [key, setKey] = useState()

  const [warn, setWarn] = useState('none')
  const [warnButton, setWarnButton] = useState('app__button--warning')
  const [dialogue, setDialogue] = useState()
  const [stop, setStop] = useState(false)

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

  function step() {
    const sound = new Audio(soundStep)
    sound.play()
  }

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
    function counter() {
      count++
      if (count > 4) { count = 1 }
    }

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
    setTimeout(() => {
      setFace(`${facing}`)
      step()
    }, 300)
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

    if (containsPosition(data.object.letter.placement, positionTile)) {
      setWarn('block')
    }
    if (!containsPosition(data.object.letter.placement, positionTile)) {
      setWarn('none')
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

      switch (key) {
        case 'ArrowUp':
          if (stop === false) {
            handleMoveStart('up')
            handleAnimationStart('up')
            setFace('up')
            setButtonUp('app__button--active')
          }
          return
        case 'ArrowLeft':
          if (stop === false) {
            handleMoveStart('left')
            handleAnimationStart('left')
            setFace('left')
            setButtonLeft('app__button--active')
          }
          return
        case 'ArrowRight':
          if (stop === false) {
            handleMoveStart('right')
            handleAnimationStart('right')
            setFace('right')
            setButtonRight('app__button--active')
          }
          return
        case 'ArrowDown':
          if (stop === false) {
            handleMoveStart('down')
            handleAnimationStart('down')
            setFace('down')
            setButtonDown('app__button--active')
          }
          return
        case 'z':
          handleButtonZ()
          setButtonZ('app__button--active')
          return
        case 'x':
          setButtonX('app__button--active')
          setDialogue()
          setStop(false)
          return
      }
    }

    if (press === false) {
      handleStop()
      switch (key) {
        case 'ArrowUp':
          if (stop === false) {
            endFace('up')
            setButtonUp('')
          }
          return
        case 'ArrowLeft':
          if (stop === false) {
            endFace('left')
            setButtonLeft('')
          }
          return
        case 'ArrowRight':
          if (stop === false) {
            endFace('right')
            setButtonRight('')
          }
          return
        case 'ArrowDown':
          if (stop === false) {
            endFace('down')
            setButtonDown('')
          }
          return
        case 'z':
          setButtonZ('')
          return
        case 'x':
          setButtonX('')
          return
      }
    }
  }, [press])

  function handleButtonZ() {
    if (warn == 'block' && positionTile == '2,2') {
      console.log(positionTile);
      setStop(true)
      setWarnButton('')
      setDialogue(
        <div className='app__dialogue--container'>
          <p>you've found a letter, do you want to read it?</p>
          <button>yes(z)</button>
          <button
            onClick={() => {
              setDialogue()
              setStop(false)
            }}
          >no(x)</button>
        </div>
      )
    }
  }

  return (
    <div style={styles} className='app__container'>
      <div className='app__camera'>
        <div className='app__camera--center app__hero'>
          <p className='app__hero--emotion'
            style={{ display: `${warn}` }}
          >!</p>
          <Hero face={face} />
        </div>

        <div style={{
          transform: `translate(${positionX}px, ${positionY}px)`,
        }}>
          <div className='app__camera--center'>
            <GridLine width={14} height={6} />
            <Ground />
            <div className='app__area'>
              <Area areaPlacement={data.ground} />
            </div>

            <div className='app__tile app__letter--container'>
              <img className='app__letter' src={letterAsset} alt="letter" />
            </div>
          </div>
        </div>

        {dialogue}
      </div>

      <div className='app__button--container'>
        <div className='app__zx'>
          <button
            className={
              warn === 'none' ?
                `${buttonZ} app__button` :
                `${buttonZ} app__button ${warnButton}`
            }
            onClick={() => handleButtonZ()}
          ><p>Z</p></button>
          <button className={`${buttonX} app__button`}
            onClick={() => {
              setDialogue()
              setStop(false)
            }}
          ><p>X</p></button>
        </div>

        <div className='app__arrow--container'>
          <button className={`${buttonUp} app__button app__button--up`}
            onMouseDown={() => {
              if (stop === false) {
                handleMoveStart('up')
                handleAnimationStart('up')
                setFace('up')
              }
            }}
            onMouseUp={() => {
              if (stop === false) {
                handleStop()
                endFace('up')
              }
            }}
          >
            <p>&#8593;</p>
          </button>
          <button className={`${buttonLeft} app__button app__button--left`}
            onMouseDown={() => {
              if (stop === false) {
                handleMoveStart('left')
                handleAnimationStart('left')
                setFace('left')
              }
            }}
            onMouseUp={() => {
              if (stop === false) {
                handleStop()
                endFace('left')
              }
            }}
          >
            <p>&#8593;</p>
          </button>
          <button className={`${buttonRight} app__button app__button--right`}
            onMouseDown={() => {
              if (stop === false) {
                handleMoveStart('right')
                handleAnimationStart('right')
                setFace('right')
              }
            }}
            onMouseUp={() => {
              if (stop === false) {
                handleStop()
                endFace('right')
              }
            }}>
            <p>&#8593;</p>
          </button>
          <button className={`${buttonDown} app__button app__button--down`}
            onMouseDown={() => {
              if (stop === false) {
                handleMoveStart('down')
                handleAnimationStart('down')
                setFace('down')
              }
            }}
            onMouseUp={() => {
              if (stop === false) {
                handleStop()
                endFace('down')
              }
            }}>
            <p>&#8593;</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App