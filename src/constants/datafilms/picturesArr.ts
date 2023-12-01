import fetchDate from './films.json'


export type ArrPictureT = string[]
export const posters:string[] = []


for (let i of fetchDate.docs) {
    posters.push(i.poster.previewUrl)
}


