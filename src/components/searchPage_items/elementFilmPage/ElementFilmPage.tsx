import React, { useState } from 'react';
import style from './ElementFilmPage.module.css'
import { Link } from "react-router-dom"
import { PREVIEWFILMPAGE } from '../../../rout_path/paths'
import { useActions } from '../../../hooks/redux';
import StarsRaiting from '../../starsRaiting/StarsRaiting';
import type { FilmItem } from '../../fetchingTypes'
import Poster from '../poster/Poster';
import Description from '../description/Description';
import { ReactComponent as Ribbon } from '../../../assets/img/svg/certificate.svg'
import {} from "react-transition-group"

const ElementFilmPage: React.FC<{ elemFilms: FilmItem }> = ({ elemFilms }) => {
  const { fetchIdFilm } = useActions()
  const [massage, setMessage] = useState(false)
  const backFon = massage ? style.fonActive : style.fonPassive
  const describeMessage = massage ? [style.messageDescPassive, style.messageDescActive].join(" ") : style.messageDescPassive

  return (
    <div className={style.wrapper}>

    <Link
      className={style.link}
      to={"/" + PREVIEWFILMPAGE}
      onClick={() => fetchIdFilm(String(elemFilms.id))}
    >
      <div className={style.container}>
        <div className={style.posterContainer}>
          <Poster elemFilms={elemFilms} />
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
            <Ribbon />
          </button>
          :
          null
      }
    </Link>
    </div>
  )
}


export default ElementFilmPage;