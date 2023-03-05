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
    const coordinateX = -1 * (positionX - startingX)
    const coordinateY = -1 * (positionY - startingY)
    const coordinate = [Math.round(coordinateX / 80), Math.round(coordinateY / 80)]
    console.log(`coordinate: ${coordinate}`);

    const wallArray = [
      [0, 0], [1, 0], [2, 0], [3, 0], [4, 0],
      [0, 1],/**                    */[4, 1],
      [0, 2],/**                            */
      [0, 3],/**                    */[4, 3],
      [0, 4], [1, 4], [2, 4], [3, 4], [4, 4],
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