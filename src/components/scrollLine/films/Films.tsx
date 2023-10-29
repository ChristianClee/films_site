import React from 'react';
import style from './Films.module.css'
import { PicturesId } from '../../types'
import { Link } from 'react-router-dom';

// @ts-ignore
const Films: React.FC<{ pictures: PicturesId[] }> = ({ pictures }) => {
  return (
    pictures.map((item, index) => {
      if (item?.poster?.previewUrl) {
        return (
          <Link to="./previewFilmPage" state={{ from: `${JSON.stringify(item)}` }} key={`${item} ${index} + ${Math.random()}`}>
            <img
              className={style.element}
              src={item.poster.previewUrl} alt="" />
          </Link>
        )
      }
    })
  )
}
export default Films;