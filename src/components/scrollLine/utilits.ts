import type { RefHtmlT, RefMutBoolT, RefMutNumT } from './types'

export function calcScroll(
  e: MouseEvent,
  lineRef: RefHtmlT,
  moveMentXRef: RefMutNumT
) {
  // записывается последнее движение e.movementX мыши
    const line = lineRef.current
    if (line ){
      const move = e.movementX
      line.scrollLeft -= move
      moveMentXRef.current = move
    }
}

export function calcRemainScroll(
  flagRef:RefMutBoolT,
  lineRef: RefHtmlT,
  moveMentXRef:RefMutNumT
) {
 
  flagRef.current = false
  if (lineRef.current) {
    // @ts-ignore
    lineRef.current.style = "grab"
    const time = getTime(moveMentXRef, 3.5)
    makeRemainScroll(time, flagRef, lineRef, moveMentXRef, 1.3, 7 )
  }
}

export function mousedown(
  e: React.MouseEvent<HTMLDivElement>,
  flagRef: RefMutBoolT,
  moveMentXRef:RefMutNumT,
) {
  flagRef.current = true
  moveMentXRef.current = 0
  e.currentTarget.style.cursor = "grabbing"
}

function getTime(moveMentXRef:RefMutNumT, time_: number):number {
  let time = (moveMentXRef.current >= 0)
    ?
    moveMentXRef.current
    :
    moveMentXRef.current * -1
  time *= time_
  return time
}

function makeRemainScroll(
  time: number,
  flagRef: RefMutBoolT,
  lineRef: RefHtmlT,
  moveMentXRef: RefMutNumT,
  step: number,
  timeStep: number

): void {
  let count = 0
  const stop = setInterval(() => {
    count++
    if (count >= time || flagRef.current) {
      clearTimeout(stop)
    }
    if (lineRef.current) {
      const move = (moveMentXRef.current / Math.cbrt(count)) / step
      lineRef.current.scrollLeft -= move
    }
  }, timeStep)
}

