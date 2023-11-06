import React from 'react';
import style from './LikedPage.module.css'
import { useSelector } from 'react-redux';
import { selectFilm } from '../../redux/selectors/filmSelector';
import ElementFilmPage from '../../components/searchPage_items/elementFilmPage/ElementFilmPage';

const LikedPage: React.FC = () => {
  const { likedMovie } = useSelector(selectFilm)

  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>
        Понравившиеся Фильмы
      </h2>
      <div className={style.gridContainer}>
        {
          likedMovie.length ?

            likedMovie.map(item => {
              return (
                <ElementFilmPage elemFilms={null} elemFilmLiked={item} key={JSON.stringify(item)} />
              )
            })
            :
            null
        }
      </div>

    </div>
  );
}
export default LikedPage;