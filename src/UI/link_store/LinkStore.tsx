import React from 'react';
import style from './LinkStore.module.css'

type SvgType = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

const LinkStore:React.FC<{SVG:SvgType, text:string}> = ({SVG, text}) => {
  return (
    <div className={style.app}>
      <SVG className={style.iconLogo} />
      <div className={style.text}>
        <span className={style.subtitle}>загрузка в</span>
        <span className={style.title}>{text}</span>
      </div>
    </div>
  );
}
export default LinkStore;