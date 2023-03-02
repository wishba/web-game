import React from 'react'

function ObjectIslandOne() {
  const coordinatePlacement = [
    [1, 1], [1, 2], [1, 3],
    [2, 1], [2, 2], [2, 3],
    [3, 1], [3, 2], [3, 3],
  ]
  const coordinateAsset = [
    [0, 0], [1, 0], [2, 0],
    [0, 1], [1, 1], [2, 1],
    [0, 2], [1, 2], [2, 2],
  ]

  return (
    // <>
    //   <div>{coordinatePlacement}</div>
    //   <div>{coordinateAsset}</div>
    // </>
    coordinatePlacement
  )
}

export default ObjectIslandOne