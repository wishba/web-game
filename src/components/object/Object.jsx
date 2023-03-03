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
  const bridgePlacement = [
    [2, 3], [2, 4], [2, 5], [2, 6], [2, 7],
  ]
  return (
    <>
      <ObjectLoop
        placement={oneIslandPlacement}
        tileAsset={
          <ObjectImage asset={grassAsset} width={176} positionX={1} positionY={1} />
        }
      />
      <ObjectLoop
        placement={bridgePlacement}
        tileAsset={
          <ObjectImage asset={bridgeAsset} width={80} positionX={1} positionY={0} />
        }
      />
    </>
  )
}

export default Object