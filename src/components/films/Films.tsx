import React, { useEffect, useRef } from 'react';
import style from './Films.module.css'
import { PicturesId } from '../types'
import { Link } from 'react-router-dom';

// @ts-ignore
const Films: React.FC<{ pictures: PicturesId[] }> = ({ pictures }) => {
  let startTime: number // определяет задержку между mousedown и mouseup

  return (
    pictures.map((item, index) => {
      if (item?.poster?.previewUrl) {
        return (
          <Link
            to="./previewFilmPage"
            state={{ from: `${JSON.stringify(item)}` }}
            key={`${item} ${index} + ${Math.random()}`}

            onMouseDown={() => {
              startTime = Date.now()
            }}
            onClick={(e) => {
              const timeNow = Date.now()
              if (timeNow - startTime > 150) e.preventDefault()
            }
            }
          >
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