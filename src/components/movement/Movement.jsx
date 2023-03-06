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

  const [positionX, setPositionX] = useState(-80)
  const [positionY, setPositionY] = useState(-80)
  // const [positionX, setPositionX] = useState(0)
  // const [positionY, setPositionY] = useState(0)
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

  let count = 0
  function counter() {
    count++
    if (count > 4) {
      count = 1
    }
  }
  function handleAnimationStart(direction) {
    intervalAnimation.current = setInterval(() => {
      switch (direction) {
        case 'up':
          counter()
          console.log(`up-${count}`);
          setFace(`up-${count}`)
          return
        case 'left':
          counter()
          console.log(`left-${count}`);
          return
        case 'right':
          counter()
          console.log(`right-${count}`);
          return
        case 'down':
          counter()
          console.log(`down-${count}`);
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
    // console.log(`${Math.round(positionX * -1 / 80)} - ${Math.round(positionY * -1 / 80)}`);
    const positionArray = [
      Math.round(positionX * -1 / 80),
      Math.round(positionY * -1 / 80)
    ]
    // console.log(positionArray);
    // console.log(`${positionX} | ${positionY}`);

    function containsPosition(array, positionArray) {
      return array.some(element =>
        element[0] === positionArray[0] &&
        element[1] === positionArray[1]
      );
    }

    if (!containsPosition(oneIslandPlacement, positionArray) &&
      !containsPosition(bridgePlacement, positionArray) &&
      !containsPosition(twoIslandPlacement, positionArray)) {

      // console.log('not include')
      if (pressUp === true) {
        // console.log('pressed up');
        setPositionY(positionY - 1)
      }
      if (pressLeft === true) {
        // console.log('pressed left');
        setPositionX(positionX - 1)
      }
      if (pressRight === true) {
        // console.log('pressed right');
        setPositionX(positionX + 1)
      }
      if (pressDown === true) {
        // console.log('pressed down');
        setPositionY(positionY + 1)
      }
    }
  }, [positionX, positionY])

  return (
    <>
      {/* <div
        style={{
          transform: 'translate(10px, 10px)',
        }}
      > */}
      <Camera
        cameraX={positionX}
        cameraY={positionY}
        oneIslandPlacement={oneIslandPlacement}
        oneIslandTile={oneIslandTile}
        bridgePlacement={bridgePlacement}
        bridgeTile={bridgeTile}
        twoIslandPlacement={twoIslandPlacement}
        twoIslandTile={twoIslandTile}
        face={face}
      // face={'up-0'}
      />
      {/* </div> */}

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
            }, 300);
          }}
        >
          <p className='movement__arrow'>&#8593;</p>
        </button>
        <button className='movement__button movement__button--left'
          onMouseDown={() => {
            handleMoveStart('left')
            handleAnimationStart('left')
          }}
          onMouseUp={handleMoveStop}
        >
          <p className='movement__arrow'>&#8593;</p>
        </button>
        <button className='movement__button movement__button--right'
          onMouseDown={() => {
            handleMoveStart('right')
            handleAnimationStart('right')
          }}
          onMouseUp={handleMoveStop}>
          <p className='movement__arrow'>&#8593;</p>
        </button>
        <button className='movement__button movement__button--down'
          onMouseDown={() => {
            handleMoveStart('down')
            handleAnimationStart('down')
          }}
          onMouseUp={handleMoveStop}>
          <p className='movement__arrow'>&#8593;</p>
        </button>
      </div>
    </>
  )
}

export default Movement