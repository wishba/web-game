import React from 'react'
import './App.css'
import GridLine from './components/GridLine'
import Ground from './components/Ground'
import GroundBridge from './components/GroundBridge'
import HeroMovement from './components/HeroMovement'
import Object from './components/Object'
import ObjectIslandOne from './components/ObjectIslandOne'

function App() {
  const styles = { '--zoom': '5' }

  return (
    <div style={styles}>
      {/* <HeroMovement /> */}
      {/* <GroundBridge /> */}
      {/* <Ground /> */}
      <Object />
      {/* <GridLine /> */}
      {/* <ObjectIslandOne /> */}
    </div>
  )
}

export default App