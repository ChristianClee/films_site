import React, { useRef } from 'react';
import style from './RecomendFilm.module.css'

import Traller from './traller/Traller';
import type { infoFilmT } from "../types"
import Description from './description/Description';


const RecomendFilm: React.FC<infoFilmT> = ({ infoFilm }) => {

  
  return (
    <div className={style.wrapper}>

      <div className={style.row}>

        <div className={style.name}>
          {infoFilm.name}
        </div>
        <div className={style.body}>
          <div className={style.column}>
            <Traller trailer={infoFilm.trailers[0].url} />
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



