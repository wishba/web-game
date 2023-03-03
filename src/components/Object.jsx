import React from 'react'
import './Ground.css'
// import grassAsset from '../assets/Grass tiles v.2.png'

function Object({ style, top, left, styleWidth, asset, styleX, styleY }) {
  return (
    <div className={style}
      style={{
        top: `calc(85px * ${top})`,
        left: `calc(85px * ${left})`,
      }}
    >
      <img className={styleWidth} src={asset} alt="grass asset"
        style={{
          transform:
            `translate(
                  calc(-16px * 5 * ${styleX}), 
                  calc(-16px * 5 * ${styleY}))`
        }}
      />
    </div>
  )
}

export default Object