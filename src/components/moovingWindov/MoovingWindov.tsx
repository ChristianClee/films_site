import React, { useRef, useState } from 'react';
import style from './MoovingWindov.module.css'
import type { ArrPictureT } from '../../constants/picturesArr'
import { useFirstMove, useIntervalMove, useMove } from './customHooks'
import MoveSide from './moveSide/MoveSide';
import Indicator from './indicator/Indicator';



const MoovingVindov: React.FC<{ pictures: ArrPictureT }> = ({ pictures }) => {

  const length = pictures.length
  const lineRef = useRef<HTMLDivElement>(null)
  const startIndex = Math.floor(length ** 5 / 2)
  
  const [count, setCount] = useState<number>(startIndex)
  const [current, setCurrent] = useState<number>(startIndex)
 
  useFirstMove(lineRef)
  useIntervalMove(setCount, count)
  useMove(lineRef, pictures, current, count, setCurrent)

  return (
    <div className={style.wrapper}>
      <div className={style.rightSide}>
        <MoveSide lineRef={lineRef} sign={1} setCount={setCount} />
      </div>

      <div className={style.leftSide}>
        <MoveSide lineRef={lineRef} sign={-1} setCount={setCount} />
      </div>
      
      <Indicator count={count} length={length} />

      <div className={style.line} ref={lineRef}>
        <Pictures pictures={pictures} />
      </div>
      
    </div>
      
  );
}
export default MoovingVindov;



const Pictures: React.FC<{pictures: ArrPictureT}> = ({ pictures }) => {
  return (
    <>
      {
        pictures.map((item, index) => {
          return (
            <div
              className={style.elem}
              key={`${item} + ${index}`}>
              <img src={item} alt="" />
            </div>
          )
        })
      }
    </>
  )
}