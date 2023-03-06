import React from 'react'
import './App.css'
import Movement from './components/Movement'

function App() {
  const styles = {
    '--zoom': '5',
    '--gridLine-display': 'none'
  }
  return (
    <div style={styles}>
      <Movement />
    </div>
  )
}

export default App