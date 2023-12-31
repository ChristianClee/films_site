import React, { useState } from 'react';
import style from './SearchFilmPage.module.css'
import ButtonTwo from '../../components/buttons/buttonTwo/ButtonTwo';
import { useSelector } from 'react-redux';
import { selectFetching } from '../../redux/selectors/fetchingSelector';
import { useActions } from '../../hooks/redux';
import ElementFilmPage from '../../components/searchPage_items/elementFilmPage/ElementFilmPage';
import type { FilmItem } from '../../components/fetchingTypes'
import ElementsFilmPage from '../../components/searchPage_items/elementsFilmPage/ElementsFilmPage';
import items from '../../constants/searchItem.json'
import MoovingVindov from '../../components/moovingWindov/MoovingWindov';
import { posters } from '../../constants/picturesArr'

const SearchFilmPage: React.FC = () => {
  const { queryFilms, limitView, pages } = useSelector(selectFetching)
  const { increaseLimitView } = useActions()
  const queryFilmsLength = queryFilms.length


  return (
    <div className={style.wrapper}>
      <div className={style.body}>

        <div>
          {/* <ElementsFilmPage queryFilms={queryFilms} /> */}
          <ElementsFilmPage queryFilms={items} />
        </div>

        <div className={style.buttonPosition}>
          <ButtonTwo func={increaseLimitView} count={queryFilmsLength}>
            <p>show more</p>
          </ButtonTwo>
        </div>

      </div>

      <div className={style.advertisment}>
        {/* <div className={style.containerWindow}> */}
          <MoovingVindov setTime={9000} pictures={posters} />
          <MoovingVindov setTime={3000} pictures={[...posters]} />
        {/* </div> */}
      </div>
    </div>
  );
}
export default SearchFilmPage;


