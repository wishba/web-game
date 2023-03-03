import React from 'react'
import './App.css'
import HeroMovement from './components/HeroMovement'
<<<<<<< HEAD
import Object from './components/object/Object'
=======
import GroundBridge from './components/GroundBridge'
import Ground from './components/Ground'
import GridLine from './components/GridLine'
>>>>>>> e5baec9b64db28c6ad2bdeb13ffdf3c5f14ffc01

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