import React from 'react';
import style from './Raiting.module.css'
import type { PicturesId } from '../../types'
import StarsRaiting from '../../starsRaiting/StarsRaiting';

const Raiting: React.FC<{ filmData: PicturesId }> = ({ filmData }) => {
  return (
    <div className={style.wrapper}>
      <h3>Оценки:</h3>
      <div className={style.raiting}>
        {
          filmData.rating?.kp ?
            <div className={style.raitingRow}>
              <p>Зрителей</p>
              <StarsRaiting raiting={filmData.rating?.kp} sizeSrars='2rem' />
            </div>
            :
            null
        }
        {
          filmData.rating?.filmCritics ?
            <div className={style.raitingRow}>
              <p>Критиков</p>
              <StarsRaiting raiting={filmData.rating?.filmCritics} sizeSrars='2rem' />
            </div>
            :
            null
        }
      </div>
    </div>

  )
}
export default Raiting;