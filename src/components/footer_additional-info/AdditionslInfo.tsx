import React from 'react';
import style from './AdditionalInfo.module.css'
import LinkText from '#UI/link_text/LinkText';


const AdditionalInfo:React.FC = () => {
  return (
    <div className={style.basement}>
      <div className={style.years}>2003-2023, кино <span>18+</span></div>
      <ul className={style.ulBasMent}>
        <LinkText text='Афиша'/>
        <LinkText text='Телепрограмма'/>
        <LinkText text='Музыка'/>
        <LinkText text='Букмейт'/>
      </ul>
      <div className={style.progectName}>Проект <span>Mishkov</span> production</div>
    </div>
  );
}
export default AdditionalInfo;