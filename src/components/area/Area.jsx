import React from 'react'
import './Area.css'

function Area({ areaPlacement }) {
  // const areaPlacement = [
  //   [3, 2], [4, 2], [5, 2], [6, 2],
  //   [3, 3], [4, 3], [5, 3], [6, 3],
  //   [3, 4], [4, 4], [5, 4], [6, 4],
  //   [3, 5], [4, 5], [5, 5], [6, 5],
  //   [3, 6], [4, 6], [5, 6], [6, 6],
  // ]

  const wall = []
  for (const key in areaPlacement) {
    if (Object.hasOwnProperty.call(areaPlacement, key)) {
      wall.push(
        <div key={areaPlacement[key]} className='area' style={{
          transform: `translate(
            calc(var(--zoom) * 8px * ${areaPlacement[key][0]}), 
            calc(var(--zoom) * 8px * ${areaPlacement[key][1]})
          )`
        }}></div>
      )
    }
  }

  return (<div>{wall}</div>)
}

export default Area