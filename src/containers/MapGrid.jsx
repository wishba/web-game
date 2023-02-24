import React, { useEffect, useRef, useState } from 'react'
import './MapGrid.css'

function MapGrid() {
  const tileSize = 16
  const zoom = 5
  const tileZoom = tileSize * zoom

  const gridContainerRef = useRef(null)

  const [tileSets, setTileSets] = useState([])
  const [tileRows, setTileRows] = useState(0)
  const [tileColumns, setTileColumns] = useState(0)

  useEffect(() => {
    if (gridContainerRef.current) {
      const tileInWidth = Math.floor(gridContainerRef.current.offsetWidth / tileZoom)
      const tileInHeight = Math.floor(gridContainerRef.current.offsetHeight / tileZoom)

      setTileColumns(tileInHeight)
      setTileRows(tileInWidth - tileColumns)

      const tileArray = []
      for (let indexH = 0; indexH < tileInHeight; indexH++) {
        for (let indexW = 0; indexW < tileInWidth; indexW++) {
          tileArray.push(
            <div key={`${indexW}/${indexH}`} className='grid'>
              {`${indexW}/${indexH}`}
            </div>
          )
        }
      }
      setTileSets(tileArray)
    }
  }, [])

  return (
    <div ref={gridContainerRef} className='grid__container'>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${tileRows}, auto)`,
      }}>
        {tileSets}
      </div>
    </div>
  )
}

export default MapGrid