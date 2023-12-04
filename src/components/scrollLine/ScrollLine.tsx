import React, { useRef, useState } from 'react';
import style from './ScrollLine.module.css'
import { useListenerWindow } from './customHooks'
import { mousedown } from './utilits'
import Arrows from '../arrows/Arrows';
import { PicturesId, TipeT } from '../types'
import Films from '../films/Films';
import Actors from '../actors/Actors';


type ScrollLineT = {
  pictures: PicturesId[] | null,
  actors: TipeT[] | null,
  title: string,
}

const ScrollLine: React.FC<ScrollLineT> = ({ pictures, actors, title }) => {
  
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
        <Elements pictures={pictures} actors={actors} />
      </div>
    </div>
  );
}
export default ScrollLine;




type ElementsT = {
  pictures: PicturesId[] | null,
  actors: TipeT[] | null
}

const Elements: React.FC<ElementsT> = ({ pictures, actors }) => {
  return (
    <>
      {
        pictures ?
          <Films pictures={pictures} />
          :
          actors ?
            <Actors actors={actors} />
            :
            null
      }
    </>
  )
}
