import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import data from './data/data.json'
import soundAssetWalk from './assets/Bubble heavy 1.wav'
import soundAssetCow from './assets/Fruit collect 1.wav'
import Hero from './components/hero/Hero'
import Ground from './components/ground/Ground'
import GroundTiles from './components/ground/GroundTiles'
import biomeAsset from './assets/Basic Grass Biom things 1.png'
import cowAsset from './assets/Free Cow Sprites.png'

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
  const [pressZ, setPressZ] = useState(false)
  const [pressX, setPressX] = useState(false)
  const [press, setPress] = useState(false)
  const [pressedKey, setPressedKey] = useState('')
  const [pressWarning, setPressWarning] = useState('')

  const [dialogue, setDialogue] = useState('none')
  const [dialogueText, setDialogueText] = useState('')
  const [dialogueButton, setDialogueButton] = useState('')
  const [dialogueLetter, setDialogueLetter] = useState('none')
  const [dialogueTreasure, setDialogueTreasure] = useState(1)
  const [dialogueSecret, setDialogueSecret] = useState(1)

  const [heroFacing, setHeroFacing] = useState('')
  const [heroEmotion, setHeroEmotion] = useState('none')

  const [firstStop, setFirstStop] = useState(true)
  const [secondStop, setSecondStop] = useState(true)
  const [thirdStop, setThirdStop] = useState(true)

  const [treeZIndex, setTreeIndex] = useState('0')
  const [cowZIndex, setCowIndex] = useState('0')

  const [fruitCow, setFruitCow] = useState('none')
  const [fruitSecret, setFruitSecret] = useState('block')

  const [allowMove, setAllowMove] = useState(true)
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

  function soundWalking() { new Audio(soundAssetWalk).play() }
  function soundCow() { new Audio(soundAssetCow).play() }

  function moveStart(direction) {
    if (allowMove === true) {
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
      function counter() { count++; if (count > 4) { count = 1 } }
      intervalAnimation.current = setInterval(() => {
        switch (direction) {
          case 'up':
            counter()
            setHeroFacing(`up--${count}`)
            soundWalking()
            return
          case 'left':
            counter()
            setHeroFacing(`left--${count}`)
            soundWalking()
            return
          case 'right':
            counter()
            setHeroFacing(`right--${count}`)
            soundWalking()
            return
          case 'down':
            counter()
            setHeroFacing(`down--${count}`)
            soundWalking()
            return
        }
      }, 250)

      setHeroFacing(direction)
    }
  }

  function moveStop(heroFacing) {
    if (allowMove === true) {
      clearInterval(intervalMovement.current)
      clearInterval(intervalAnimation.current)

      if (pressUp === true) { setPressUp(false) }
      if (pressLeft === true) { setPressLeft(false) }
      if (pressRight === true) { setPressRight(false) }
      if (pressDown === true) { setPressDown(false) }

      setTimeout(() => { setHeroFacing(`${heroFacing}`); soundWalking() }, 300)
    }
  }

  function closeDialogue() {
    setDialogue('none')
    setDialogueText('')
    setDialogueButton('')
    setAllowMove(true)
  }

  function handleButtonNext() {
    if (positionXY == '18,5' || positionXY == '18,6') {
      if (dialogueTreasure <= 9) {
        setDialogueTreasure(dialogueTreasure => dialogueTreasure + 1)
      }
      setDialogueText(`${data.dialogue.treasure[dialogueTreasure]}`)
      console.log(dialogueTreasure);

      if (dialogueTreasure === 3) {
        soundCow()
      }
      if (dialogueTreasure === 6) {
        soundCow()
      }
      if (dialogueTreasure === 7) {
        setFruitCow('block')
        setFruitSecret('none')
      }
    }

    if (positionXY == '24,5') {
      if (dialogueSecret < 3) {
        setDialogueSecret(dialogueSecret => dialogueSecret + 1)
      }
      setDialogueText(`${data.dialogue.treasureSecret[dialogueSecret]}`)
      console.log(dialogueSecret);

      if (dialogueSecret === 3) {
        soundCow()
      }
    }
  }
  function handleButtonOk() {
    if (positionTile == '3,2') {
      closeDialogue()
      setHeroEmotion('none')
      setPressWarning('')
    }
  }
  function handleButtonYes() {
    if (positionTile == '2,2') {
      setDialogueLetter('block')
    }
    if (positionTile == '4,2') {
      closeDialogue()
      setSecondStop(false)
      setHeroFacing('right')
    }
    if (positionTile == '5,2') {
      closeDialogue()
      setThirdStop(false)
      setHeroFacing('right')
    }
  }
  function handleButtonNo() {
    if (positionTile == '2,2') {
      closeDialogue()
      setHeroEmotion('')
      setPressWarning('app__button--warning')
    }
    if (positionTile == '4,2' || positionTile == '5,2') {
      closeDialogue()
    }
  }

  useEffect(() => {
    console.log(`${positionX}/${positionY} | ${positionXY} | ${positionTile}`)

    function coordinate(array, positionXY) {
      return array.some(element => element[0] === positionXY[0] && element[1] === positionXY[1])
    }

    if (coordinate(data.frontArea, positionXY)) { setTreeIndex('1') }
    if (!coordinate(data.frontArea, positionXY)) { setTreeIndex('0') }

    if (coordinate(data.frontCow, positionXY)) { setCowIndex('1'); setTreeIndex('2') }
    if (!coordinate(data.frontCow, positionXY)) { setCowIndex('0') }

    if (coordinate(data.objectArea, positionXY) || !coordinate(data.groundArea, positionXY)) {
      if (pressUp === true) { setPositionY(positionY - 1) }
      if (pressLeft === true) { setPositionX(positionX - 1) }
      if (pressRight === true) { setPositionX(positionX + 1) }
      if (pressDown === true) { setPositionY(positionY + 1) }
    }

    if (
      positionTile == '2,2' ||
      positionXY == '18,5' ||
      positionXY == '18,6' ||
      positionXY == '24,5'
    ) {
      setHeroEmotion('')
      setPressWarning('app__button--warning')
      if (dialogue === 'block') {
        setHeroEmotion('none')
        setPressWarning('')
      }
    } else {
      setHeroEmotion('none')
      setPressWarning('')
    }

    if (positionTile == '2,2' && pressZ === true) {
      setDialogue('block')
      setDialogueText(`${data.dialogue.letter}`)
      setDialogueButton('yesNo')
      setAllowMove(false)
    }
    if (positionTile == '2,2' && pressX === true) {
      closeDialogue()
    }

    if (positionTile == '2,2' && pressZ === true && dialogue === 'block') {
      setDialogueLetter('block')
    }
    if (positionTile == '2,2' && pressX === true && dialogue === 'block') {
      setDialogueLetter('none')
      setFirstStop(false)
    }

    if (positionTile == '4,2' && firstStop === true) {
      setDialogue('block')
      setDialogueText(`${data.dialogue.firstStop}`)
      setDialogueButton('ok')
      setPositionX(positionX + 1)
      setAllowMove(false)
      moveStop('left')
    }
    if (positionTile == '3,2' && pressZ === true) {
      closeDialogue()
    }

    if (positionTile == '5,2' && secondStop === true) {
      setDialogue('block')
      setDialogueText(`${data.dialogue.secondStop}`)
      setDialogueButton('yesNo')
      setPositionX(positionX + 1)
      setAllowMove(false)
      moveStop('left')
    }
    if (positionTile == '4,2' && pressZ === true) {
      closeDialogue()
      setSecondStop(false)
      setHeroFacing('right')
    }
    if (positionTile == '4,2' && pressX === true) {
      closeDialogue()
    }

    if (positionTile == '6,2' && thirdStop === true) {
      setDialogue('block')
      setDialogueText(`${data.dialogue.thirdStop}`)
      setDialogueButton('yesNo')
      setPositionX(positionX + 1)
      setAllowMove(false)
      moveStop('left')
    }
    if (positionTile == '5,2' && pressZ === true) {
      closeDialogue()
      setThirdStop(false)
      setHeroFacing('right')
    }
    if (positionTile == '5,2' && pressX === true) {
      closeDialogue()
    }

    if (positionXY == '18,5' && pressZ === true || positionXY == '18,6' && pressZ === true) {
      setDialogue('block')
      setDialogueText(`${data.dialogue.treasure[0]}`)
      setDialogueButton('next')
      setAllowMove(false)
    }
    if (positionXY == '18,5' && dialogue === 'block' && pressZ === true || positionXY == '18,6' && dialogue === 'block' && pressZ === true) {
      handleButtonNext()
    }

    if (positionXY == '24,5' && pressZ === true) {
      setDialogue('block')
      setDialogueText(`${data.dialogue.treasureSecret[0]}`)
      setDialogueButton('next')
      setAllowMove(false)
    }
    if (positionXY == '24,5' && pressZ === true && dialogue === 'block') {
      handleButtonNext()
    }
  }, [positionX, positionY, pressZ, pressX])

  useEffect(() => {
    document.addEventListener('keydown', (event) => { setPress(true); setPressedKey(event.key) })
    document.addEventListener('keyup', () => setPress(false))

    if (press === true) {
      switch (pressedKey) {
        case 'ArrowUp': moveStart('up'); break;
        case 'ArrowLeft': moveStart('left'); break;
        case 'ArrowRight': moveStart('right'); break;
        case 'ArrowDown': moveStart('down'); break;
        case 'z': setPressZ(true); break;
        case 'x': setPressX(true); break;
      }
    }
    if (press === false) {
      switch (pressedKey) {
        case 'ArrowUp': moveStop('up'); break;
        case 'ArrowLeft': moveStop('left'); break;
        case 'ArrowRight': moveStop('right'); break;
        case 'ArrowDown': moveStop('down'); break;
        case 'z': setPressZ(false); break;
        case 'x': setPressX(false); break;
      }
    }
  }, [press])

  return (
    <div style={styles} className='app__container'>
      <div className='app__camera'>
        <div style={{ transform: `translate(${positionX}px, ${positionY}px)` }}>
          <div className='app__camera--center'>
            <Ground helper={'none'} fruitCow={fruitCow} fruitSecret={fruitSecret} />
          </div>
        </div>

        <div style={{
          transform: `translate(${positionX}px, ${positionY}px)`,
          position: 'absolute',
          zIndex: cowZIndex
        }}>
          <div className='app__camera--center'>
            <GroundTiles
              placement={data.object.cow.placement}
              tileCoordinate={data.object.cow.asset}
              asset={cowAsset}
              width={96}
            />
          </div>
        </div>

        <div style={{
          transform: `translate(${positionX}px, ${positionY}px)`,
          position: 'absolute',
          zIndex: treeZIndex
        }}>
          <div className='app__camera--center'>
            <GroundTiles
              placement={data.object.tree.placement}
              tileCoordinate={data.object.tree.asset}
              asset={biomeAsset}
              width={144}
            />
          </div>
        </div>

        <div className='app__camera--center'>
          <Hero facing={heroFacing} emotion={heroEmotion} />
        </div>

        <div className='app__letter' style={{ display: dialogueLetter }} >
          <br />
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
          <br />
          <button
            onClick={() => {
              setDialogueLetter('none')
              closeDialogue()
              setFirstStop(false)
              setHeroEmotion('')
              setPressWarning('app__button--warning')
            }}
          >close(x)</button>
        </div>

        <div className='app__dialogue' style={{ display: dialogue }}>
          <br />
          <p>{dialogueText}</p>
          <br />
          {dialogueButton === 'ok' ?
            <button onClick={() => handleButtonOk()}>ok(z)</button> : ''
          }
          {dialogueButton === 'next' ?
            <button onClick={() => handleButtonNext()}>next(z)</button> : ''
          }
          {dialogueButton === 'yesNo' ?
            <button onClick={() => handleButtonYes()}>yes(z)</button> : ''
          }
          {dialogueButton === 'yesNo' ?
            <button onClick={() => handleButtonNo()}>no(x)</button> : ''
          }
        </div>
      </div>

      <div className='app__button--container'>
        <div className='app__zx'>
          <button className={pressZ === true
            ? 'app__button app__button--active'
            : `app__button ${pressWarning}`
          }
            onMouseDown={() => setPressZ(true)}
            onMouseUp={() => setPressZ(false)}
          ><p>Z</p></button>

          <button className={pressX === true
            ? 'app__button app__button--active'
            : 'app__button'
          }
            onMouseDown={() => setPressX(true)}
            onMouseUp={() => setPressX(false)}
          ><p>X</p></button>
        </div>

        <div className='app__arrow--container'>
          <button className={
            pressUp === true
              ? 'app__button app__button--up app__button--active'
              : 'app__button app__button--up'
          }
            onMouseDown={() => moveStart('up')}
            onMouseUp={() => moveStop('up')}
          ><p>&#8593;</p></button>

          <button className={
            pressLeft === true
              ? 'app__button app__button--left app__button--active'
              : 'app__button app__button--left'
          }
            onMouseDown={() => moveStart('left')}
            onMouseUp={() => moveStop('left')}
          ><p>&#8593;</p></button>

          <button className={
            pressRight === true
              ? 'app__button app__button--right app__button--active'
              : 'app__button app__button--right'
          }
            onMouseDown={() => moveStart('right')}
            onMouseUp={() => moveStop('right')}
          ><p>&#8593;</p></button>

          <button className={
            pressDown === true
              ? 'app__button app__button--down app__button--active'
              : 'app__button app__button--down'
          }
            onMouseDown={() => moveStart('down')}
            onMouseUp={() => moveStop('down')}
          ><p>&#8593;</p></button>
        </div>
      </div>
    </div>
  )
}

export default App