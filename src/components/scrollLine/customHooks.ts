import { useEffect } from 'react'
import { calcRemainScroll, calcScroll } from './utilits'
import { RefHtmlT, RefMutBoolT, RefMutNumT } from  './types'

export function useListenerWindow(
  flagRef: RefMutBoolT,
  lineRef: RefHtmlT,
  moveMentXRef: RefMutNumT,

) {
  function eventMouseup() {
    if (flagRef.current) {
      calcRemainScroll(flagRef, lineRef, moveMentXRef)
    }
  }
    function eventMouseMove(e: MouseEvent) {
      if (flagRef.current) {
        calcScroll(e, lineRef, moveMentXRef)
      }
  }
  
  useEffect(() => {
      
    window.addEventListener('mousemove', eventMouseMove)
    window.addEventListener('mouseup', eventMouseup)

    return () => {
      window.removeEventListener('mousemove', eventMouseMove)
      window.removeEventListener('mouseup', eventMouseup)
    }
  },[])
}