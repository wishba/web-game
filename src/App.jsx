import React from 'react'
import './App.css'
import GridLine from './components/gridLine/GridLine'
import Screen from './components/screen/Screen'

function App() {
  const styles = { '--zoom': '5' }

  return (
    <div style={styles}>
      <div className='app__screenContainer'>
        <Screen />
      </div>
      <GridLine />
    </div>
  )
}

export default App