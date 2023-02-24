import React, { useEffect, useRef, useState } from 'react'
import './MapGrid.css'

function MapGrid() {
  const tile = 16
  const zoom = 5
  const tileZoom = tile * zoom

  const grid = useRef(null)

  const [tileSets, setTileSets] = useState([])
  const [tileRows, setTileRows] = useState(0)
  const [tileColumns, setTileColumns] = useState(0)

  const gridAuto = tileColumns - 1
  console.log(tileColumns);
  // console.log(gridAuto);

  useEffect(() => {
    if (grid.current) {
      const tileInWidth = Math.floor(grid.current.offsetWidth / tileZoom)
      const tileInHeight = Math.floor(grid.current.offsetHeight / tileZoom)

      setTileColumns(tileInHeight)
      setTileRows(tileInWidth - tileColumns)

      const tile = []
      for (let indexW = 0; indexW < tileInWidth; indexW++) {
        for (let indexH = 0; indexH < tileInHeight; indexH++) {
          tile.push(<div key={`${indexW}w/${indexH}h`}>{`${indexW}w/${indexH}h`}</div>)
        }
      }
      setTileSets(tile)
    }
  }, [])



  return (
    <div ref={grid} className='grid__container'>
      <div
        style={{
          display: 'grid',
          // gridTemplateColumns: `repeat(5, 1fr)`,
          gridTemplateColumns: `repeat(${tileColumns}, 1fr)`,
        }}
      >{tileSets}</div>
    </div>
  )
}

export default MapGrid