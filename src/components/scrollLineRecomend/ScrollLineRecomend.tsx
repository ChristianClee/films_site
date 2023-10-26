import React from 'react';
import style from './ScrollLineRecomend.module.css'
import ScrollLine from '../scrollLine/ScrollLine';
import { arrPicture2} from '../../constants/picturesArr'
import { PicturesId } from '../types'




  
  
const ScrollLineRecomend: React.FC<{ pictures: PicturesId[], title: string }> = ({ pictures, title }) => {

  return (
    <div className={style.wrapper}>
      <ScrollLine pictures={pictures} title={title} />
      <button className={style.btn}>
        больше фильмов
      </button>
    </div>
  );
}
export default ScrollLineRecomend
;