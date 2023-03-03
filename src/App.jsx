import React from 'react'
import './App.css'
import Object from './components/object/Object'

function App() {
  const styles = { '--zoom': '5' }

  return (
    <div style={styles}>
      <Object />
    </div>
  )
}

export default App