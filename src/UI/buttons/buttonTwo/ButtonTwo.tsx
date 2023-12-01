import React from 'react';
import style from './ButtonTwo.module.css'


type ButtonTwoT = {
  func: (arg: number) => void ;
  count: number;
  children: React.ReactNode;
}

const ButtonTwo: React.FC<ButtonTwoT> = ({func, count, children}) => {
  return (
    <button
      className={style.wrapper}
      onClick={() => func(count)}
    >
      {children}
    </button>

  );
}
export default ButtonTwo;