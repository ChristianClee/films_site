import React from 'react';
import style from './Actors.module.css'
import { TipeT } from '../types'

// @ts-ignore
const Actors: React.FC<{ actors: TipeT[] }> = ({ actors }) => {

  return (
    actors.map((item) => {

      return (
        <div className={style.element2}
          key={`${item.photo} ${Math.random()}`}
        >
          <p className={style.element2Name}>{item.name}</p>
          <>
            {
              item.photo ?
                <img
                  className={style.element2Picture}
                  src={item.photo} alt="" />
                : null
            }
          </>
        </div>
      )
    })
  )
}
export default Actors;