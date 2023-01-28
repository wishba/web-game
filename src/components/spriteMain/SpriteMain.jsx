import React, { useState } from 'react'
import spriteMainImg from './sprite-main.png'

function SpriteMain() {

  const [positionX, setPositionX] = useState(0)
  const [positionY, setPositionY] = useState(0)

  const spriteMainWidth = '14px'
  const spriteMainHeight = '14px'

  const zoomSize = '5'

  const style = {
    position: 'absolute',
    left: `calc(50% + ${positionX}px)`,
    top: `calc(50% + ${positionY}px)`,
    transform: 'translate(-50%, -50%)',

    width: `calc(${spriteMainWidth} * ${zoomSize})`,
    height: `calc(${spriteMainHeight} * ${zoomSize})`,
  }

  return (
    <>
      <img style={style} src={spriteMainImg} alt="sprite main" />
      <button onClick={() => setPositionY(positionY - 1)}>up</button>
      <button onClick={() => setPositionX(positionX + 1)}>right</button>
      <button onClick={() => setPositionY(positionY + 1)}>down</button>
      <button onClick={() => setPositionX(positionX - 1)}>left</button>
    </>
  )
}

export default SpriteMain