import React from 'react';
import style from './Description.module.css'
import { PicturesId } from '../../components/types'

const Description: React.FC<{ filmData: PicturesId }> = ({ filmData }) => {
  return (
    <div className={style.wrapper}>
      {
        filmData.description && filmData.description ?
          <>
            <h3>Описание:</h3>
            <p>{filmData.description}</p>
          </>
          : null
      }
    </div>
  )
}
export default Description;