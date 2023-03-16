import React from 'react'
import './Ground.css'
import letterAsset from '../../assets/Basic Plants.png'
import chestAsset from '../../assets/Chest.png'
import data from '../../data/data.json'
import GroundTiles from './GroundTiles'


function GroundObject() {
  return (
    <>
      <GroundTiles
        placement={data.object.letter.placement}
        tileCoordinate={data.object.letter.asset}
        asset={letterAsset}
        width={96}
      />

      <GroundTiles
        placement={data.object.chest.placement}
        tileCoordinate={data.object.chest.asset}
        asset={chestAsset}
        width={240}
      />
    </>
  )
}

export default GroundObject