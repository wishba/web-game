import React from 'react'
import './Ground.css'
import data from '../../data/data.json'
import GroundTiles from './GroundTiles'
import letterAsset from '../../assets/Basic Plants.png'
import chestAsset from '../../assets/Chest.png'
import biomeAsset from '../../assets/Basic Grass Biom things 1.png'
import Area from './area/Area'

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

      <GroundTiles
        placement={data.object.fruit.placement}
        tileCoordinate={data.object.fruit.asset}
        asset={biomeAsset}
        width={144}
      />

      <GroundTiles
        placement={data.object.fruitSecret.placement}
        tileCoordinate={data.object.fruitSecret.asset}
        asset={biomeAsset}
        width={144}
      />
    </>
  )
}

export default GroundObject