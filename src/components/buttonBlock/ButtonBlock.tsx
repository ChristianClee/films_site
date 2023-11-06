import React, { useState } from 'react';
import style from './ButtonBlock.module.css'
import { ReactComponent as Play } from '../../assets/img/svg/play.svg'
import { ReactComponent as Heart } from '../../assets/img/svg/heart2.svg'
import { ReactComponent as HeartRed } from '../../assets/img/svg/heardRed.svg'
import { ReactComponent as Info } from '../../assets/img/svg/info.svg'
import { ReactComponent as Bookmark } from '../../assets/img/svg/bookmark.svg'
import type { trallerItemsT } from '../trallerTypes'
import { useActions } from '../../hooks/redux';
import { useSelector } from 'react-redux';
import { selectFilm } from '../../redux/selectors/filmSelector';
import type { PicturesId } from "../types"


const ButtonsBlock: React.FC<{ title: string, dispatch: () => void, idFilm: PicturesId }> = ({ title, dispatch, idFilm }) => {
  const [heard, setHeard] = useState(false)
  const { addRemainLikedId } = useActions()
  const { likedMovie }  = useSelector(selectFilm)
  console.log( likedMovie)

  return (
    <div className={style.wrapper}>

      <button
        className={style.whatchBtn}
        onClick={() => dispatch()}
      >
        <span>{title}</span>
        <Play className={style.imgSvgPlay} />
      </button>

      {/* <button className={style.imgConteiner}>
        <Bookmark className={style.imgSvg} />
      </button> */}

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
      

      {/* <button className={style.imgConteiner}>
        <Info className={style.imgSvg} />
      </button> */}
    </div>
  )
}

export default ButtonsBlock;