import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import data from './data/data.json'
import soundAsset from './assets/Bubble heavy 1.wav'
import Hero from './components/hero/Hero'
import Ground from './components/ground/Ground'
import Dialogue from './components/dialogue/Dialogue'
import Letter from './components/letter/Letter'
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

  const [heroFacing, setHeroFacing] = useState('')
  const [heroEmotion, setHeroEmotion] = useState('none')

  const [treeZIndex, setTreeIndex] = useState('0')
  const [cowZIndex, setCowIndex] = useState('0')

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

  function walkingSound() { new Audio(soundAsset).play() }

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
            walkingSound()
            return
          case 'left':
            counter()
            setHeroFacing(`left--${count}`)
            walkingSound()
            return
          case 'right':
            counter()
            setHeroFacing(`right--${count}`)
            walkingSound()
            return
          case 'down':
            counter()
            setHeroFacing(`down--${count}`)
            walkingSound()
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

      setTimeout(() => { setHeroFacing(`${heroFacing}`); walkingSound() }, 300)
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

    if (positionTile == '2,2') {
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
      setDialogue('none')
      setDialogueText('')
      setDialogueButton('')
      setAllowMove(true)
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
            <Ground helper={''} />
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

        <Dialogue
          display={'none'}
          text={`
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, velit.
          `}
          choice={'yesNo'}
        />

        <Letter display={'none'} />

        <div className='app__dialogue' style={{ display: dialogue }}>
          <br />
          <p>{dialogueText}</p>
          <br />
          {dialogueButton === 'ok' ? <button>ok(z)</button> : ''}
          {dialogueButton === 'next' ? <button>next(z)</button> : ''}
          {dialogueButton === 'yesNo' ? <button>yes(z)</button> : ''}
          {dialogueButton === 'yesNo' ? <button>no(x)</button> : ''}
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