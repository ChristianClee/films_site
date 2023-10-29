import React from 'react';
import style from './Traller.module.css'
import { PicturesId } from '../../types'



const Traller: React.FC<{ infoFilm: PicturesId }> = ({ infoFilm }) => {
  console.log(infoFilm)
  return (
    
    <>
      {
        infoFilm.videos
        && infoFilm.videos.trailers
        && infoFilm.videos.trailers[0]
        && infoFilm.videos.trailers[0].url
        &&
        <div>
          <iframe
            className={style.video}
            src={infoFilm.videos.trailers[0].url}
            title="YouTube video player"

            allow="accelerometer;
          autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          >
          </iframe>
        </div>
      }
    </>
    

  );
}
export default Traller;