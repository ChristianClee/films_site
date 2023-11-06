import React from 'react';
import style from './BurgerMenuBig.module.css'
import { ReactComponent as BookLittleSvg } from '../../../assets/img/svg/book-little.svg'
import { Link } from "react-router-dom"
import {  } from "../../../rout_path/paths"

const BurgerMenuBig:React.FC = () => {
  return (
    <Link to="./" className={style.wrapper}>
      <BookLittleSvg className={style.svgImgMedium} />
      <span>main</span>
    </Link>
  );
}
export default BurgerMenuBig;