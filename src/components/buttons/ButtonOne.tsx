import React, { useRef } from 'react';
import style from './ButtonOne.module.css';


const ButtonOne: React.FC<{ text: string }> = ({ text}) => {

  return (
    <button className={style.wrapper}>
      <span className={style.one}></span>
      <span className={style.two}></span>
      <span className={style.three}></span>
      <span className={style.four}></span>
      {text}
    </button>
  );
}
export default ButtonOne;