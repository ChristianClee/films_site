import React from 'react';
import style from './Traller.module.css'
import { PicturesId } from '../../components/types'
import { useSelector } from 'react-redux';
import { selectFilm } from '../../redux/selectors/filmSelector'
import { useActions } from '../../hooks/redux';


const Traller: React.FC<{ filmData: PicturesId }> = ({ filmData }) => {
  const { trallerState } = useSelector(selectFilm)
  const { toggleTrallerState } = useActions()


  const classTraller = trallerState ? [style.backFon, style.backFonActive].join(" ") : style.backFon


  return (
    <>
      {
        filmData.videos && filmData.videos.trailers && filmData.videos.trailers[0] && filmData?.videos?.trailers[0]?.url ?
          <div
            className={classTraller}
            onClick={() => toggleTrallerState()}
          >
            {
              trallerState &&
              <iframe
                className={style.traller}
                src={`${filmData.videos.trailers[0].url}?origin`}
                title="YouTube video player"
                allow="accelerometer; autoplay;
               clipboard-write; encrypted-media; 
               gyroscope; picture-in-picture; web-share"
                allowFullScreen
              >
              </iframe>
            }

          </div>

          :
          null
      }
    </>
  )
}
export default Traller;