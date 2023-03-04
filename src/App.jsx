import React from 'react'
import './App.css'
import GridLine from './components/gridLine/GridLine'
import Movement from './components/movement/Movement'

function App() {
  const styles = { '--zoom': '5' }
  return (
    <div style={styles}>
      {/* <GridLine /> */}
      <Movement />
    </div>
  )
}

export default App