import one from '../assets/img/jpg/art-guba.jpg'
import two from '../assets/img/jpg/bumaga.jpg'
import tree from '../assets/img/jpg/fan.jpg'
import four from '../assets/img/jpg/illustracia.jpg'
import five from '../assets/img/jpg/supergeroj-betmen.jpg'
import fetchDate from './films.json'
import data from './dddd.json'



export type ArrPictureT = string[]

export const arrPicture:ArrPictureT = [one, two, tree, four, five]
export const arrPicture1:ArrPictureT = [one, two, tree, four, five]
export const arrPicture2:ArrPictureT = [one, two, tree, four, five]



export const posters:string[] = []
// console.log(data)

for (let i of fetchDate.docs) {
    posters.push(i.poster.previewUrl)
}


