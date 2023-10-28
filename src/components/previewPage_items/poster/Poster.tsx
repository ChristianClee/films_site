import React from 'react';
import style from './Poster.module.css'
import type { PicturesId } from '../../types'

const Poster: React.FC<{ filmData: PicturesId }> = ({ filmData }) => {
  return (
    <>
      {
        filmData.poster && filmData.poster.previewUrl ?
          <img
            className={style.posterWidth}
            src={filmData.poster.previewUrl} alt="" />
          :
          null
      }
    </>
  )
}
export default Poster;