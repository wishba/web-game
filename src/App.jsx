import React from 'react'
import './App.css'
import Movement from './components/movement/Movement'

function App() {
  const styles = { '--zoom': '5' }
  return (
    <div style={styles}>
      <Movement />
    </div>
  )
}

export default App