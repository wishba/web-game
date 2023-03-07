import React, { useEffect, useRef, useState } from 'react'
import './Movement.css'
import soundStep from '../assets/Bubble heavy 1.wav'
import data from '../data/data.json'
import Hero from './hero/Hero'
import GridLine from './gridLine/GridLine'
import Object from './object/Object'

function Movement() {
  const [positionX, setPositionX] = useState(-80)
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
      if (count > 4) {
        count = 1
      }
    }

    intervalAnimation.current = setInterval(() => {
      switch (direction) {
        case 'up':
          counter()
          setFace(`up-${count}`)
          step()
          return
        case 'left':
          counter()
          setFace(`left-${count}`)
          step()
          return
        case 'right':
          counter()
          setFace(`right-${count}`)
          step()
          return
        case 'down':
          counter()
          setFace(`down-${count}`)
          step()
          return
      }
    }, 250)
  }

  function handleMoveStop() {
    clearInterval(intervalMovement.current)
    clearInterval(intervalAnimation.current)

    if (pressUp === true) {
      setPressUp(false)
    } else if (pressLeft === true) {
      setPressLeft(false)
    } else if (pressRight === true) {
      setPressRight(false)
    } else if (pressDown === true) {
      setPressDown(false)
    }
  }

  useEffect(() => {
    const positionArray = [
      Math.round(positionX * -1 / 80),
      Math.round(positionY * -1 / 80)
    ]

    function containsPosition(array, positionArray) {
      return array.some(element =>
        element[0] === positionArray[0] &&
        element[1] === positionArray[1]
      );
    }

    if (!containsPosition(data.oneIsland.placement, positionArray) &&
      !containsPosition(data.bridge.placement, positionArray) &&
      !containsPosition(data.twoIsland.placement, positionArray)) {

      if (pressUp === true) {
        setPositionY(positionY - 1)
      }
      if (pressLeft === true) {
        setPositionX(positionX - 1)
      }
      if (pressRight === true) {
        setPositionX(positionX + 1)
      }
      if (pressDown === true) {
        setPositionY(positionY + 1)
      }
    }
  }, [positionX, positionY])

  return (
    <>
      {/* <Camera
        cameraX={positionX}
        cameraY={positionY}
        face={face}
      /> */}
      <div className='camera'>
        <div className='camera__hero'>
          <Hero face={face} />
        </div>

        <div style={{
          transform: `translate(${positionX}px, ${positionY}px)`,
        }}>
          <div style={{
            transform: 'translate(calc(16px * var(--zoom) * 2), calc(16px * var(--zoom) * 2))',
          }}>
            <Object />

            <div style={{
              position: 'absolute',
              zIndex: '-1',
              top: '0',
            }}>
              <GridLine />
            </div>
          </div>
        </div>
      </div>

      <div className='movement'>
        <button className='movement__button movement__button--up'
          onMouseDown={() => {
            handleMoveStart('up')
            handleAnimationStart('up')
            setFace('up-0')
          }}
          onMouseUp={() => {
            handleMoveStop()
            setTimeout(() => {
              setFace('up-0')
              step()
            }, 300);
          }}
        >
          <p className='movement__arrow'>&#8593;</p>
        </button>
        <button className='movement__button movement__button--left'
          onMouseDown={() => {
            handleMoveStart('left')
            handleAnimationStart('left')
            setFace('left-0')
          }}
          onMouseUp={() => {
            handleMoveStop()
            setTimeout(() => {
              setFace('left-0')
              step()
            }, 300);
          }}
        >
          <p className='movement__arrow'>&#8593;</p>
        </button>
        <button className='movement__button movement__button--right'
          onMouseDown={() => {
            handleMoveStart('right')
            handleAnimationStart('right')
            setFace('right-0')
          }}
          onMouseUp={() => {
            handleMoveStop()
            setTimeout(() => {
              setFace('right-0')
              step()
            }, 300);
          }}>
          <p className='movement__arrow'>&#8593;</p>
        </button>
        <button className='movement__button movement__button--down'
          onMouseDown={() => {
            handleMoveStart('down')
            handleAnimationStart('down')
            setFace('down-0')
          }}
          onMouseUp={() => {
            handleMoveStop()
            setTimeout(() => {
              setFace('down-0')
              step()
            }, 300);
          }}>
          <p className='movement__arrow'>&#8593;</p>
        </button>
      </div>
    </>
  )
}

export default Movement