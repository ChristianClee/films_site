import React from 'react';
import style from './ScrollLineRecomend.module.css'
import ScrollLine from '../scrollLine/ScrollLine';
import { arrPicture2} from '../../constants/picturesArr'



const ScrollLineRecomend:React.FC = () => {
  return (
    <div className={style.wrapper}>
      <h3 className={style.title}> рекомендованные книги</h3>

  
      <ScrollLine pictures={arrPicture2} />
      <button className={style.btn}>
        больше рекомендованных книг
      </button>
      {/* <ButtonOne text={'показать больше'} /> */}

    </div>
  );
}
export default ScrollLineRecomend
;