import React, { useRef } from 'react';
import style from './RecomendFilm.module.css'

import Traller from './traller/Traller';
import type { PicturesId } from "../types"
import Description from './description/Description';


const RecomendFilm: React.FC<{infoFilm: PicturesId}> = ({ infoFilm }) => {
  
  return (
    <div className={style.wrapper}>

      <div className={style.row}>

        <div className={style.name}>
          {infoFilm.name}
        </div>

        <div className={style.body}>
          <div className={style.column}>
            <Traller infoFilm={infoFilm} />
          </div>

          <div className={[style.column, style.column2].join(" ")}>
            <Description infoFilm={infoFilm} />
          </div>
        </div>

      </div>
    </div>
  );
}
export default RecomendFilm;



