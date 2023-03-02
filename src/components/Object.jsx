import React, { useEffect, useState } from 'react'
import './Object.css'
import data from '../data/data.json'
import islandOneSrc from '../assets/Grass tiles v.2.png'
import bridge from '../assets/Wood Bridge.png'

function Object() {
  const groundArray = [
    [1, 1], [1, 2], [1, 3],
    [2, 1], [2, 2], [2, 3],
    [3, 1], [3, 2], [3, 3],
  ]
  const tileArray = [
    [0, 0], [1, 0], [2, 0],
    [0, 1], [1, 1], [2, 1],
    [0, 2], [1, 2], [2, 2],
  ]

  // const [groundTile, setGroundTile] = useState()
  const [object, setObject] = useState()

  useEffect(() => {
    const objectArray = []

    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const element = data[key];
        // console.log(element);
        console.log(element.placement);
        // console.log(element.tile);
        // console.log(element.asset);
        // console.log(key);
        for (const iterator of element.placement) {
          console.log(iterator);

          objectArray.push(
            <div key={key} className={`${key}Image`}></div>
          )
        }

      }
    }

    setObject(objectArray)
    // const groundTileArray = []

    // for (let index = 0; index < groundArray.length; index++) {
    //   const element = groundArray[index];

    //   groundTileArray.push(
    //     <div key={index} className='ground'
    //       style={{
    //         top: `calc(85px * ${element[0]})`,
    //         left: `calc(85px * ${element[1]})`,
    //       }}
    //     >
    //       <img className='ground__asset' src={groundAsset} alt="ground"
    //         style={{ transform: `translate(calc(-16px * 5 * ${tileArray[index][0]}), calc(-16px * 5 * ${tileArray[index][1]}))` }}
    //       />
    //     </div>
    //   )
    // }

    // setGroundTile(groundTileArray)
  }, [])


  return (
    <div>
      {/* {groundTile} */}
      {object}
      {/* test */}
    </div>
  )
}

export default Object