import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import data from './data/data.json'
import soundAsset from './assets/Bubble heavy 1.wav'
import Hero from './components/hero/Hero'
import Ground from './components/ground/Ground'
import letterAsset from './assets/Basic Plants.png'
import treasureAsset from './assets/Chest.png'
import Dialogue from './components/dialogue/Dialogue'

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
  const [blinkButton, setBlinkButton] = useState('')
  const [dialogue, setDialogue] = useState('none')
  const [letter, setLetter] = useState('none')
  const [dialogueLetter, setDialogueLetter] = useState()
  const [firstStop, setFirstStop] = useState(true)
  const [secondStop, setSecondStop] = useState(true)
  const [thirdStop, setThirdStop] = useState(true)
  const [dialogueCounter, setDialogueCounter] = useState(0)
  const [dialogueTreasure, setDialogueTreasure] = useState('none')
  const [dialogueText, setDialogueText] = useState('')
  const [dialogueNext, setDialogueNext] = useState(false)
  const [dialogueOk, setDialogueOk] = useState(false)
  const [dialogueYesNo, setDialogueYesNo] = useState(false)

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
    // if (dialogue === 'none' && dialogueTreasure === 'none') {
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
    // }
  }

  function moveStop(facing) {
    // if (dialogue === 'none' && dialogueTreasure === 'none') {
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
    // }
  }

  function handleClickZ() {
    if (positionTile == `${data.object.letter.placement}`) {
      setDialogue('block')
    }
    if (dialogue === 'block' && positionTile == `${data.object.letter.placement}`) {
      setLetter('flex')
    }
    if (dialogue === 'block' && positionTile == '3,2') {
      setDialogue('none')
    }
    if (dialogue === 'block' && positionTile == '5,2') {
      setDialogue('none')
      setSecondStop(false)
      setFacing('right')
    }
    if (dialogue === 'block' && positionTile == '6,2') {
      setDialogue('none')
      setThirdStop(false)
      setFacing('right')
    }
    if (positionTile == '10,2') {
      setDialogueTreasure('block')
    }
    if (positionTile == '10,2' && dialogueTreasure === 'block') {
      handleDialogueTreasure()
    }
  }

  function handleClickX() {
    if (dialogue === 'block' && positionTile == '2,2') {
      setLetter('none')
    }
    if (dialogue === 'block' && positionTile == '2,2' && letter === 'none') {
      setDialogue('none')
    }
    if (dialogue === 'block' && letter == 'flex') {
      setFirstStop(false)
    }
    if (dialogue === 'block' && positionTile == '3,2') {
      setDialogue('none')
    }
    if (dialogue === 'block' && positionTile == '5,2') {
      setDialogue('none')
      setPositionX(positionX => positionX + 1)
    }
    if (dialogue === 'block' && positionTile == '6,2') {
      setDialogue('none')
      setPositionX(positionX => positionX + 1)
    }
  }

  function handleDialogueTreasure() {
    if (dialogueCounter < Object.keys(data.dialogueTreasure).length - 1) {
      setDialogueCounter(dialogueCounter => dialogueCounter + 1)
      console.log(dialogueCounter);
    }
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
      setBlinkButton('app__button--warning')
      setDialogueLetter(`you've found a letter, do you want to read it?`)
    } else {
      setWarning('none')
      setBlinkButton('')
    }
    // if (positionTile == '4,2' && firstStop == true) {
    //   moveStop('left')
    //   setPositionX(positionX => positionX + 1)
    //   setDialogue('block')
    //   setDialogueLetter('You just realized you missed an item')
    // }
    // if (positionTile == '5,2' && secondStop === true) {
    //   setDialogueLetter('the bridge is really scary, still want to continue?')
    //   setDialogue('block')
    //   moveStop('left')
    // }
    // if (positionTile == '6,2' && thirdStop === true) {
    //   setDialogueLetter('you sure you want to continue?')
    //   setDialogue('block')
    //   moveStop('left')
    // }
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

            <div className='app__tile app__treasure--container'>
              <img className='app__treasure' src={treasureAsset} alt="treasure" />
            </div>
          </div>
        </div>

        <div style={{ display: 'none' }}>
          <Dialogue
            text={dialogueText}
            next={dialogueNext}
            ok={dialogueOk}
            yesNo={dialogueYesNo}
          />
        </div>

        {/* <div className='app__dialogue'
          style={{ display: `${dialogue}` }}
        >
          <p>{dialogueLetter}</p>
          <button>yes(z)</button>
          <button>no(x)</button>
        </div> */}

        <div className='app__letter--read'
          style={{ display: `${letter}` }}
        >
          <button>close(x)</button>
          <p>Dear Adventurer,</p>
          <br />
          <p>
            To claim your treasure, you must cross the narrow and dangerous bridge that
            connects our island to the mainland. The sea below is infested with dangerous
            creatures, and we urge you to stay away from the edges. Though the journey is
            perilous, the treasure is worth the risk. May fortune favor the brave.
          </p>
          <br />
          <p>Sincerely,</p>
          <p>The Guardians of the Treasure Island</p>
        </div>

        {/* <div className='app__dialogue'
          style={{ display: `${dialogueTreasure}` }}
        >
          <p>{data.dialogueTreasure[dialogueCounter]}</p>
          <button
            onClick={() => handleDialogueTreasure()}
          >next(z)</button>
        </div> */}
      </div>

      <div className='app__button--container'>
        <div className='app__zx'>
          <button className={`app__button ${blinkButton}`}
            onClick={() => handleClickZ()}
          ><p>Z</p></button>
          <button className='app__button'
            onClick={() => handleClickX()}
          ><p>X</p></button>
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