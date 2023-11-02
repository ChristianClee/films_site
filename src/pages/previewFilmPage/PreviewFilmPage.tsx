import React from 'react';
import style from './PreviewFilmPage.module.css';
import { useLocation } from 'react-router-dom';
import type { PicturesId } from '../../components/types';
import { posters } from '../../constants/picturesArr'
import ButtonsBlock from '../../components/buttonBlock/ButtonBlock';
import Watchability from '../../components/previewPage_items/watchability/Watchability';
import Actors from '../../components/actors/Actors';
import MoovingVindov from '../../components/moovingWindov/MoovingWindov';
import Poster from '../../components/previewPage_items/poster/Poster';
import Traller from '../../components/previewPage_items/traller/Traller';
import Description from '../../components/previewPage_items/description/Description';
import Raiting from '../../components/previewPage_items/raiting/Raiting';
import Year from '../../components/previewPage_items/year/Year';
import { useActions } from "../../hooks/redux"
import type { trallerItemsT } from '../../components/trallerTypes' 
import { useSelector } from 'react-redux';
import { selectFetching } from '../../redux/selectors/fetchingSelector';


const PreviewFilmPage: React.FC = () => {
  const { filmId }  = useSelector(selectFetching)
  const location = useLocation()

  let filmData: PicturesId | null = null
  if (location?.state?.from) {
    filmData = JSON.parse(location.state.from)
  }

  const { toggleTrallerState } = useActions()




  if (!filmData) {
    return (
      <>
        {
          filmId ?
            <div className={style.wrapper}>
              <div className={style.body}>
                <div className={style.row}>
                  <div className={style.column}>
                    <Poster filmData={filmId} />
                  </div>

                  <div className={style.column}>
                    <Traller filmData={filmId} />
                    <ButtonsBlock title="треллер" dispatch={toggleTrallerState} />
                    {/* <Watchability filmData={filmId} /> */}
                    <Raiting filmData={filmId} sizeSrars='2rem' />
                    <Year filmData={filmId} />
                    <Description filmData={filmId} />
                  </div>

                </div>

                <div className={style.row}>
                  <div className={style.actorsContainer}>
                    <Actors filmData={filmId} />
                  </div>
                </div>

              </div>

              <div className={style.advertisement}>
                <MoovingVindov pictures={posters} setTime={9500} />
                <MoovingVindov pictures={[...posters]} setTime={11000} />
              </div>


            </div>
            :
            <div>hello</div>
        }
      </>
     
      
      
    )
  } else {
    return (
      <div className={style.wrapper}>
        <div className={style.body}>
          <div className={style.row}>
            <div className={style.column}>
              <Poster filmData={filmData} />
            </div>

            <div className={style.column}>
              <Traller filmData={filmData} />
              <ButtonsBlock title="треллер" dispatch={toggleTrallerState} />
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

}
export default PreviewFilmPage;
