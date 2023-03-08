import React, { useEffect, useRef, useState } from 'react'
import './Movement.css'
import soundStep from '../assets/Bubble heavy 1.wav'
import data from '../data/data.json'
import Hero from './hero/Hero'
import Object from './object/Object'
import GridLine from './gridLine/GridLine'
import Area from './area/Area'

function Movement() {
  const [positionX, setPositionX] = useState(-160)
  const [positionY, setPositionY] = useState(-80)
  const [pressUp, setPressUp] = useState(false)
  const [pressLeft, setPressLeft] = useState(false)
  const [pressRight, setPressRight] = useState(false)
  const [pressDown, setPressDown] = useState(false)
  const [face, setFace] = useState()
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
      if (count > 4) { count = 1 }
    }

    intervalAnimation.current = setInterval(() => {
      switch (direction) {
        case 'up':
          counter()
          setFace(`up--${count}`)
          step()
          return
        case 'left':
          counter()
          setFace(`left--${count}`)
          step()
          return
        case 'right':
          counter()
          setFace(`right--${count}`)
          step()
          return
        case 'down':
          counter()
          setFace(`down--${count}`)
          step()
          return
      }
    }, 250)
  }

  function handleMoveStop() {
    clearInterval(intervalMovement.current)
    clearInterval(intervalAnimation.current)

    if (pressUp === true) { setPressUp(false) }
    if (pressLeft === true) { setPressLeft(false) }
    if (pressRight === true) { setPressRight(false) }
    if (pressDown === true) { setPressDown(false) }
  }

  const areaPlacement = [
    [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], /**                                                       */[14, 1], [15, 1], [16, 1], [17, 1], [18, 1], [19, 1], [20, 1], [21, 1], [22, 1], [23, 1], [24, 1],
    [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], /**                                                       */[14, 2], [15, 2], [16, 2], [17, 2], [18, 2], [19, 2], [20, 2], [21, 2], [22, 2], [23, 2], [24, 2],
    [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3], [9, 3], [10, 3], [11, 3], [12, 3], [13, 3], [14, 3], [15, 3], [16, 3], [17, 3], [18, 3], [19, 3], [20, 3], [21, 3], [22, 3], [23, 3], [24, 3],
    [2, 4], [3, 4], [4, 4], [5, 4], [6, 4], /**                                                       */[14, 4], [15, 4], [16, 4], [17, 4], [18, 4], [19, 4], [20, 4], [21, 4], [22, 4], [23, 4], [24, 4],
    [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], /**                                                       */[14, 5], [15, 5], [16, 5], [17, 5], [18, 5], [19, 5], [20, 5], [21, 5], [22, 5], [23, 5], [24, 5],
    /**                                                                                                                 */[16, 6], [17, 6], [18, 6], [19, 6], [20, 6], [21, 6], [22, 6], [23, 6], [24, 6],
    /**                                                                                                                 */[16, 7], [17, 7], [18, 7], [19, 7], [20, 7], [21, 7], [22, 7], [23, 7], [24, 7],
  ]

  useEffect(() => {
    const positionArray2 = [
      Math.round(positionX * -1 / 40),
      Math.round(positionY * -1 / 40)
    ]

    function containsPosition(array, positionArray) {
      return array.some(element =>
        element[0] === positionArray[0] &&
        element[1] === positionArray[1]
      )
    }

    if (!containsPosition(areaPlacement, positionArray2)) {
      if (pressUp === true) { setPositionY(positionY - 1) }
      if (pressLeft === true) { setPositionX(positionX - 1) }
      if (pressRight === true) { setPositionX(positionX + 1) }
      if (pressDown === true) { setPositionY(positionY + 1) }
    }
  }, [positionX, positionY])


  const [press, setPress] = useState(false)
  useEffect(() => {
    document.addEventListener('keydown', () => {
      setPress(true)
    })
    document.addEventListener('keyup', () => {
      setPress(false)
    });

    console.log(press);

    if (press === true) {
      handleMoveStart('up')
      handleAnimationStart('up')
      setFace('up--0')
    } else {
      handleMoveStop()
      setTimeout(() => {
        setFace('up--0')
        step()
      }, 300)
    }
  }, [press])

  // const handleKeyDown = (event) => {
  // if (event.code === 'ArrowUp') {
  //   console.log('up');
  //   // () => {
  //   // handleMoveStart('up')
  //   // handleAnimationStart('up')
  //   // setFace('up--0')
  //   // }
  // } else if (event.code === 'ArrowDown') {
  //   console.log('down');
  // } else if (event.code === 'ArrowLeft') {
  //   console.log('left');
  // } else if (event.code === 'ArrowRight') {
  //   console.log('right');
  // }
  // };

  // const handleKeyUp = (event) => {
  // if (event.code === 'ArrowUp') {
  //   // () => {
  //   // handleMoveStop()
  //   // setTimeout(() => {
  //   // setFace('up--0')
  //   // step()
  //   // }, 300)
  //   // }
  // } else if (event.code === 'ArrowDown') {
  //   console.log('down');
  // } else if (event.code === 'ArrowLeft') {
  //   console.log('left');
  // } else if (event.code === 'ArrowRight') {
  //   console.log('right');
  // }
  // };

  return (
    <>
      <div className='movement__camera'>
        <div className='movement__camera--center movement__hero'>
          <Hero face={face} />
        </div>

        <div style={{
          transform: `translate(${positionX}px, ${positionY}px)`,
        }}>
          <div className='movement__camera--center'>
            <GridLine width={14} height={6} />
            <Object />
            <div className='movement__area'>
              <Area areaPlacement={areaPlacement} />
            </div>
          </div>
        </div>
      </div>

      <div className='movement__button--grid'>
        <button className='movement__button movement__button--up'
          onMouseDown={() => {
            handleMoveStart('up')
            handleAnimationStart('up')
            setFace('up--0')
          }}
          onMouseUp={() => {
            handleMoveStop()
            setTimeout(() => {
              setFace('up--0')
              step()
            }, 300)
          }}
        >
          <p className='movement__arrow'>&#8593;</p>
        </button>
        <button className='movement__button movement__button--left'
          onMouseDown={() => {
            handleMoveStart('left')
            handleAnimationStart('left')
            setFace('left--0')
          }}
          onMouseUp={() => {
            handleMoveStop()
            setTimeout(() => {
              setFace('left--0')
              step()
            }, 300)
          }}
        >
          <p className='movement__arrow'>&#8593;</p>
        </button>
        <button className='movement__button movement__button--right'
          onMouseDown={() => {
            handleMoveStart('right')
            handleAnimationStart('right')
            setFace('right--0')
          }}
          onMouseUp={() => {
            handleMoveStop()
            setTimeout(() => {
              setFace('right--0')
              step()
            }, 300)
          }}>
          <p className='movement__arrow'>&#8593;</p>
        </button>
        <button className='movement__button movement__button--down'
          onMouseDown={() => {
            handleMoveStart('down')
            handleAnimationStart('down')
            setFace('down--0')
          }}
          onMouseUp={() => {
            handleMoveStop()
            setTimeout(() => {
              setFace('down--0')
              step()
            }, 300)
          }}>
          <p className='movement__arrow'>&#8593;</p>
        </button>
      </div>
    </>
  )
}

export default Movement