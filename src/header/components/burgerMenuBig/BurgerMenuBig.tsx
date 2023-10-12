import React from 'react';
import style from './BurgerMenuBig.module.css'
import { ReactComponent as BookLittleSvg } from '../../../assets/img/svg/book-little.svg'

const BurgerMenuBig:React.FC = () => {
  return (
    <div className={style.wrapper}>
      <BookLittleSvg className={style.svgImgMedium} />
      <span>каталог</span>
    </div>
  );
}
export default BurgerMenuBig;