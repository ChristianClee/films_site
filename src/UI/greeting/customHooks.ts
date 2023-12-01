import { useEffect } from "react"
import { removeElem } from "./utilits"

type greetingProp = React.RefObject<HTMLDivElement>

export function useGreeting(
  _greetingRef: greetingProp,
  _titleRef: greetingProp,
  _containerRef: greetingProp) {
  
  useEffect(() => {      
    const greetingProp = _greetingRef.current
    const titleRef = _titleRef.current
    const containerRef = _containerRef.current

    if (greetingProp && titleRef && containerRef) {
      removeElem(greetingProp, titleRef, containerRef)
      // показывает приветственную заставку
    }

  },[])
}

