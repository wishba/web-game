import React from 'react'
import './Object.css'
import grassAsset from '../../assets/Grass tiles v.2.png'
import bridgeAsset from '../../assets/Wood Bridge.png'
import ObjectLoop from './ObjectLoop'
import data from '../../data/data.json'

function Object() {
  return (
    <>
      <ObjectLoop
        placement={data.object.oneIsland.placement}
        tileCoordinate={data.object.oneIsland.asset}
        asset={grassAsset}
        width={176}
      />

      <ObjectLoop
        placement={data.object.twoIsland.placement}
        tileCoordinate={data.object.twoIsland.asset}
        asset={grassAsset}
        width={176}
      />

      <ObjectLoop
        placement={data.object.bridge.placement}
        tileCoordinate={data.object.bridge.asset}
        asset={bridgeAsset}
        width={80}
      />
    </>
  )
}

export default Object