import React from 'react';
import style from './FilterElement.module.css'
import {ReactComponent as Arrow} from '../../../assets/img/svg/arrow-2.svg'


const FilterElement:React.FC = () => {
  return (
    <div className={style.wrapper}>
      <span className={style.wrapper}>filter</span>
      <Arrow className={style.imgSvg}/>
    </div>
  );
}
export default FilterElement;