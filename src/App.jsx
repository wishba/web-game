import React from 'react'
import './App.css'
import GridLine from './components/GridLine'
import Hero from './components/Hero'

function App() {
  const styles = {
    '--zoom': '5',
  }

  return (
    <div style={styles}>
      <Hero />
      <GridLine />
    </div>
  )
}

export default App