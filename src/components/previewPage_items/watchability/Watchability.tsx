import React from 'react';
import style from './Watchability.module.css'
import type { PicturesId, ItemT } from '../../types'


const Watchability: React.FC<{ filmData: PicturesId }> = ({ filmData }) => {
  // console.log(filmData)
  filmData.watchability.items = filmData.watchability.items.map(item => {
    if (item.name === 'НТВ-ПЛЮС Онлайн ТВ') item.name = 'НТВ-ПЛЮС'
    return item
  })


  return (
    <div className={style.wrapper}>
      {
        filmData.watchability.items[0] && filmData.watchability.items && filmData.watchability ?
          <h3 className={style.info}>Смотреть на:</h3>
          :
          null
      }

      <div className={style.stars}>
        {
          filmData.watchability.items[0] && filmData.watchability.items && filmData.watchability ?
            filmData.watchability.items.map((item, index) => {
              if (item.url && item.name) return (

                <a href={item.url} className={style.containerLink} key={`${item}${index}`}>
                  <p>{item.name} </p>
                  <span></span>
                  <Logo item={item} />
                </a>
              )
            }
            )
            :
            null
        }
      </div>
    </div>

  )
}
export default Watchability;



const Logo: React.FC<{ item: ItemT }> = ({ item }) => {
  return (
    <>
      {
        item.logo.url ?
          <img className={style.logo} src={item.logo.url} alt="" />
          :
          null
      }
    </>

  )
}