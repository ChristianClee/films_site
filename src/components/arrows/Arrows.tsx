import React from 'react';
import style from './Arrows.module.css'
import { ReactComponent as Arrow } from '#assets/img/svg/arrow-simple.svg'
import type { StateDispatchT, RefHtmlT } from "../scrollLine/types"
import { scrollPluss, scrollMinues } from './utilits'

type ArrowsT = {
  setCurrentScr: StateDispatchT,
  currentScr: number,
  lineRef: RefHtmlT
}

const Arrows: React.FC<ArrowsT> = ({ setCurrentScr, currentScr, lineRef }) => {

  let fullScrollLeft: number = 2

  if (lineRef.current) {
    const scrollWidth = lineRef.current.scrollWidth
    const clientWidth = lineRef.current.clientWidth
    fullScrollLeft = scrollWidth - clientWidth
  }


  return (
    <div className={style.arrowsContainer}>
      <div className={style.arrows}>
        {
          currentScr > 0 ?
            <div
              className={style.arrowContainer}
              onClick={() => {
                scrollMinues(lineRef, currentScr, setCurrentScr)
              }}
            >
              <Arrow className={[style.arrow, style.arrowLeft].join(" ")}></Arrow>
            </div>
            :
            null
        }
        {
          fullScrollLeft > currentScr ?
            <div className={style.arrowContainer}
              onClick={() => {
                scrollPluss(lineRef, currentScr, setCurrentScr)
              }}
            >
              <Arrow className={[style.arrow, style.arrowRight].join(" ")}></Arrow>
            </div>
            :
            null
        }
      </div>
    </div>
  );
}
export default Arrows;