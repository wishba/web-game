import React from 'react'
import './Area.css'

function Area({ areaPlacement, color }) {
  const wall = []
  for (const key in areaPlacement) {
    if (Object.hasOwnProperty.call(areaPlacement, key)) {
      wall.push(
        <div key={areaPlacement[key]} className='area' style={{
          transform: `translate(
            calc(var(--zoom) * 8px * ${areaPlacement[key][0]}), 
            calc(var(--zoom) * 8px * ${areaPlacement[key][1]})
          )`,
          backgroundColor: color,
        }}></div>
      )
    }
  }

  return (<>{wall}</>)
}

export default Area