import React from 'react'
import ObjectTile from './ObjectTile'
import grassAsset from '../../assets/Grass tiles v.2.png'
import bridgeAsset from '../../assets/Wood Bridge.png'

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
      <ObjectTile
        placement={oneIslandPlacement}
        tileAsset={<img src={grassAsset} alt="grass asset" />}
      />
      <ObjectTile
        placement={bridgePlacement}
        tileAsset={<img src={bridgeAsset} alt="bridge asset" />}
      />
    </>
  )
}

export default Object