import React, { useEffect, useRef, useState } from 'react'
import './Movement.css'
import soundStep from '../assets/Bubble heavy 1.wav'
import data from '../data/data.json'
import Hero from './hero/Hero'
import Object from './object/Object'
import GridLine from './gridLine/GridLine'
import Area from './area/Area'

function Movement() {
  const [positionX, setPositionX] = useState(-80)
  const [positionY, setPositionY] = useState(-80)
  const [face, setFace] = useState()
  const [pressUp, setPressUp] = useState(false)
  const [pressLeft, setPressLeft] = useState(false)
  const [pressRight, setPressRight] = useState(false)
  const [pressDown, setPressDown] = useState(false)
  const [press, setPress] = useState(false)
  const [key, setKey] = useState()
  const [buttonUp, setButtonUp] = useState('')
  const [buttonLeft, setButtonLeft] = useState('')
  const [buttonRight, setButtonRight] = useState('')
  const [buttonDown, setButtonDown] = useState('')
  const [warn, setWarn] = useState('none')

  const intervalMovement = useRef()
  const intervalAnimation = useRef()

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
    const positionXY = [
      Math.round(positionX * -1 / 40),
      Math.round(positionY * -1 / 40)
    ]
    const positionTile = [
      Math.round(positionX * -1 / 80),
      Math.round(positionY * -1 / 80)
    ]

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
    } else if (!containsPosition(data.object.letter.placement, positionTile)) {
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
          handleMoveStart('up')
          handleAnimationStart('up')
          setFace('up')
          setButtonUp('movement__button--active')
          return
        case 'ArrowLeft':
          handleMoveStart('left')
          handleAnimationStart('left')
          setFace('left')
          setButtonLeft('movement__button--active')
          return
        case 'ArrowRight':
          handleMoveStart('right')
          handleAnimationStart('right')
          setFace('right')
          setButtonRight('movement__button--active')
          return
        case 'ArrowDown':
          handleMoveStart('down')
          handleAnimationStart('down')
          setFace('down')
          setButtonDown('movement__button--active')
          return
      }
    }

    if (press === false) {
      handleStop()
      switch (key) {
        case 'ArrowUp':
          endFace('up')
          setButtonUp('')
          return
        case 'ArrowLeft':
          endFace('left')
          setButtonLeft('')
          return
        case 'ArrowRight':
          endFace('right')
          setButtonRight('')
          return
        case 'ArrowDown':
          endFace('down')
          setButtonDown('')
          return
      }
    }
  }, [press])

  return (
    <div className='movement__container'>
      <div className='movement__camera'>
        <div className='movement__camera--center movement__hero'>
          <p className='movement__emotion'
            style={{ display: `${warn}` }}
          >!</p>
          <Hero face={face} />
        </div>

        <div style={{
          transform: `translate(${positionX}px, ${positionY}px)`,
        }}>
          <div className='movement__camera--center'>
            <GridLine width={14} height={6} />
            <Object />
            <div className='movement__area'>
              <Area areaPlacement={data.ground} />
            </div>
          </div>
        </div>
      </div>

      <div className='movement__button--container'>
        <div className='movement__ab'>
          <button className='movement__button'>A</button>
          <button className='movement__button'>B</button>
        </div>

        <div className='movement__arrow--container'>
          <button className={`${buttonUp} movement__button movement__button--up`}
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
            <p className='movement__arrow'>&#8593;</p>
          </button>
          <button className={`${buttonLeft} movement__button movement__button--left`}
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
            <p className='movement__arrow'>&#8593;</p>
          </button>
          <button className={`${buttonRight} movement__button movement__button--right`}
            onMouseDown={() => {
              handleMoveStart('right')
              handleAnimationStart('right')
              setFace('right')
            }}
            onMouseUp={() => {
              handleStop()
              endFace('right')
            }}>
            <p className='movement__arrow'>&#8593;</p>
          </button>
          <button className={`${buttonDown} movement__button movement__button--down`}
            onMouseDown={() => {
              handleMoveStart('down')
              handleAnimationStart('down')
              setFace('down')
            }}
            onMouseUp={() => {
              handleStop()
              endFace('down')
            }}>
            <p className='movement__arrow'>&#8593;</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Movement