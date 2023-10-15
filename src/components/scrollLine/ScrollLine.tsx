import React, { useRef } from 'react';
import style from './ScrollLine.module.css'

import { useListenerWindow } from './customHooks'
import { mousedown } from './utilits'
import  './types'


const ScrollLine: React.FC<{pictures:string[]}> = ({pictures}) => {
  const flagRef = useRef(false)
  const moveMentXRef = useRef(0)
  const lineRef = useRef<HTMLDivElement>(null)

  useListenerWindow(flagRef,lineRef,moveMentXRef)
 

  return (
    <div className={style.wrapper}>
      <div
        className={style.line}
        onDragStart={(e) => e.preventDefault()}
        onMouseDown={(e) => mousedown(e, flagRef, moveMentXRef)}
        ref={lineRef}
      >
        <Elements elements={pictures} />
      </div>
    </div>
    
  );
}
export default ScrollLine;


const Elements: React.FC<{ elements: string[] }> = ({ elements }) => { 
  return (
    <>
      {
        elements.concat(elements).concat(elements).map((item, index) => {
          return (
            <img
              className={style.element}
              src={item} alt="" key={`${item} ${index}`} />
          )
        })
      }
    </>
  )
}