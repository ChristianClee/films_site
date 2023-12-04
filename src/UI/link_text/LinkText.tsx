import React from 'react';
import style from './LinkText.module.css'


const LinkText:React.FC<{text:string}> = ({text}) => {
  return (
    <li>
      <button className={style.item}>
        <p>{text}</p>
      </button>
    </li>
  );
}
export default LinkText;