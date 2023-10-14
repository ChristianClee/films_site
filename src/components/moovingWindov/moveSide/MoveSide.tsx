import React from 'react';
import style from './MoveSide.module.css'
import { ReactComponent as ArrowSvg} from '../../../assets/img/svg/arrow-simple.svg'

type MoveProps = {
  lineRef: React.RefObject<HTMLDivElement>
  sign: number
  setCount: (prev:number) => void
}

const MoveSide: React.FC<MoveProps> = ({ lineRef, sign, setCount }) => {
  return (
    <div
      className={(sign > 0) ? style.moveRight : style.moveLeft }
      onClick={(e) => {
        if (lineRef.current) {
        //@ts-ignore
          setCount(prev => prev + (1 * sign))
        }
      }}
    >
      <ArrowSvg className={(sign > 0) ? style.arrowRight : style.arrowLeft  } />
    </div>
  );
}
export default MoveSide;