import { useState } from 'react'

function App() {

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

  const spriteMainWidth = '14px'
  const spriteMainHeight = '14px'
  const zoomSize = '5'

  const style = {
    position: 'absolute',

    left: `calc(50% + ${positionX}px)`,
    top: `calc(50% + ${positionY}px * -1)`,

    width: `calc(${spriteMainWidth} * ${zoomSize})`,
    height: `calc(${spriteMainHeight} * ${zoomSize})`,
  }

  return (
    <div>
      <div>
        <button onClick={clickUp}>Up</button>
        <button onClick={clickLeft}>Left</button>
        <button onClick={clickRight}>Right</button>
        <button onClick={clickDown}>Down</button>
      </div>

      <div>
        <p>coordinate : <span>{positionX}</span> / <span>{positionY}</span></p>
      </div>

      <img style={style} src="/icon.png" alt="sprite main" />
    </div>
  )
}

export default App
