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

      <GroundTiles
        placement={data.ground.oneIsland.placement}
        tileCoordinate={data.ground.oneIsland.asset}
        asset={grassAsset}
        width={176}
      />

      <GroundTiles
        placement={data.ground.twoIsland.placement}
        tileCoordinate={data.ground.twoIsland.asset}
        asset={grassAsset}
        width={176}
      />

      <GroundTiles
        placement={data.ground.bridge.placement}
        tileCoordinate={data.ground.bridge.asset}
        asset={bridgeAsset}
        width={80}
      />

      <div className='ground__area ground__area--ground'>
        <Area
          areaPlacement={data.groundArea}
        />
      </div>
    </>
  )
}

export default Ground