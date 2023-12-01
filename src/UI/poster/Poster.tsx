import React from 'react';
import style from './Poster.module.css'
import type { FilmItem } from '../../components/fetchingTypes'

const Poster: React.FC<{ poster: string | null | undefined }> = ({ poster }) => {
  return (
    <div className={style.wrapper}>
      {
        poster
        &&
        <img
          className={style.poster}
          src={poster} alt=""
        />
      }
    </div>
  );
}
export default Poster;