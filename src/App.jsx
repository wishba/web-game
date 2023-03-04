import React from 'react'
import './App.css'
import Screen from './components/screen/Screen'
import GridLine from './components/gridLine/GridLine'

function App() {
  const styles = { '--zoom': '5' }
  return (
    <div style={styles}>
      <Screen />
      <GridLine />
    </div>
  )
}

export default App