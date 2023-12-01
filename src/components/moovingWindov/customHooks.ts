import { useLayoutEffect, useEffect, useState} from 'react';
import { getInterval, shiftLine, move } from './utilits'
import { DispatchT, RefDivT } from './types'
import type { ArrPictureT } from '../../constants/datafilms/picturesArr'



export function useFirstMove(lineRef: RefDivT) {
  useLayoutEffect(() => {
    shiftLine(lineRef)
    return () =>shiftLine(lineRef)
  },[])
}

export function useIntervalMove(setCount: DispatchT, count:number, setTime:number) {
  useEffect(() => {
    
    const stop = getInterval(setCount, setTime)
    return () => {
      clearInterval(stop)
    }
  },[count])
}

export function useMove(
  lineRef: RefDivT,
  pictures: ArrPictureT,
  current: number,
  count: number,
  setCurrent: DispatchT
) {
   useEffect(() => {
     const line = lineRef.current
     if (line) {
       move(line, pictures, setCurrent, current, count)
     }   
  }, [count])
  
}
 

