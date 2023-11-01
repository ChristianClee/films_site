import React from 'react';
import style from './SearchFilmPage.module.css'

import type { FilmItem, FetchT } from '../../components/fetchingTypes'
import StarsRaiting from '../../components/starsRaiting/StarsRaiting';
import Raiting from '../../components/previewPage_items/raiting/Raiting';
import { useSelector } from 'react-redux';
import { selectFetching } from '../../redux/selectors/fetchingSelector';


const SearchFilmPage: React.FC = () => {
  const { fetchFilms } = useSelector(selectFetching)
  console.log(fetchFilms)


  return (
    <div className={style.wrapper}>
      <div className={style.body}>
        {
          fetchFilms.map((item, index) => <ElemFilmPage elemFilms={item} key={index}/>)
        }
      </div>
      <div className={style.advertisment}></div>
    </div>
  );
}
export default SearchFilmPage;


const ElemFilmPage: React.FC<{ elemFilms: FilmItem }> = ({ elemFilms }) => { 
  return (
    <div className={style.itemFilm}
      onClick={() => { console.log(elemFilms.id)}}
    >
      {
        elemFilms.poster
        &&
        <img
          className={style.poster}
          src={elemFilms.poster} alt=""
        />
      }
      <div className={style.description}>
        {
          elemFilms.name &&
          <h3>{elemFilms.name}</h3>
        }
        {
          elemFilms.year && 
          <h3>год {elemFilms.year}</h3>
        }
        {
          elemFilms.genres.length > 0 &&
          <h3>
              жанр <span>{elemFilms.genres[0]} {elemFilms.genres[1] && elemFilms.genres[1]}</span>
          </h3>
        }
        
        <p>{elemFilms.shortDescription}</p>
        
      </div>

      <div className={style.raiting}>
        <StarsRaiting raiting={elemFilms.rating} sizeSrars='1.4rem'/>
      </div>
      

  


      
    </div>
  )
}