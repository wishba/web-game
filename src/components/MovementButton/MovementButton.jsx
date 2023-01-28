import React, { useState } from 'react'

function MovementButton() {

  const [positionX, setPositionX] = useState(0)
  const [positionY, setPositionY] = useState(0)

  const clickRight = () => {
    setPositionX(positionX + 1)
  }
  const clickLeft = () => {
    setPositionX(positionX - 1)
  }
  const clickUp = () => {
    setPositionY(positionY + 1)
  }
  const clickDown = () => {
    setPositionY(positionY - 1)
  }

  return (
    <div>
      <div>
        <button onClick={clickRight}>r</button>
        <button onClick={clickLeft}>l</button>
        <button onClick={clickUp}>u</button>
        <button onClick={clickDown}>d</button>
      </div>

      <div>
        <p>coordinate : <span>{positionX}</span> / <span>{positionY}</span></p>
      </div>
    </div>
  )
}

export default MovementButton