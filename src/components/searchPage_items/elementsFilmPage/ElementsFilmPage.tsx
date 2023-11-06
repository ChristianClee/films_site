import React from 'react';
import style from './ElementsFilmPage.module.css'
import ElementFilmPage from '../elementFilmPage/ElementFilmPage';
import { useSelector } from 'react-redux';
import { selectFetching } from '../../../redux/selectors/fetchingSelector';
import type { FilmItem } from '../../../components/fetchingTypes'

const ElementsFilmPage: React.FC<{ queryFilms: FilmItem[] }> = ({ queryFilms }) => {
  const { limitView } = useSelector(selectFetching)
  return (
    <div className={style.wrapper}>
      {
        queryFilms.map((item, index) => {
          if (index < limitView) {
            return <ElementFilmPage elemFilms={item} elemFilmLiked={null} key={index} />
          }
        }
        )
      }
    </div>
  )
}
export default ElementsFilmPage;