import React, { useEffect, useRef, useState } from 'react'
import './Movement.css'
import Camera from './camera/Camera'
import soundStep from '../assets/Bubble heavy 1.wav'

function Movement() {
  const coordinate = {
    oneIsland: {
      placement: [
        [1, 1], [2, 1], [3, 1],
        [1, 2], [2, 2], [3, 2],
        [1, 3], [2, 3], [3, 3],
      ],
      asset: [
        [0, 0], [1, 0], [2, 0],
        [0, 1], [1, 1], [2, 1],
        [0, 2], [1, 2], [2, 2],
      ]
    },
    bridge: {
      placement: [
        [3, 2], [4, 2], [5, 2], [6, 2], [7, 2],
      ],
      asset: [
        [2, 1], [3, 1], [3, 1], [3, 1], [4, 1],
      ]
    },
    twoIsland: {
      placement: [
        [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1],
        [7, 2], [8, 2], [9, 2], [10, 2], [11, 2], [12, 2],
        [7, 3], [8, 3], [9, 3], [10, 3], [11, 3], [12, 3],
        /*    */[8, 4], [9, 4], [10, 4], [11, 4], [12, 4],
      ],
      asset: [
        [0, 0], [1, 0], [1, 0], [1, 0], [1, 0], [2, 0],
        [0, 1], [1, 1], [1, 1], [1, 1], [1, 1], [2, 1],
        [0, 2], [6, 1], [1, 1], [1, 1], [1, 1], [2, 1],
        /*    */[0, 2], [1, 2], [1, 2], [1, 2], [2, 2],
      ],
    }
  }

  const [positionX, setPositionX] = useState(-80)
  const [positionY, setPositionY] = useState(-80)
  const [pressUp, setPressUp] = useState(false)
  const [pressLeft, setPressLeft] = useState(false)
  const [pressRight, setPressRight] = useState(false)
  const [pressDown, setPressDown] = useState(false)
  const [face, setFace] = useState()
  const intervalMovement = useRef()
  const intervalAnimation = useRef()

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

  function step() {
    const sound = new Audio(soundStep)
    sound.play()
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

    if (!containsPosition(coordinate.oneIsland.placement, positionArray) &&
      !containsPosition(coordinate.bridge.placement, positionArray) &&
      !containsPosition(coordinate.twoIsland.placement, positionArray)) {

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
      <Camera
        cameraX={positionX}
        cameraY={positionY}
        oneIslandPlacement={coordinate.oneIsland.placement}
        oneIslandTile={coordinate.oneIsland.asset}
        bridgePlacement={coordinate.bridge.placement}
        bridgeTile={coordinate.bridge.asset}
        twoIslandPlacement={coordinate.twoIsland.placement}
        twoIslandTile={coordinate.twoIsland.asset}
        face={face}
      />

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