import React, { useEffect, useRef, useState } from 'react'
import './Movement.css'
import Camera from './camera/Camera'

function Movement() {
  const startingX = 80 * 2
  const startingY = 80 * 2
  const [positionX, setPositionX] = useState(startingX)
  const [positionY, setPositionY] = useState(startingY)
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
    const coordinateX = Math.round((-1 * (positionX - startingX)) / 80)
    const coordinateY = Math.round((-1 * (positionY - startingY)) / 80)
    const coordinate = [coordinateX, coordinateY]
    console.log(`coordinate: ${coordinate}`);

    const wallArray = [
      /**   */[1, 0], [2, 0],
      [0, 1],
      [0, 2],
    ]

    if (wallArray.some(element =>
      element[0] === coordinate[0]
      &&
      element[1] === coordinate[1]
    )) {
      console.log('stop');
    }
  }, [positionX, positionY])

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