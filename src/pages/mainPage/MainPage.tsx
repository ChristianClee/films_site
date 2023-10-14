import React from 'react';
import style from './MainPage.module.css'
import { arrPicture } from '../../constants/picturesArr'
// import ell from '../../assets/img/jpg/art-guba.jpg'

import MoovingVindov from '../../components/moovingWindov/MoovingWindov';

const MainPage: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <MoovingVindov pictures={arrPicture} />

    </div>
  );
}
export default MainPage;