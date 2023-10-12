import React from 'react';
import style from './LogoElement.module.css'
import { ReactComponent as LogoSvg } from '../../../assets/img/svg/book2.svg'

const LogoElement:React.FC = () => {
  return (
    <div className={style.container}>
      <LogoSvg className={style.svgImg} />
      <span>book app</span>
    </div>
  );
}
export default LogoElement;