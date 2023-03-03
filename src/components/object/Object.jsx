import React from 'react'
import ObjectLoop from './ObjectLoop'
import grassAsset from '../../assets/Grass tiles v.2.png'
import bridgeAsset from '../../assets/Wood Bridge.png'
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
        placement={bridgePlacement}
        tileCoordinate={bridgeTile}
        tileAsset={
          <ObjectImage asset={bridgeAsset} width={80} transformX={2} transformY={1} />
        }
      />
    </>
  )
}

export default Object