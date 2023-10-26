import React from 'react';
import style from './Description.module.css'
import { ReactComponent as Bookmark } from '../../../assets/img/svg/bookmark.svg'
import { ReactComponent as Play } from '../../../assets/img/svg/play.svg'
import { ReactComponent as Heart } from '../../../assets/img/svg/heart2.svg'
import { ReactComponent as Info } from '../../../assets/img/svg/info.svg'
import StarsRaiting from '../../starsRaiting/StarsRaiting';
import type { infoFilmT } from "../../types"


const Description: React.FC<infoFilmT> = ({ infoFilm }) => {
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
        <ButtonsBlock />
      </div>
    </>
  );
}
export default Description;



const ButtonsBlock: React.FC = () => {
  return (
    <>
      <button className={style.whatchBtn}>
        <span>смотреть</span>
        <div className={style.imgConteiner1}>
          <Play className={style.imgSvg} />
        </div>
      </button>

      <button className={style.imgConteiner}>
        <Bookmark className={style.imgSvg} />
      </button>

      <div className={style.imgConteiner}>
        <Heart className={style.imgSvg} />
      </div>

      <button className={style.imgConteiner}>
        <Info className={style.imgSvg} />
      </button>
    </>
  )
}

const ShortInfo: React.FC<infoFilmT> = ({ infoFilm }) => {
  return (
    <>
      <div className={style.starsContainer}>
        <div className={style.starContainer}>
          <p>Критити</p>
          <StarsRaiting raiting={infoFilm.rating.filmCritics} />
        </div>
        <div className={style.starContainer}>
          <p>Зрители</p>
          <StarsRaiting raiting={infoFilm.rating.kp} />
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