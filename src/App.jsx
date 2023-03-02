import React from 'react'
import './App.css'
import HeroMovement from './components/HeroMovement'
import GroundBridge from './components/GroundBridge'
import Ground from './components/Ground'
import GridLine from './components/GridLine'

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