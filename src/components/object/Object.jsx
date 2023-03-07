import React from 'react'
import './Object.css'
import grassAsset from '../../assets/Grass tiles v.2.png'
import bridgeAsset from '../../assets/Wood Bridge.png'
import ObjectLoop from './ObjectLoop'
import ObjectImage from './ObjectImage'
import data from '../../data/data.json'

function Object() {
  return (
    <div className='object'>
      <ObjectLoop
        placement={data.oneIsland.placement}
        tileCoordinate={data.oneIsland.asset}
        tileAsset={
          <ObjectImage asset={grassAsset} width={176} />
        }
      />

      <ObjectLoop
        placement={data.twoIsland.placement}
        tileCoordinate={data.twoIsland.asset}
        tileAsset={
          <ObjectImage asset={grassAsset} width={176} />
        }
      />

      <ObjectLoop
        placement={data.bridge.placement}
        tileCoordinate={data.bridge.asset}
        tileAsset={
          <ObjectImage asset={bridgeAsset} width={80} />
        }
      />
    </div>
  )
}

export default Object