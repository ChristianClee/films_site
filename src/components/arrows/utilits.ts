import type { StateDispatchT, RefHtmlT } from '../scrollLine/types'

export function scrollPluss(lineRef: RefHtmlT, currentScr: number, setCurrentScr: StateDispatchT) {
  if (lineRef.current) {
    const scrollWidth = lineRef.current.scrollWidth

    const clientWidth = lineRef.current.clientWidth
    const fullScroll = scrollWidth - clientWidth

    const scrollLeft_ = currentScr
    let scroll = clientWidth + scrollLeft_

    
    if (fullScroll < scroll) {
      scroll = fullScroll
      setCurrentScr(scroll)
    } else {
      
      setCurrentScr(currentScr + clientWidth)
    }

    

    lineRef.current.scrollTo({ top: 0, left: scroll, behavior: 'smooth' })
  }
}

export function scrollMinues(lineRef: RefHtmlT, currentScr: number, setCurrentScr: StateDispatchT) {
  if (lineRef.current) {
    const clientWidth = lineRef.current.clientWidth

    const scrollLeft_ = currentScr
    let scroll = scrollLeft_ - clientWidth  
    
    if (0 >= scroll) {
      scroll = 0
      setCurrentScr(0)
    } else {
      setCurrentScr(currentScr - clientWidth)
    }
    console.log(currentScr)
    lineRef.current.scrollTo({ top: 0, left: scroll, behavior: 'smooth' })
  }
}

function scrollto(scroll: number, lineRef: RefHtmlT) {
  if (lineRef.current) {
    lineRef.current.scrollTo({ top: 0, left: scroll, behavior: 'smooth' })
  }
  
}