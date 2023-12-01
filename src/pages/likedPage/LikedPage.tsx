import React from 'react';
import style from './LikedPage.module.css'
import { useSelector } from 'react-redux';
import { selectFilm } from '../../redux/selectors/filmSelector';
import ElementFilmPage from '../../components/elementFilmPage/ElementFilmPage';

const LikedPage: React.FC = () => {
  const { likedMovie } = useSelector(selectFilm)
  const wrapper = likedMovie.length ? style.wrapper : style.wrapperActive
  return (
    <div className={wrapper}>
      {
        likedMovie.length ?
          <h2 className={style.title}>
            Понравившиеся Фильмы
          </h2>
          :
          <h2 className={style.title}>
            Пусто
          </h2>
      }


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