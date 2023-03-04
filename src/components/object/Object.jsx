import React from 'react'
import './Object.css'
import grassAsset from '../../assets/Grass tiles v.2.png'
import bridgeAsset from '../../assets/Wood Bridge.png'
import ObjectLoop from './ObjectLoop'
import ObjectImage from './ObjectImage'

function Object() {
  const oneIslandPlacement = [
    [1, 1], [1, 2], [1, 3],
    [2, 1], [2, 2], [2, 3],
    [3, 1], [3, 2], [3, 3],
  ]
  const oneIslandTile = [
    [0, 0], [1, 0], [2, 0],
    [0, 1], [1, 1], [2, 1],
    [0, 2], [1, 2], [2, 2],
  ]

  const bridgePlacement = [
    [2, 3], [2, 4], [2, 5], [2, 6], [2, 7],
  ]
  const bridgeTile = [
    [2, 1], [3, 1], [3, 1], [3, 1], [4, 1],
  ]

  const twoIslandPlacement = [
    [1, 7], [1, 8], [1, 9], [1, 10], [1, 11], [1, 12],
    [2, 7], [2, 8], [2, 9], [2, 10], [2, 11], [2, 12],
    [3, 7], [3, 8], [3, 9], [3, 10], [3, 11], [3, 12],
    /*    */[4, 8], [4, 9], [4, 10], [4, 11], [4, 12],
  ]
  const twoIslandTile = [
    [0, 0], [1, 0], [1, 0], [1, 0], [1, 0], [2, 0],
    [0, 1], [1, 1], [1, 1], [1, 1], [1, 1], [2, 1],
    [0, 2], [6, 1], [1, 1], [1, 1], [1, 1], [2, 1],
    /*    */[0, 2], [1, 2], [1, 2], [1, 2], [2, 2],
  ]

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