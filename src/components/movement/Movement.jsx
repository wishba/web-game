import React, { useEffect, useRef, useState } from 'react'
import './Movement.css'
import Camera from './camera/Camera'

function Movement() {
  const resetX = 80 * 2
  const resetY = 80 * 2
  // const [positionX, setPositionX] = useState(resetX)
  // const [positionY, setPositionY] = useState(resetY)
  const [positionX, setPositionX] = useState(80)
  const [positionY, setPositionY] = useState(80)
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

  // useEffect(() => {
  //   const coordinateX = -1 * (positionX - resetX)
  //   const coordinateY = -1 * (positionY - resetY)
  //   const coordinate = [Math.round(coordinateX / 80), Math.round(coordinateY / 80)]

  //   setPositionY(coordinateY + 40)
  // }, [])


  useEffect(() => {
    console.log(`${positionX}/${positionY}`);

    if (positionX >= -120 && positionX <= 120 &&
      positionY <= 120 && positionY >= -120
    ) {
      console.log('island one');
      if (positionX === 120) {
        setPositionX(positionX - 1)
      }
      if (positionX === -120) {
        if (positionY >= 40) {
          setPositionX(positionX + 1)
        }
        if (positionY <= -40) {
          setPositionX(positionX + 1)
        }
      }
      if (positionY === 120) {
        setPositionY(positionY - 1)
      }
      if (positionY === -120) {
        setPositionY(positionY + 1)
      }
    }

    if (positionX >= -360 && positionX <= -120 &&
      positionY <= 40 && positionY >= -40
    ) {
      console.log('bridge');
      if (positionY === 40) {
        setPositionY(positionY - 1)
      }
      if (positionY === -40) {
        setPositionY(positionY + 1)
      }
    }

    // if (positionY >= -40 && positionY <= 40) {
    //   console.log('wakwaw');
    //   // if (positionY <= 40) {
    //   //   setPositionY(40)
    //   // }
    // } else {
    //   setPositionX(-120)
    // }
    // }


    // // 1/0
    // function wall(x, y) {
    //   if (positionY <= 120) {
    //     if (positionX >= 120) {
    //       console.log('bawah kiri');
    //     }
    //     if (positionX <= 120 && positionX >= 40) {
    //       console.log('bawah tengah');
    //     }
    //     if (positionX <= 40) {
    //       console.log('bawah kanan');
    //     }
    //   } else {
    //     setPositionY(120)
    //   }
    //   // if (positionY <= 200) {
    //   //   console.log('stop');
    //   // }
    // }
    // wall()

    // 0/1
    // if (
    // positionX <= 120 && positionX >= 120
    // &&
    // positionY <= 200 && positionY >= 120
    // ) {
    // console.log('stop');
    // setPositionX(80)
    // setPositionY(120)
    // }

    //   // const coordinateX = -1 * (positionX - resetX)
    //   // const coordinateY = -1 * (positionY - resetY)
    //   const coordinateX = positionX - resetX
    //   const coordinateY = positionY - resetY
    //   const coordinate = [Math.round(coordinateX / 80), Math.round(coordinateY / 80)]
    //   // console.log(`coordinate: ${coordinate}`);
    //   // console.log(`coordinate real: ${coordinateX},${coordinateY}`);

    //   const wallArray = [
    //     [0, 0], [1, 0], [2, 0], [3, 0], [4, 0],
    //     [0, 1],/**                    */[4, 1],
    //     [0, 2],/**                            */
    //     [0, 3],/**                    */[4, 3],
    //     [0, 4], [1, 4], [2, 4], [3, 4], [4, 4],
    //   ]

    //   if (wallArray.some(element =>
    //     element[0] === coordinate[0] * -1
    //     &&
    //     element[1] === coordinate[1] * -1
    //   )) {
    //     console.log('stop');
    //     setPositionX(coordinateX + 159)
    //     setPositionY(coordinateY + 155)
    //     // setPositionX(120) // -40 is 120 // x + 160
    //     //   setPositionX(coordinateX + 80) // 40 is 120 
    //     //   // setPositionY(coordinateY + 40)
    //     //   // setPositionX(coordinateX)
    //     //   // setPositionY(coordinateY)
    //   }
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