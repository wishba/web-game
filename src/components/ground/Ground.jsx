import React from 'react'
import './Ground.css'
import data from '../../data/data.json'
import grassAsset from '../../assets/Grass tiles v.2.png'
import bridgeAsset from '../../assets/Wood Bridge.png'
import GroundTiles from './GroundTiles'
import GridLine from './gridLine/GridLine'
import Area from './area/Area'

function Ground() {
  return (
    <>
      <GridLine width={14} height={6} />

      <div>
        <GroundTiles
          placement={data.object.oneIsland.placement}
          tileCoordinate={data.object.oneIsland.asset}
          asset={grassAsset}
          width={176}
        />

        <GroundTiles
          placement={data.object.twoIsland.placement}
          tileCoordinate={data.object.twoIsland.asset}
          asset={grassAsset}
          width={176}
        />

        <GroundTiles
          placement={data.object.bridge.placement}
          tileCoordinate={data.object.bridge.asset}
          asset={bridgeAsset}
          width={80}
        />
      </div>

      <div className='ground__area'>
        <Area areaPlacement={data.ground} />
      </div>
    </>
  )
}

export default Ground