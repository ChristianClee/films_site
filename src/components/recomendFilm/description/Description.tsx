import React from 'react';
import style from './Description.module.css'
import StarsRaiting from '../../starsRaiting/StarsRaiting';
import type { infoFilmT } from "../../types"
import ButtonsBlock from '../../buttonBlock/ButtonBlock';
import { useActions } from '../../../hooks/redux'; 


const Description: React.FC<infoFilmT> = ({ infoFilm }) => {
  const {toggleRecomendFilmMoveState } = useActions()


  return (
    <>
      <div className={style.shortDescription}>
        {infoFilm.shortDescription}
        <span>{infoFilm.genres[0].name}</span>
        <span>{infoFilm.genres[1].name}</span>
      </div>

      <div className={style.infoContainer}>
        <ShortInfo infoFilm={infoFilm} />
      </div>

      <div className={style.btnsContainer}>
        <ButtonsBlock title="смотреть" dispatch={toggleRecomendFilmMoveState}/>
      </div>
    </>
  );
}
export default Description;





const ShortInfo: React.FC<infoFilmT> = ({ infoFilm }) => {
  return (
    <>
      <div className={style.starsContainer}>
        <div className={style.starContainer}>
          <p>Критити</p>
          <StarsRaiting raiting={infoFilm.rating.filmCritics} sizeSrars='1rem'/>
        </div>
        <div className={style.starContainer}>
          <p>Зрители</p>
          <StarsRaiting raiting={infoFilm.rating.kp} sizeSrars='1rem' />
        </div>
      </div>

      <div className={style.actorsContainer}>
        <div className={style.actorsTitle}>
          Актеры
        </div>
        <p>Жан Рено</p>
        <p>Анделло де Л'Aкрузо Д'этруA</p>
        <p>Софи Лоран</p>
      </div>
    </>
  )
}