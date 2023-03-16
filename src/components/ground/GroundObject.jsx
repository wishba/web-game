import React from 'react'
import './Ground.css'
import data from '../../data/data.json'
import GroundTiles from './GroundTiles'
import letterAsset from '../../assets/Basic Plants.png'
import chestAsset from '../../assets/Chest.png'
import cowAsset from '../../assets/Free Cow Sprites.png'
import biomeAsset from '../../assets/Basic Grass Biom things 1.png'

function GroundObject({ fruit }) {
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
        placement={data.object.cow.placement}
        tileCoordinate={data.object.cow.asset}
        asset={cowAsset}
        width={96}
      />

      <GroundTiles
        placement={data.object.tree.placement}
        tileCoordinate={data.object.tree.asset}
        asset={biomeAsset}
        width={144}
      />

      <div style={{ display: fruit }}>
        <GroundTiles
          placement={data.object.fruit.placement}
          tileCoordinate={data.object.fruit.asset}
          asset={biomeAsset}
          width={144}
        />
      </div>
    </>
  )
}

export default GroundObject