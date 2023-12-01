import React from 'react';
import style from './ItemsElements.module.css'

import { ReactComponent as HeartSvg } from '#assets/img/svg/heart.svg'
import { ReactComponent as HeartRedSvg } from '#assets/img/svg/heardRed.svg'
import { ReactComponent as EyeSvg } from '#assets/img/svg/eye.svg'
import { ReactComponent as CartSvg } from '#assets/img/svg/cart.svg'
import { ReactComponent as RubleSvg } from '#assets/img/svg/ruble-2.svg'
import { LIKEDPAGE } from '../../constants/paths'
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectFilm } from '../../redux/selectors/filmSelector';



const ItemsElements: React.FC = () => {
  const { likedMovie } = useSelector(selectFilm)


  return (
    <div className={style.wrapper}>
      <Link to={LIKEDPAGE} className={style.itemContainer}>
        {
          likedMovie.length ?
            <HeartRedSvg className={style.svgImgMedium} />
            :
            <HeartSvg className={style.svgImgMedium} />
        }
        <span className={style.count}>{likedMovie.length}</span>
        {/* <span className={style.itemInscript}>liked</span> */}
      </Link>

      {/* <div className={style.itemContainer}>
        <EyeSvg className={style.svgImgMedium} />
        <span className={style.count}>0</span>
        <span className={style.itemInscript}>watched</span>
      </div> */}
      {/* <div className={style.itemContainer}>
        <CartSvg className={style.svgImgMedium} />
        <span className={style.count}>0</span>
        <span className={style.itemInscript}>purchase</span>
      </div> */}
      {/* <div className={style.itemContainer}>
        <RubleSvg className={style.svgImgMedium} />
        <span className={style.count}>0</span>
        <span className={style.itemInscript}>donate</span>
      </div> */}
    </div>
  );
}
export default ItemsElements;