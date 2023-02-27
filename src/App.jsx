import React from 'react'
import './App.css'
import GridLine from './components/GridLine'

function App() {
  const styles = {
    '--zoom': '5',
  }

  return (
    <div style={styles}>
      <GridLine />
    </div>
  )
}

export default App