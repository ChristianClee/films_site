import React from 'react';
import style from './MainPage.module.css'
import { arrPicture } from '../../constants/picturesArr'
import MoovingVindov from '../../components/moovingWindov/MoovingWindov';
import ScrollLineRecomend from '../../components/scrollLineRecomend/ScrollLineRecomend'

import ScrollLine from '../../components/scrollLine/ScrollLine';

const MainPage: React.FC = () => {
  return (
    <div className={style.wrapper}>

      <div className={style.flexContainer}>
        <MoovingVindov pictures={arrPicture} setTime={10000} />
        {/* <ScrollLine pictures={arrPicture} /> */}
        <ScrollLineRecomend/>
      </div>
      {/* <ScrollLine pictures={arrPicture}/> */}
      
      
      
     
    </div>
  );
}
export default MainPage;