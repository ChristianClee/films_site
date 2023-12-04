import React, { useState } from 'react';
import style from './SearchFilmPage.module.css'
import ButtonTwo from '#UI/buttons/buttonTwo/ButtonTwo';
import { useSelector } from 'react-redux';
import { selectFetching } from '../../redux/selectors/fetchingSelector';
import { useActions } from '../../hooks/redux';
import ElementsFilmPage from '#modules/elementsFilmPage/ElementsFilmPage';
import MoovingVindov from '../../modules/moovingWindov/MoovingWindov';
import { posters } from '../../constants/datafilms/picturesArr'

const SearchFilmPage: React.FC = () => {
  const { queryFilms, limitView, pages } = useSelector(selectFetching)
  const { increaseLimitView } = useActions()
  const queryFilmsLength = queryFilms.length


  return (
    <div className={style.wrapper}>
      <div className={style.body}>

        <div>
          <ElementsFilmPage queryFilms={queryFilms} />
        </div>

        <div className={style.buttonPosition}>
          <ButtonTwo func={increaseLimitView} count={queryFilmsLength}>
            <p>show more</p>
          </ButtonTwo>
        </div>

      </div>

      <div className={style.advertisment}>
        <MoovingVindov setTime={9000} pictures={posters} />
        <MoovingVindov setTime={3000} pictures={[...posters]} />
      </div>
    </div>
  );
}
export default SearchFilmPage;


