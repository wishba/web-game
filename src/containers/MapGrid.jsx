import React, { useEffect, useRef, useState } from 'react'
import './MapGrid.css'

function MapGrid() {
  const tile = 16
  const zoom = 5
  const tileZoom = tile * zoom

  const grid = useRef(null)
  const [tileSets, setTileSets] = useState([])
  // const [tileInWidth, setTileInWidth] = useState(0)
  useEffect(() => {
    if (grid.current) {
      const tileInWidth = Math.floor(grid.current.offsetWidth / tileZoom)
      // setTileInWidth(Math.floor(grid.current.offsetWidth / tileZoom))
      // setTileInWidth(Math.floor(grid.current.offsetWidth / tileZoom))
      const tileInHeight = Math.floor(grid.current.offsetHeight / tileZoom)

      // console.log(Math.floor(grid.current.offsetWidth / tileZoom));
      // console.log(tileInWidth);

      // console.log(`screen size: ${grid.current.offsetWidth}/${grid.current.offsetHeight}`);
      // console.log(`tile: ${tileInWidth} x ${tileInHeight}`);

      const tile = []
      for (let indexW = 0; indexW < tileInWidth; indexW++) {
        for (let indexH = 0; indexH < tileInHeight; indexH++) {
          // console.log(`${indexW}w/${indexH}h`);
          tile.push(<div key={`${indexW}w/${indexH}h`}>{`${indexW}w/${indexH}h`}</div>)
        }
      }
      setTileSets(tile)

      // const gridVertical = []
      // let indexVertical = 0
      // for (const iterator of Array.from({ length: tileInHeight })) {
      //   for (const iterator of Array.from({ length: tileInHeight })) {
      //   gridVertical.push(<div key={indexVertical}>{indexVertical}v</div>)
      //   indexVertical++
      //   console.log(typeof iterator);
      // }

      // const gridHorizontal = []
      // let indexHorizontal = 0
      // for (const iterator of Array.from({ length: tileInWidth })) {
      //   gridHorizontal.push(<div key={indexHorizontal}>{indexHorizontal}h</div>)
      //   indexHorizontal++
      // }
    }
  }, [])



  return (
    <div ref={grid} className='grid__container'
      style={{
        // display: 'grid',
        // gridTemplateColumns: 'repeat(5, 1fr)',
      }}
    >
      {/* <div className='grid'></div> */}
      {/* <div>{gridVertical}</div> */}
      {/* <div>{gridHorizontal}</div> */}
      <div
        style={{
          // display: 'grid',
          // gridTemplateColumns: `repeat(5, 1fr)`,
        }}
      >{tileSets}</div>
    </div>
  )
}

export default MapGrid