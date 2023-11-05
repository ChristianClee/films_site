import React from 'react';
import style from './Poster.module.css'
import type { FilmItem } from '../../fetchingTypes'

const Poster: React.FC<{ elemFilms: FilmItem }> = ({ elemFilms }) => {
  return (
    <div className={style.wrapper}>
      {
        elemFilms.poster
        &&
        <img
          className={style.poster}
          src={elemFilms.poster} alt=""
        />
      }
    </div>
  );
}
export default Poster;