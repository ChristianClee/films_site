import React, { useState } from 'react';
import style from './ElementFilmPage.module.css'
import { Link } from "react-router-dom"
import { PREVIEWFILMPAGE } from '../../../rout_path/paths'
import { useActions } from '../../../hooks/redux';
import StarsRaiting from '../../starsRaiting/StarsRaiting';
import type { FilmItem } from '../../fetchingTypes'
import type { PicturesId } from '../../../components/types'
import Poster from '../poster/Poster';
import Description from '../description/Description';
import { ReactComponent as Ribbon } from '../../../assets/img/svg/certificate.svg'
import Raiting from '../../previewPage_items/raiting/Raiting';



type ElementFilmPageT = { elemFilms: FilmItem | null, elemFilmLiked: PicturesId | null }
  
const ElementFilmPage: React.FC<ElementFilmPageT> = ({ elemFilms, elemFilmLiked }) => {
  const { fetchIdFilm } = useActions()
  const [message, setMessage] = useState(false)
  const backFon = message ? style.fonActive : style.fonPassive
  const describeMessage = message ? [style.messageDescPassive, style.messageDescActive].join(" ") : style.messageDescPassive
  
  if (elemFilms) {
    return (
      <div className={style.wrapper}>

        <Link
          className={style.link}
          to={"/" + PREVIEWFILMPAGE}
          onClick={() => fetchIdFilm(String(elemFilms.id))}
        >
          <div className={style.container}>
            <div className={style.posterContainer}>
              <Poster poster={elemFilms?.poster} />
            </div>
            <div >
              <StarsRaiting raiting={elemFilms.rating} sizeSrars='1.4rem' />
            </div>
            <div >
              <Description elemFilms={elemFilms} />
            </div>
          </div>


          <div
            className={backFon}
            onClick={(e) => {
              e.preventDefault()
              setMessage(false)
            }}
          >
          </div>

          <div
            className={describeMessage}
            onClick={(e) => {
              e.preventDefault()

            }}
          >
            {elemFilms.shortDescription}
          </div>

          {
            elemFilms.shortDescription ?
              <button
                className={style.description}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setMessage(true)
                }}
              >
                <Ribbon className={style.picture} />
              </button>
              :
              null
          }
        </Link>
      </div>
    )
  } else if (elemFilmLiked) {
    return (
      <div className={style.wrapper}>

        <Link
          className={style.link}
          to={"/" + PREVIEWFILMPAGE}
          onClick={() => fetchIdFilm(String(elemFilmLiked.id))}
        >
          <div className={style.container}>
            <div className={style.posterContainer}>
              <Poster poster={elemFilmLiked?.poster?.previewUrl} />
            </div>
            <div className={style.title}>
              {elemFilmLiked.name}
            </div>
            <div >
              {/* <Raiting filmData={elemFilmLiked} sizeSrars='1.4rem'/> */}
              <StarsRaiting raiting={elemFilmLiked?.rating?.kp} sizeSrars='1.4rem' />
            </div>

          </div>

        </Link>
      </div>
    )
  } else {
    return (
      <p>sdf</p>
    )
  }
  

}


export default ElementFilmPage;