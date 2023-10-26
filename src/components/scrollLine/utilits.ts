import type { RefHtmlT, RefMutBoolT, RefMutNumT, StateDispatchT } from './types'

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
  moveMentXRef: RefMutNumT,
  setCurrentScr: StateDispatchT,
) {
 
  flagRef.current = false
  if (lineRef.current) {
    // @ts-ignore
    lineRef.current.style = "grab"
    const time = getTime(moveMentXRef, 3.5)
    makeRemainScroll(time, flagRef, lineRef, moveMentXRef, setCurrentScr, 1.3, 7 )
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
  setScrollLeft: StateDispatchT,
  step: number,
  timeStep: number

): void {
  let count = 0

  const stop = setInterval(() => {
    if (lineRef.current) { 
      count++
      const flag = isStopInterval(count, time, flagRef, lineRef)
      
      if (flag) {
        setScrollLeft(Math.ceil(lineRef.current.scrollLeft))
        clearTimeout(stop)
      }
      const move = remainScroll(moveMentXRef, step, count)
      lineRef.current.scrollLeft -= move
    }
  }, timeStep)
}


function isStopInterval(count: number, time: number, flagRef: RefMutBoolT, lineRef: RefHtmlT): boolean {
  // вычисляет условие для прекращения цикла
  if (lineRef.current) {
    const scrollLeft = lineRef.current.scrollLeft
    const clientWidth = lineRef.current.clientWidth
    const scrollWidth = lineRef.current.scrollWidth

    const isTime = count >= time
    const isFlag = flagRef.current
    const isAdge =
      Math.ceil(scrollLeft + clientWidth) === scrollWidth
      ||
      scrollLeft === 0
      
    return isTime || isFlag || isAdge    

  }
  return true
}

function remainScroll(moveMentXRef: RefMutNumT, step:number, count: number):number {
  // высчитывает оскаток скролла по формуле, Math.cbrt - корень кубический
  return (moveMentXRef.current / Math.cbrt(count)) / step
}
