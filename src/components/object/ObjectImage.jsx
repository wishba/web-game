import React from 'react'

function ObjectImage({ asset, width }) {
  // function ObjectImage({ asset, width, transformX, transformY }) {
  return (
    <div>
      {/* <div className='appTile'> */}
      <img src={asset} alt="tile asset"
        style={{
          'width': `calc(var(--zoom) * ${width}px)`,
          // 'transform': `
          //   translate(calc(var(--zoom) * 16 * -${transformX}px), 
          //   calc(var(--zoom) * 16 * -${transformY}px))`,
        }}
      />
    </div>
  )
}

export default ObjectImage