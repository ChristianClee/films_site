import React from 'react';
import style from './Search.module.css'
import { ReactComponent as MagnySvg } from '../../../assets/img/svg/magnifying-glass.svg'

const Search:React.FC = () => {
  return (
    <div className={style.wrapper}>
      <input type="text" className={style.searchInput} />
      <button className={style.searchButton}>
        <MagnySvg className={style.svgImg} />
      </button>
    </div>
          
  );
}
export default Search;