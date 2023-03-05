import React, { useEffect, useRef, useState } from 'react'
import './Movement.css'
import Camera from './camera/Camera'

function Movement() {
  const oneIslandPlacement = [
    [1, 1], [2, 1], [3, 1],
    [1, 2], [2, 2], [3, 2],
    [1, 3], [2, 3], [3, 3],
  ]
  const oneIslandTile = [
    [0, 0], [1, 0], [2, 0],
    [0, 1], [1, 1], [2, 1],
    [0, 2], [1, 2], [2, 2],
  ]

  const bridgePlacement = [
    [3, 2], [4, 2], [5, 2], [6, 2], [7, 2],
  ]
  const bridgeTile = [
    [2, 1], [3, 1], [3, 1], [3, 1], [4, 1],
  ]

  const twoIslandPlacement = [
    [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1],
    [7, 2], [8, 2], [9, 2], [10, 2], [11, 2], [12, 2],
    [7, 3], [8, 3], [9, 3], [10, 3], [11, 3], [12, 3],
    /*    */[8, 4], [9, 4], [10, 4], [11, 4], [12, 4],
  ]
  const twoIslandTile = [
    [0, 0], [1, 0], [1, 0], [1, 0], [1, 0], [2, 0],
    [0, 1], [1, 1], [1, 1], [1, 1], [1, 1], [2, 1],
    [0, 2], [6, 1], [1, 1], [1, 1], [1, 1], [2, 1],
    /*    */[0, 2], [1, 2], [1, 2], [1, 2], [2, 2],
  ]

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
    // console.log(`${Math.round(positionX * -1 / 80)} - ${Math.round(positionY * -1 / 80)}`);
    const positionArray = [
      Math.round(positionX * -1 / 80),
      Math.round(positionY * -1 / 80)
    ]
    // console.log(oneIslandPlacement);
    console.log(positionArray);

    if (!oneIslandPlacement.some(element =>
      element[0] === positionArray[0] &&
      element[1] === positionArray[1]
    )) {
      console.log('not include');
    }
  }, [positionX, positionY])

  return (
    <>
      <Camera
        cameraX={positionX}
        cameraY={positionY}
        oneIslandPlacement={oneIslandPlacement}
        oneIslandTile={oneIslandTile}
        bridgePlacement={bridgePlacement}
        bridgeTile={bridgeTile}
        twoIslandPlacement={twoIslandPlacement}
        twoIslandTile={twoIslandTile}
      />

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