import type{ ItemT, PicturesId } from '../../types'


export function  changeItem( lists:ItemT[], oldString: string, newString:string ):ItemT[] {
  return lists.map(item => {
    let elem = {...item}
    if (elem.name === oldString){
      elem.name = newString
      return elem
    } else {
      return elem
    }
  }
  )
}

