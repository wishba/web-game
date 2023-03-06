import React from 'react'
import './Camera.css'
import Hero from './hero/Hero'
import Object from './object/Object'
import GridLine from './gridLine/GridLine'

function Camera({
  cameraX,
  cameraY,
  oneIslandPlacement,
  oneIslandTile,
  bridgePlacement,
  bridgeTile,
  twoIslandPlacement,
  twoIslandTile,
  face
}) {
  return (
    <div className='camera'>
      <div className='camera__hero'>
        <Hero face={face} />
      </div>

      <div style={{
        transform: `translate(${cameraX}px, ${cameraY}px)`,
      }}>
        <div style={{
          transform: 'translate(calc(16px * var(--zoom) * 2), calc(16px * var(--zoom) * 2))',
        }}>
          <Object
            oneIslandPlacement={oneIslandPlacement}
            oneIslandTile={oneIslandTile}
            bridgePlacement={bridgePlacement}
            bridgeTile={bridgeTile}
            twoIslandPlacement={twoIslandPlacement}
            twoIslandTile={twoIslandTile}
          />

          <div style={{
            position: 'absolute',
            zIndex: '-1',
            top: '0',
          }}>
            <GridLine />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Camera