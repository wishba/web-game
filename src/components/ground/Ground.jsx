import React from 'react'
import './Ground.css'
import data from '../../data/data.json'
import GroundTiles from './GroundTiles'
import grassAsset from '../../assets/Grass tiles v.2.png'
import bridgeAsset from '../../assets/Wood Bridge.png'

function Ground() {
  return (
    // <div className='app__tile'>
    //   <img className='object__grass' src={grassAsset} alt="grass asset" />
    // </div>
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
  )
}

export default Ground