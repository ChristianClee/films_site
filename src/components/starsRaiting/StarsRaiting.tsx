import React from 'react';
import style from './StarsRaiting.module.css'
import { ReactComponent as Star } from '../../assets/img/svg/star.svg'


const StarsRaiting: React.FC<{ raiting: number | null }> = ({ raiting }) => {

  const integer: number = raiting ? Math.floor(raiting) : 0
  const float: number =  raiting ? getFloat(raiting) : 0
  const arr = getArray(integer, float)

  // console.log(arr)

  function getFloat(digit: number): number {
    const integer = Math.floor(digit)
    const float = digit - integer
    if (float === 0) return 0
    const answer = Math.round(parseInt(String(float).slice(2, 4)))
    return answer
  }

  function getArray(integer: number, float: number): string[]{
    let flag = true
    const firstArr = Array(10)
      .fill(0)
      .fill(100, integer)
      .map(item => {
        if (item === 100 && flag) {
          flag = false
          return item = 100 - float
        } else return item
      })
      .map(item => String(item))
    return firstArr
  }


  return (
    <div className={style.stars}>
      {
        raiting ? 
          <>
            {
              arr.map((item, index) => {
                return (
                  <StarRaiting
                    width={item}
                    key={index + Math.random() }
                  />
                )
              })
            }
            
          </>
          :
          <p>нет данных</p>
      }
    </div>
  );
}
export default StarsRaiting;



const StarRaiting: React.FC<{ width: string }> = ({ width }) => {

  const styleWidth = { "--starFill": `${width}%` }




  return (
    <div className={style.star}>
      <Star className={style.imgSvg} />
      <span className={style.curtain} style={styleWidth}></span>
      <Star className={style.imgSvg2} />
    </div>
  )
}