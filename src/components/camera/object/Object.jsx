import React from 'react'
import './Object.css'
import grassAsset from '../../../assets/Grass tiles v.2.png'
import bridgeAsset from '../../../assets/Wood Bridge.png'
import ObjectLoop from './ObjectLoop'
import ObjectImage from './ObjectImage'

function Object({ oneIslandPlacement, oneIslandTile, bridgePlacement, bridgeTile, twoIslandPlacement, twoIslandTile }) {
  return (
    <>
      <ObjectLoop
        placement={oneIslandPlacement}
        tileCoordinate={oneIslandTile}
        tileAsset={
          <ObjectImage asset={grassAsset} width={176} />
        }
      />

      <ObjectLoop
        placement={twoIslandPlacement}
        tileCoordinate={twoIslandTile}
        tileAsset={
          <ObjectImage asset={grassAsset} width={176} />
        }
      />

      <ObjectLoop
        placement={bridgePlacement}
        tileCoordinate={bridgeTile}
        tileAsset={
          <ObjectImage asset={bridgeAsset} width={80} />
        }
      />
    </>
  )
}

export default Object