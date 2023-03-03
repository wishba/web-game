import React from 'react'
import './Ground.css'
// import grassAsset from '../assets/Grass tiles v.2.png'

function Object({ style, asset, styleX, styleY }) {
  return (
    <>
      <img className={style} src={asset} alt="grass asset"
        style={{
          transform:
            `translate(
                  calc(-16px * 5 * ${styleX}), 
                  calc(-16px * 5 * ${styleY}))`
        }}
      />
    </>
  )
}

export default Object