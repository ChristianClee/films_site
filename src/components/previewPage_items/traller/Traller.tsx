import React from 'react';
import style from './Traller.module.css'
import { PicturesId } from '../../types'

const Traller: React.FC<{ filmData: PicturesId }> = ({ filmData }) => {

  
  return (
    <>
      {
        filmData.videos && filmData.videos.trailers && filmData.videos.trailers[0] && filmData?.videos?.trailers[0]?.url ?
          <div className={style.backFon}>
            <iframe
              className={style.traller}
              src={filmData.videos.trailers[0].url}
              title="YouTube video player"
              allow="accelerometer; autoplay;
               clipboard-write; encrypted-media; 
               gyroscope; picture-in-picture; web-share"
              allowFullScreen
            >
            </iframe>
          </div>
          
          :
          null
      }
    </>
  )
}
export default Traller;