import React from 'react';
import style from './PreviewFilmPage.module.css';
import type { PicturesId } from '../../components/types';

import { posters } from '../../constants/datafilms/picturesArr'
import ButtonsBlock from '../../UI/buttons/buttonBlock/ButtonBlock';
import Watchability from '../../UI/watchability/Watchability';
import Actors from '../../modules/actors/Actors';
import MoovingVindov from '../../modules/moovingWindov/MoovingWindov';
import Poster from '../../UI/poster_1/Poster';
import Traller from '../../UI/traller/Traller';
import Description from '../../UI/description/Description';
import Raiting from '../../components/raiting/Raiting';
import Year from '../../UI/year/Year';
import { useActions } from "../../hooks/redux"



const PreviewFilmPage: React.FC<{ filmData: PicturesId }> = ({ filmData }) => {


  const { toggleTrallerState } = useActions()


  return (
    <div className={style.wrapper}>
      <div className={style.body}>
        <div className={style.row}>
          <div className={style.column}>
            <Poster filmData={filmData} />
          </div>

          <div className={style.column}>
            <Traller filmData={filmData} />
            <ButtonsBlock title="трейлер" dispatch={toggleTrallerState} idFilm={filmData} />
            <Watchability filmData={filmData} />
            <Raiting filmData={filmData} sizeSrars='2rem' />
            <Year filmData={filmData} />
            <Description filmData={filmData} />
          </div>

        </div>

        <div className={style.row}>
          <div className={style.actorsContainer}>
            <Actors filmData={filmData} />
          </div>
        </div>

      </div>

      <div className={style.advertisement}>
        <MoovingVindov pictures={posters} setTime={9500} />
        <MoovingVindov pictures={[...posters]} setTime={11000} />
      </div>


    </div>
  );
}


export default PreviewFilmPage;
