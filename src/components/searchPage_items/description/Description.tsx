import React from 'react';
import style from './Description.module.css'
import type { FilmItem } from '../../fetchingTypes'
import ButtonTwo from '../../buttons/buttonTwo/ButtonTwo';
import StarsRaiting from '../../starsRaiting/StarsRaiting';

const Description: React.FC<{ elemFilms: FilmItem }> = ({ elemFilms }) => {


  return (
    <div className={style.wrapper}>
      {
        elemFilms.name &&
        <h3>{elemFilms.name}</h3>
      }
      {
        elemFilms.year &&
        <h3>год <span>{elemFilms.year}</span> </h3>

      }
      {
        elemFilms.genres.length > 0 &&
        <h3>
          жанр <span>{elemFilms.genres[0]} {elemFilms.genres[1] && elemFilms.genres[1]}</span>
        </h3>
      }
      

      {/* {
        elemFilms.shortDescription ?
          <button
            className={style.descriptionBtn}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
          >
            описание
          </button>
          :
          null
      } */}


    </div>
  );
}
export default Description;