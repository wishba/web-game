import React, { useEffect, useRef, useState } from 'react'
import './Movement.css'
import Camera from '../camera/Camera'

function Movement() {
  // const [positionX, setPositionX] = useState(0)
  // const [positionY, setPositionY] = useState(0)
  const resetX = 5 * 16 * 2
  const resetY = 5 * 16 * 2
  const [positionX, setPositionX] = useState(5 * 16 * 1)
  const [positionY, setPositionY] = useState(5 * 16 * 1)
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
    console.log(`coordinate: ${positionX - resetX}/${positionY - resetY}`)
    // console.log(`coordinate: ${positionX}/${positionY}`)

    // if (
    //   positionX <= 40 && positionX >= -80
    //   &&
    //   positionY <= 200 && positionY >= 120
    // ) {
    //   console.log('0/2');
    // }

    // if (
    //   positionX <= 40 && positionX >= -80
    //   &&
    //   positionY <= 120 && positionY >= 40
    // ) {
    //   console.log('0/1');
    // }

    // if (
    //   positionX <= 40 && positionX >= -40
    //   &&
    //   positionY <= 40 && positionY >= -40
    // ) {
    //   console.log('0/0');
    // }

    // if (
    //   positionX <= 40 && positionX >= -40
    //   &&
    //   positionY <= -40 && positionY >= -120
    // ) {
    //   console.log('0/-1');
    // }

    // if (
    //   positionX <= 40 && positionX >= -40
    //   &&
    //   positionY <= -120 && positionY >= -200
    // ) {
    //   console.log('0/-2');
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