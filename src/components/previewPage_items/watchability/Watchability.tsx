import React from 'react';
import style from './Watchability.module.css'
import type { PicturesId, ItemT } from '../../types'
import { changeItem } from './utilits'

const Watchability: React.FC<{ filmData: PicturesId }> = ({ filmData }) => {

  let items: ItemT[] | null = null
  if (filmData.watchability && filmData.watchability.items && filmData.watchability.items[0]) {
    items = changeItem(filmData.watchability.items, 'НТВ-ПЛЮС Онлайн ТВ', 'НТВ-ПЛЮС')
  }
  
  


  return (
    <div className={style.wrapper}>
      {
        items && items[0] ?
          <h3 className={style.info}>Смотреть на:</h3>
          :
          null
      }

      <div className={style.stars}>
        {
          items && items[0] ?
            items.map((item, index) => {
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