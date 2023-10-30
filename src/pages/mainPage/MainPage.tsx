import React from 'react';
import style from './MainPage.module.css'
import MoovingVindov from '../../components/moovingWindov/MoovingWindov';
import ScrollLineRecomend from '../../components/scrollLineRecomend/ScrollLineRecomend'
import {posters as post} from '../../constants/picturesArr'
import RecomendFilm from '../../components/recomendFilm/RecomendFilm';

import boevick from '../../constants/boevickPictures.json'
import comedy from '../../constants/comedyPictures.json'
import fantastic from '../../constants/fantasticPictures.json'
import mult from '../../constants/multPictures.json'
// import type { DataT} from '../../components/types'


const MainPage: React.FC = (props) => {



  return (
    <div className={style.wrapper}>

      <div className={style.flexContainer}>
        <MoovingVindov pictures={post} setTime={10000} />
        <ScrollLineRecomend title={"рекомендованные"} pictures={boevick.docs} />
      </div>
      
      <RecomendFilm infoFilm={comedy.docs[0]} />

      <ScrollLineRecomend title={"комедии"} pictures={comedy.docs} />
      <ScrollLineRecomend title={"фантастика"} pictures={fantastic.docs} />
      <ScrollLineRecomend title={"мультики"} pictures={mult.docs} />

    </div>
  );
}
export default MainPage;