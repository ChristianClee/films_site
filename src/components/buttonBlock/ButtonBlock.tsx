import React from 'react';
import style from './ButtonBlock.module.css'
import { ReactComponent as Play } from '../../assets/img/svg/play.svg'
import { ReactComponent as Heart } from '../../assets/img/svg/heart2.svg'
import { ReactComponent as Info } from '../../assets/img/svg/info.svg'
import { ReactComponent as Bookmark } from '../../assets/img/svg/bookmark.svg'
import type { trallerItemsT } from '../trallerTypes'


const ButtonsBlock: React.FC<{ title: string, dispatch: () => void, }> = ({ title, dispatch }) => {

  return (
    <div className={style.wrapper}
      onClick={() =>
        dispatch()
      }
    >
      <button className={style.whatchBtn}>
        <span>{title}</span>
        <Play className={style.imgSvgPlay} />
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
    </div>
  )
}

export default ButtonsBlock;