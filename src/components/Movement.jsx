import React, { useEffect, useRef, useState } from 'react'
import './Movement.css'
import soundStep from '../assets/Bubble heavy 1.wav'
import data from '../data/data.json'
import Hero from './hero/Hero'
import Object from './object/Object'
import GridLine from './gridLine/GridLine'
import Area from './area/Area'

function Movement() {
  const [positionX, setPositionX] = useState(-160)
  const [positionY, setPositionY] = useState(-80)
  const [pressUp, setPressUp] = useState(false)
  const [pressLeft, setPressLeft] = useState(false)
  const [pressRight, setPressRight] = useState(false)
  const [pressDown, setPressDown] = useState(false)
  const [face, setFace] = useState()
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


  const [press, setPress] = useState(false)
  useEffect(() => {
    document.addEventListener('keydown', () => { setPress(true) })
    document.addEventListener('keyup', () => { setPress(false) });
    if (press === true) {
      console.log(event.key);
      if (event.key === 'ArrowUp') {
        handleMoveStart('up')
        handleAnimationStart('up')
        setFace('up')
      }
      if (event.key === 'ArrowLeft') {
        handleMoveStart('left')
        handleAnimationStart('left')
        setFace('left')
      }
      if (event.key === 'ArrowRight') {
        handleMoveStart('right')
        handleAnimationStart('right')
        setFace('right')
      }
      if (event.key === 'ArrowDown') {
        handleMoveStart('down')
        handleAnimationStart('down')
        setFace('down')
      }
    }
    if (press === false) {
      handleStop()
      if (event.key === 'ArrowUp') {
        endFace('up')
      }
      if (event.key === 'ArrowLeft') {
        endFace('left')
      }
      if (event.key === 'ArrowRight') {
        endFace('right')
      }
      if (event.key === 'ArrowDown') {
        endFace('down')
      }
    }
  }, [press]);

  return (
    <>
      <div className='movement__camera'>
        <div className='movement__camera--center movement__hero'>
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

      <div className='movement__button--grid'>
        <button className='movement__button movement__button--up'
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
        <button className='movement__button movement__button--left'
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
        <button className='movement__button movement__button--right'
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
        <button className='movement__button movement__button--down'
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
    </>
  )
}

export default Movement