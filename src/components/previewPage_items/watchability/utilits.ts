import type{ ItemT, PicturesId } from '../../types'


export function  changeItem( lists:ItemT[], oldString: string, newString:string ):ItemT[] {
  return lists.map(item => {
    if (item.name === oldString){
      item.name = newString
      return item
    } else {
      return item
    }
  }
  )
  return lists
}

