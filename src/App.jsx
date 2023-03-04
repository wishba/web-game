import React from 'react'
import './App.css'
import Camera from './components/screen/Camera'
import GridLine from './components/gridLine/GridLine'

function App() {
  const styles = { '--zoom': '5' }
  return (
    <div style={styles}>
      <Camera />
      <GridLine />
    </div>
  )
}

export default App