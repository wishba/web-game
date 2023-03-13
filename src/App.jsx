import React from 'react'
import './App.css'
import GroundLine from './components/ground/GroundLine'

function App() {
  const styles = {
    '--zoom': '5',
    '--tile-size': 'calc(var(--zoom) * 16px)',
    '--font-size': 'calc(var(--zoom) * 10px)',
  }

  return (
    <div style={styles}>
      <GroundLine horizontal={7} vertical={5} />
    </div>
  )
}

export default App