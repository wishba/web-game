import React from 'react'
import './Ground.css'
import data from '../../data/data.json'
import GroundTiles from './GroundTiles'
import letterAsset from '../../assets/Basic Plants.png'
import chestAsset from '../../assets/Chest.png'
import cowAsset from '../../assets/Free Cow Sprites.png'
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

      {/* <GroundTiles
        placement={data.object.cow.placement}
        tileCoordinate={data.object.cow.asset}
        asset={cowAsset}
        width={96}
      /> */}

      <GroundTiles
        placement={data.object.fruitSecret.placement}
        tileCoordinate={data.object.fruitSecret.asset}
        asset={biomeAsset}
        width={144}
      />

      {/* <GroundTiles
        placement={data.object.tree.placement}
        tileCoordinate={data.object.tree.asset}
        asset={biomeAsset}
        width={144}
      /> */}

<<<<<<< HEAD
<<<<<<< HEAD
      <div style={{ display: fruit }}>
        <GroundTiles
          placement={data.object.fruit.placement}
          tileCoordinate={data.object.fruit.asset}
          asset={biomeAsset}
          width={144}
        />
      </div>

      <div style={{ display: fruit }}>
        <GroundTiles
          placement={data.object.fruitSecret.placement}
          tileCoordinate={data.object.fruitSecret.asset}
          asset={biomeAsset}
          width={144}
        />
      </div>

      {/* <div className='ground__area ground__area--object'>
        <Area
          areaPlacement={data.objectArea}
        />
      </div> */}
=======
      <div className='ground__area ground__area--object'>
=======
      {/* <div className='ground__area ground__area--object'>
>>>>>>> 5d177913877ff43984a25b124fbc1b6b9e29769e
        <Area
          areaPlacement={data.objectArea}
        />
      </div> */}

      {/* <div className='ground__area ground__area--front'>
        <Area
          areaPlacement={data.frontArea}
        />
      </div> */}

      {/* <div className='ground__area ground__area--front'>
        <Area
          areaPlacement={data.frontCow}
        />
<<<<<<< HEAD
      </div>
>>>>>>> e947db915f6360d1626c5cb5147278fb5c93cecf
=======
      </div> */}
>>>>>>> 5d177913877ff43984a25b124fbc1b6b9e29769e
    </>
  )
}

export default GroundObject