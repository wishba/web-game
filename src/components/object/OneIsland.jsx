import React from 'react'
import ObjectTile from './ObjectTile'
import grassAsset from '../../assets/Grass tiles v.2.png'
import { objectUtils } from './utils/objectUtils'

function OneIsland() {
  const placementArray = [
    [1, 1], [1, 2], [1, 3],
    [2, 1], [2, 2], [2, 3],
    [3, 1], [3, 2], [3, 3],
  ]
  const assetArray = [
    [0, 0], [1, 0], [2, 0],
    [0, 1], [1, 1], [2, 1],
    [0, 2], [1, 2], [2, 2],
  ]

  objectUtils(placementArray)

  return (
    <>
      <ObjectTile asset={grassAsset} assetWidth={176} />
    </>
  )
}

export default OneIsland