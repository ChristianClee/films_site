import React from 'react';
import style from './BurgerMenuLittle.module.css'
import { ReactComponent as MenuSvg } from '../../../assets/img/svg/menu2.svg'

const BurgerMenuLittle:React.FC = () => {
  return (
    <div className={style.wrapper}>
      <MenuSvg className={style.svgImgMedium} />
    </div>
  );
}
export default BurgerMenuLittle;