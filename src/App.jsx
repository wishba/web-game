import React from 'react'
import './App.css'
import GridLine from './components/GridLine'
import Ground from './components/Ground'
import Hero from './components/Hero'

function App() {
  const styles = {
    '--zoom': '5',
  }

  return (
    <div style={styles}>
      <Hero />
      <Ground />
      <GridLine />
    </div>
  )
}

export default App