import React, { useEffect, useRef, useState } from 'react';
import style from './ScrollLine.module.css'
import { useListenerWindow } from './customHooks'
import { mousedown } from './utilits'
import Arrows from './arrows/Arrows';
import { Link } from 'react-router-dom';
import { PicturesId } from '../types'



const ScrollLine: React.FC<{ pictures: PicturesId[], title: string }> = ({ pictures, title}) => {
  const flagRef = useRef(false)
  const moveMentXRef = useRef(0)
  const [scrollLeft, setCurrentScr] = useState<number>(0)
  const lineRef = useRef<HTMLDivElement>(null)


  useListenerWindow(flagRef, lineRef, moveMentXRef, setCurrentScr)
 
  return (
    <div className={style.wrapper}>
      <h3 className={style.title}> {title} </h3>
      <Arrows setCurrentScr={setCurrentScr} currentScr={scrollLeft} lineRef={lineRef} />
      <div
        className={style.line}
        onDragStart={(e) => e.preventDefault()}
        onMouseDown={(e) => mousedown(e, flagRef, moveMentXRef)}
        ref={lineRef}
      >
        <Elements pictures={pictures} />
      </div>
    </div>
    
  );
}
export default ScrollLine;


const Elements: React.FC<{ pictures: PicturesId[] }> = ({ pictures }) => {
  
  
  return (
    <>
      {
        pictures.map((item, index) => {
          if (item?.poster?.previewUrl) {
            return (
              <Link to="./previewFilmPage" state={{ from: `${JSON.stringify(item)}` }} key={`${item} ${index} + ${Math.random()}`}>
                <img
                  className={style.element}
                  src={item.poster.previewUrl} alt="" />
              </Link>
            )
          }
        })
      }
    </>
  )
}