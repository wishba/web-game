import React from 'react'
import ObjectTile from './ObjectTile'
import OneIsland from './OneIsland'
import grassAsset from '../../assets/Grass tiles v.2.png'

function Object() {
  const oneIslandPlacement = [
    [1, 1], [1, 2], [1, 3],
    [2, 1], [2, 2], [2, 3],
    [3, 1], [3, 2], [3, 3],
  ]
  return (
    <>
      <ObjectTile oneIslandPlacement={oneIslandPlacement} oneIsland={<OneIsland grassAsset={grassAsset} />} />
    </>
  )
}

export default Object