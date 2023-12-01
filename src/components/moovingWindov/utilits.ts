import type { DispatchT, RefDivT } from "./types"
import type {ArrPictureT } from "../../constants/datafilms/picturesArr"

export function shiftLine(lineRef: RefDivT) {
  if (lineRef.current) {
    const line = lineRef.current
    const width = line.children[0].getBoundingClientRect().width
    const count = line.children.length
    const centerElem = Math.floor(count / 2)

    line.style.transform = `translateX(-${width * centerElem}px)`
  }
}


export function getInterval(setCount: DispatchT, setTime:number): NodeJS.Timer {
  const stop: NodeJS.Timer = setTimeout(
    () => {
      setCount( prev => prev + 1 )
    }, setTime)
  return stop
}

export function move(
  line: HTMLDivElement,
  pictures: ArrPictureT,
  setCurrent:DispatchT,
  current: number,
  count: number,

) {

    const width = line.children[0].getBoundingClientRect().width
    
  if (current < count) {
    moveRight(line,width, pictures,setCurrent, count)
  } else if (current > count) {
    moveLeft(line,width, pictures,setCurrent, count)
  }

} 

export function moveRight(
  line: HTMLDivElement,
  width: number,
  pictures: ArrPictureT,
  setCurrent:DispatchT,
  count: number
) {
  
  line.style.transition = "0.6s"
  line.style.transform += `translateX(-${width}px)`

  setTimeout(() => {
     line.style.transition = ".0s"
    setTimeout(() => {
      line.style.transform += `translateX(${width}px)`
      pictures.push(pictures[0])
      pictures.shift()
      setCurrent(count)
    },25)
  }, 610)
}

export function moveLeft(
  line: HTMLDivElement,
  width: number,
  pictures: ArrPictureT,
  setCurrent:DispatchT,
  count: number
) {
  line.style.transition = "0.6s"
  line.style.transform += `translateX(${width}px)`

  setTimeout(() => {
    line.style.transition = "0s"
    setTimeout(() => { 
      line.style.transform += `translateX(-${width}px)`
      pictures.unshift(pictures[pictures.length-1])
      pictures.pop()
      setCurrent(count)
    },25)
  }, 610)
}