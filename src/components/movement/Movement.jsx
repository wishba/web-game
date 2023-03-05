import React, { useEffect, useRef, useState } from 'react'
import './Movement.css'
import Camera from '../camera/Camera'

function Movement() {
  const [positionX, setPositionX] = useState(0)
  const [positionY, setPositionY] = useState(0)
  const resetX = 5 * 16 * 2
  const resetY = 5 * 16 * 2
  // const [positionX, setPositionX] = useState(5 * 16 * 1)
  // const [positionY, setPositionY] = useState(5 * 16 * 1)
  const intervalId = useRef()

  function handleMoveStart(direction) {
    intervalId.current = setInterval(() => {
      switch (direction) {
        case 'up':
          return setPositionY(positionY => positionY + 1)
        case 'left':
          return setPositionX(positionX => positionX + 1)
        case 'right':
          return setPositionX(positionX => positionX - 1)
        case 'down':
          return setPositionY(positionY => positionY - 1)
      }
    }, 25)
  }
  function handleMoveStop() {
    clearInterval(intervalId.current)
  }

  useEffect(() => {
    const coordinateX = -1 * (positionX - resetX)
    const coordinateY = -1 * (positionY - resetY)
    // console.log(`coordinate: ${coordinateX}/${coordinateY}`)
    // if (
    //   positionX <= 40 && positionX >= -40
    //   &&
    //   positionY <= 80 && positionY >= -200
    // ) {
    //   console.log('1/1');
    // }
  }, [positionX, positionY])

  // 0) .5
  // 1) .5 + 1
  // 2) .5 + 1 + 1

  return (
    <>
      <Camera cameraX={positionX} cameraY={positionY} />

      <div className='movement'>
        <button className='movement__button movement__button--up'
          onMouseDown={() => handleMoveStart('up')}
          onMouseUp={handleMoveStop}
        >
          <p className='movement__arrow'>&#8593;</p>
        </button>
        <button className='movement__button movement__button--left'
          onMouseDown={() => handleMoveStart('left')}
          onMouseUp={handleMoveStop}
        >
          <p className='movement__arrow'>&#8593;</p>
        </button>
        <button className='movement__button movement__button--right'
          onMouseDown={() => handleMoveStart('right')}
          onMouseUp={handleMoveStop}>
          <p className='movement__arrow'>&#8593;</p>
        </button>
        <button className='movement__button movement__button--down'
          onMouseDown={() => handleMoveStart('down')}
          onMouseUp={handleMoveStop}>
          <p className='movement__arrow'>&#8593;</p>
        </button>
      </div>
    </>
  )
}

export default Movement