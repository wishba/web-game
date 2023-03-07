import React, { useEffect, useRef, useState } from 'react'
import './Movement.css'
import Camera from './camera/Camera'
import soundStep from '../assets/Bubble heavy 1.wav'
import data from '../data/data.json'
import GridLine from './gridLine/GridLine'

function Movement() {
  const [positionX, setPositionX] = useState(-80)
  const [positionY, setPositionY] = useState(-80)
  const [pressUp, setPressUp] = useState(false)
  const [pressLeft, setPressLeft] = useState(false)
  const [pressRight, setPressRight] = useState(false)
  const [pressDown, setPressDown] = useState(false)
  const [face, setFace] = useState()
  const [translateX, setTranslateX] = useState(0)
  const [translateY, setTranslateY] = useState(0)
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
          setTranslateY('0px')
          return
        case 'left':
          counter()
          setFace(`left-${count}`)
          step()
          setTranslateX('40px')
          return
        case 'right':
          counter()
          setFace(`right-${count}`)
          step()
          // setMoveFace('translate(-40px, 0)')
          setTranslateX('-40px')
          return
        case 'down':
          counter()
          setFace(`down-${count}`)
          step()
          // setMoveFace('translate(0, -80px)')
          setTranslateY('-80px')
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

      <div
      // className='movement__camera'
      >
        <GridLine width={7} height={7} />
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