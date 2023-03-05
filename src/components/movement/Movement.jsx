import React, { useEffect, useRef, useState } from 'react'
import './Movement.css'
import Camera from './camera/Camera'

function Movement() {
  // const [positionX, setPositionX] = useState(-80)
  // const [positionY, setPositionY] = useState(-80)
  const [positionX, setPositionX] = useState(0)
  const [positionY, setPositionY] = useState(0)
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
    const oneIslandPlacement = [
      [1, 1], [2, 1], [3, 1],
      [1, 2], [2, 2], [3, 2],
      [1, 3], [2, 3], [3, 3],
    ]

    // console.log(`${Math.round(positionX * -1 / 80)} - ${Math.round(positionY * -1 / 80)}`);
    const positionArray = [
      Math.round(positionX * -1 / 80),
      Math.round(positionY * -1 / 80)
    ]
    // console.log(oneIslandPlacement);
    console.log(positionArray);

    if (oneIslandPlacement.some(element =>
      element[0] === positionArray[0] &&
      element[1] === positionArray[1]
    )) {
      console.log('include');
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