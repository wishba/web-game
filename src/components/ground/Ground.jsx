import React from 'react'
import './Ground.css'
import data from '../../data/data.json'
import grassAsset from '../../assets/Grass tiles v.2.png'
import bridgeAsset from '../../assets/Wood Bridge.png'
import letterAsset from '../../assets/Basic Plants.png'
import GroundTiles from './GroundTiles'

function Ground() {
  return (
    <>
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

      <GroundTiles
        placement={data.object.letter.placement}
        tileCoordinate={data.object.letter.asset}
        asset={letterAsset}
        width={96}
      />
    </>
  )
}

export default Ground