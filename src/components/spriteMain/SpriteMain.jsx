import React, { useState } from 'react'
import imgSpriteMain from './sprite-main.png'

function spriteMain() {

  const [positionX, setPositionX] = useState(0)
  const [positionY, setPositionY] = useState(0)

  const style = {
    position: 'absolute',
    left: `calc(50% + ${positionX}px)`,
    top: `calc(50% + ${positionY}px)`,
    transform: 'translate(-50%, -50%)',
  }

  return (
    <>
      <img style={style} src={imgSpriteMain} alt="sprite main" />
      <button onClick={() => setPositionY(positionY - 1)}>up</button>
      <button onClick={() => setPositionX(positionX + 1)}>right</button>
      <button onClick={() => setPositionY(positionY + 1)}>down</button>
      <button onClick={() => setPositionX(positionX - 1)}>left</button>
    </>
  )
}

export default spriteMain