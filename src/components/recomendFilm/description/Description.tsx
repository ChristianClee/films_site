import React from 'react';
import style from './Description.module.css'
import StarsRaiting from '../../starsRaiting/StarsRaiting';
import type { PicturesId } from "../../types"
import ButtonsBlock from '../../buttonBlock/ButtonBlock';
import { useActions } from '../../../hooks/redux'; 
import { useSelector } from 'react-redux';
import { selectFilm } from "../../../redux/selectors/filmSelector"
import Watchability from '../../previewPage_items/watchability/Watchability';
import Raiting from '../../previewPage_items/raiting/Raiting'
import {ReactComponent as Goback} from '../../../assets/img/svg/go-back.svg'


const Description: React.FC<{ infoFilm: PicturesId }> = ({ infoFilm }) => {
  const {toggleRecomendFilmMoveState } = useActions()
  const { recomendFilmMoveState } = useSelector(selectFilm)
  const whatchState = recomendFilmMoveState ? [style.whatchBtn, style.whatchBtnActive].join(" "): style.whatchBtn
  const whatchButtonBack = recomendFilmMoveState ? [style.btnState, style.btnStateActive].join(" ") : style.btnState

  return (
    <div className={style.wrapper}>
      <div className={style.shortDescription}>
        {infoFilm.shortDescription}
        
        {/* Здесь должно быть короткое описание!!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatibus eligendi, aliquid nostrum nihil quo! */}
      </div>

      <div className={style.infoContainer}>
        <ShortInfo infoFilm={infoFilm} />
      </div>

      <div className={style.btnsContainer}>
        <ButtonsBlock title="смотреть" dispatch={toggleRecomendFilmMoveState} idFilm={infoFilm} />
      </div>

      <div className={whatchState}>
        <Watchability filmData={infoFilm} />
      </div>
      <div className={whatchButtonBack}>
        <Goback
          className={style.goback}
          onClick={() => toggleRecomendFilmMoveState()}
        />
      </div>
      
    </div>
  );
}
export default Description;





const ShortInfo: React.FC<{ infoFilm: PicturesId }> = ({ infoFilm }) => {
  return (
    <>
      <div className={style.starsContainer}>
        <div className={style.starContainer}>
          <Raiting filmData={infoFilm} sizeSrars='1rem'/>
        </div>
      </div>

      <div className={style.actorsContainer}>
        <div className={style.actorsTitle}>
          Актеры
        </div>
        {
          infoFilm.persons.map((item, index) => {
            if (index < 4) {
              return (
                <p key={item.name}>{item.name }</p>
              )
            }
          })
        }
      </div>
    </>
  )
}