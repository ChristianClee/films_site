import React from 'react';
import style from './SearchFilmPage.module.css'
import mult from '../../constants/multPictures.json'
import type { PicturesId } from '../../components/types'
import StarsRaiting from '../../components/starsRaiting/StarsRaiting';
import Raiting from '../../components/previewPage_items/raiting/Raiting';


const SearchFilmPage: React.FC = () => {
  const arrFilms = mult.docs
  return (
    <div className={style.wrapper}>
      <div className={style.body}>
        {
          arrFilms.map((item, index) => <ElemFilmPage elemFilms={item} key={index}/>)
        }
      </div>
      <div className={style.advertisment}></div>
    </div>
  );
}
export default SearchFilmPage;


const ElemFilmPage: React.FC<{ elemFilms: PicturesId }> = ({ elemFilms }) => { 
  return (
    <div className={style.itemFilm}>
      {
        elemFilms.poster
        && elemFilms.poster.previewUrl
        &&
        <img
          className={style.poster}
          src={elemFilms.poster.previewUrl} alt=""
        />
      }
      <div className={style.description}>
        <h3>{elemFilms.name}</h3>
        <h3>{elemFilms.year}
          
  
        </h3>
        <h3>жанр</h3>
        <p>
          {
            elemFilms.genres
            && elemFilms.genres[0]
            && elemFilms.genres[0].name
            &&
            <span>{" " + elemFilms.genres[0].name}</span>
          }
          {
            elemFilms.genres
            && elemFilms.genres[1]
            && elemFilms.genres[1].name
            &&
            <span>{" " + elemFilms.genres[1].name}</span>
          }
        </p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorem architecto ea maxime quidem laborum saepe quaerat ratione mollitia consequatur?</p>
        
      </div>

      <div className={style.raiting}>
        <Raiting filmData={elemFilms} sizeSrars='1.2rem'/>
      </div>

      <div className={style.actors}>
        <h3>Aктёры</h3>
        {elemFilms.persons.map((item, index) => {
          if (index < 4) {
            return <p key={`${item.id} index`}>{item.name}</p>
          }
        })}
        <p>...</p>
      </div>


      
    </div>
  )
}