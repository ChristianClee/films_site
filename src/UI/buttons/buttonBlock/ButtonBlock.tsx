import React from 'react';
import style from './ButtonBlock.module.css'
import { ReactComponent as Play } from '#assets/img/svg/play.svg'
import { ReactComponent as Heart } from '#assets/img/svg/heart2.svg'
import { ReactComponent as HeartRed } from '#assets/img/svg/heardRed.svg'
import { useActions } from '#hooks/redux';
import { useSelector } from 'react-redux';
import { selectFilm } from '#redux/selectors/filmSelector';
import type { PicturesId } from "../../../components/types"


const ButtonsBlock: React.FC<{ title: string, dispatch: () => void, idFilm: PicturesId }> = ({ title, dispatch, idFilm }) => {
  const { addRemainLikedId } = useActions()
  const { likedMovie } = useSelector(selectFilm)


  return (
    <div className={style.wrapper}>

      <button
        className={style.whatchBtn}
        onClick={() => dispatch()}
      >
        <span>{title}</span>
        <Play className={style.imgSvgPlay} />
      </button>



      {
        idFilm.id &&
        <div className={style.imgConteiner}
          onClick={() => { addRemainLikedId(idFilm) }}
        >
          {
            likedMovie.some(i => i.id === idFilm.id) ?
              <HeartRed className={style.imgSvg} />
              :
              <Heart className={style.imgSvg} />
          }
        </div>
      }


    </div>
  )
}

export default ButtonsBlock;