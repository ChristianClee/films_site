import React from 'react';
import style from './MainPage.module.css'
import MoovingVindov from '../../modules/moovingWindov/MoovingWindov';
import ScrollLineRecomend from '../../modules/scrollLineRecomend/ScrollLineRecomend'
import { posters as post } from '../../constants/datafilms/picturesArr'
import RecomendFilm from '../../modules/recomendFilm/RecomendFilm';
import boevick from '../../constants/datafilms/boevickPictures.json'
import comedy from '../../constants/datafilms/comedyPictures.json'
import fantastic from '../../constants/datafilms/fantasticPictures.json'
import mult from '../../constants/datafilms/multPictures.json'



const MainPage: React.FC = (props) => {

  return (
    <div className={style.wrapper}>

      <div className={style.flexContainer}>
        <MoovingVindov pictures={post} setTime={10000} />
        <ScrollLineRecomend title={"Популярные"} pictures={boevick.docs} />
      </div>

      <RecomendFilm infoFilm={comedy.docs[0]} />
      <ScrollLineRecomend title={"Комедии"} pictures={comedy.docs} />
      <ScrollLineRecomend title={"Фантастика"} pictures={fantastic.docs} />
      <ScrollLineRecomend title={"Мультики"} pictures={mult.docs} />

    </div>
  );
}
export default MainPage;