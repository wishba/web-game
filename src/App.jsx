import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import data from './data/data.json'
import soundAsset from './assets/Bubble heavy 1.wav'
import Hero from './components/hero/Hero'
import Ground from './components/ground/Ground'
import letterAsset from './assets/Basic Plants.png'

function App() {
  const styles = {
    '--zoom': '5',
    '--tile': 'calc(var(--zoom) * 16px)',
    '--font-size': 'calc(var(--zoom) * 10px)',
  }

  const [positionX, setPositionX] = useState(-80)
  const [positionY, setPositionY] = useState(-80)
  const [pressUp, setPressUp] = useState(false)
  const [pressLeft, setPressLeft] = useState(false)
  const [pressRight, setPressRight] = useState(false)
  const [pressDown, setPressDown] = useState(false)
  const [facing, setFacing] = useState()
  const [press, setPress] = useState(false)
  const [pressedKey, setPressedKey] = useState()
  const [warning, setWarning] = useState('none')

  const intervalMovement = useRef()
  const intervalAnimation = useRef()

  const positionXY = [
    Math.round(positionX * -1 / 40),
    Math.round(positionY * -1 / 40)
  ]
  const positionTile = [
    Math.round(positionX * -1 / 80),
    Math.round(positionY * -1 / 80)
  ]

  function walkingSound() { new Audio(soundAsset).play() }

  function moveStart(direction) {
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

    let count = 0
    function counter() {
      count++
      if (count > 4) { count = 1 }
    }
    intervalAnimation.current = setInterval(() => {
      switch (direction) {
        case 'up':
          counter()
          setFacing(`up--${count}`)
          walkingSound()
          return
        case 'left':
          counter()
          setFacing(`left--${count}`)
          walkingSound()
          return
        case 'right':
          counter()
          setFacing(`right--${count}`)
          walkingSound()
          return
        case 'down':
          counter()
          setFacing(`down--${count}`)
          walkingSound()
          return
      }
    }, 250)

    setFacing(direction)
  }

  function moveStop(facing) {
    clearInterval(intervalMovement.current)
    clearInterval(intervalAnimation.current)

    if (pressUp === true) { setPressUp(false) }
    if (pressLeft === true) { setPressLeft(false) }
    if (pressRight === true) { setPressRight(false) }
    if (pressDown === true) { setPressDown(false) }

    setTimeout(() => {
      setFacing(`${facing}`)
      walkingSound()
    }, 300)
  }

  useEffect(() => {
    console.log(`${positionX}/${positionY} | ${positionXY} | ${positionTile}`)

    if (!data.ground.some(element =>
      element[0] === positionXY[0] &&
      element[1] === positionXY[1]
    )) {
      if (pressUp === true) { setPositionY(positionY - 1) }
      if (pressLeft === true) { setPositionX(positionX - 1) }
      if (pressRight === true) { setPositionX(positionX + 1) }
      if (pressDown === true) { setPositionY(positionY + 1) }
    }

    if (positionTile == `${data.object.letter.placement}`) {
      setWarning('block')
    } else {
      setWarning('none')
    }
  }, [positionX, positionY])

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      setPress(true)
      setPressedKey(event.key)
    })
    document.addEventListener('keyup', () => setPress(false))

    if (press === true) {
      console.log(pressedKey)
    }
  }, [press])

  function handleClickZ() {
    if (positionTile == `${data.object.letter.placement}`) {
      console.log(positionTile);
    }
  }

  return (
    <div style={styles} className='app__container'>
      <div className='app__camera'>
        <div className='app__camera--center app__hero'>
          <Hero facing={facing} display={warning} />
        </div>

        <div style={{ transform: `translate(${positionX}px, ${positionY}px)` }}>
          <div className='app__camera--center'>
            <Ground />

            <div className='app__tile app__letter--container'>
              <img className='app__letter' src={letterAsset} alt="letter" />
            </div>
          </div>
        </div>
      </div>

      <div className='app__button--container'>
        <div className='app__zx'>
          <button className='app__button'
            onClick={() => handleClickZ()}
          ><p>Z</p></button>
          <button className='app__button'><p>X</p></button>
        </div>

        <div className='app__arrow--container'>
          <button className='app__button app__button--up'
            onMouseDown={() => moveStart('up')}
            onMouseUp={() => moveStop('up')}
          ><p>&#8593;</p></button>

          <button className='app__button app__button--left'
            onMouseDown={() => moveStart('left')}
            onMouseUp={() => moveStop('left')}
          ><p>&#8593;</p></button>

          <button className='app__button app__button--right'
            onMouseDown={() => moveStart('right')}
            onMouseUp={() => moveStop('right')}
          ><p>&#8593;</p></button>

          <button className='app__button app__button--down'
            onMouseDown={() => moveStart('down')}
            onMouseUp={() => moveStop('down')}
          ><p>&#8593;</p></button>
        </div>
      </div>
    </div>
  )
}

export default App