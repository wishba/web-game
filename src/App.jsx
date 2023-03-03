import React from 'react'
import './App.css'
import Object from './components/object/Object'
import GridLine from './components/gridLine/GridLine'

function App() {
  const styles = { '--zoom': '5' }

  return (
    <div style={styles}>
      <Object />
      <GridLine />
    </div>
  )
}

export default App