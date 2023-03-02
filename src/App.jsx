import React from 'react'
import './App.css'
import GridLine from './components/GridLine'
import Ground from './components/Ground'
import GroundBridge from './components/GroundBridge'
import HeroMovement from './components/HeroMovement'

function App() {
  const styles = { '--zoom': '5' }

  return (
    <div style={styles}>
      <HeroMovement />
      <GroundBridge />
      <Ground />
      <GridLine />
    </div>
  )
}

export default App