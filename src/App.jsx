import React from 'react'
import './App.css'
import GridLine from './components/GridLine'
import Ground from './components/Ground'
import GroundBridge from './components/GroundBridge'
import HeroMovement from './components/HeroMovement'
import Object from './components/object/Object'

function App() {
  const styles = { '--zoom': '5' }

  return (
    <div style={styles}>
      <HeroMovement />
      <GroundBridge />
      <Ground />
      <GridLine />
      <Object />
    </div>
  )
}

export default App