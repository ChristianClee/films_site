import React from 'react';
import style from './PreviewFilmPage.module.css'
import { useLocation } from 'react-router-dom'
import type {PicturesId} from '../../components/types'

const PreviewFilmPage: React.FC = () => {
  const location = useLocation()
  const filmData: PicturesId = JSON.parse(location.state.from)
  



  return (
    <div className={style.wrapper}>

      <Poster filmData={filmData}/>
      <Traller filmData={filmData} />
      <Description filmData={filmData} />
      <BackDrop filmData={filmData} />
      <Year filmData={filmData}/>
      <Watchability filmData={filmData} />
    </div>
  );
}
export default PreviewFilmPage;



const Poster: React.FC<{ filmData: PicturesId }> = ({ filmData }) => {
  return (
    <>
      {
        filmData.poster && filmData.poster.previewUrl ?
          <img src={filmData.poster.previewUrl} alt="" />
          :
          null
      }
    </>
  )
}
const Traller: React.FC<{ filmData: PicturesId }> = ({ filmData }) => {
  return (
    <>
      {
        filmData.videos && filmData.videos.trailers && filmData.videos.trailers[0] && filmData.videos.trailers[0].url ?
          <iframe
            width="560"
            height="315"
            src={filmData.videos.trailers[0].url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          >
          </iframe>
          :
          null
      }
    </>
  )
}
const Description: React.FC<{ filmData: PicturesId }> = ({ filmData }) => {
  return (
    <>
      {
        filmData.description && filmData.description ?
          <p>{filmData.description}</p>
          : null
      }
    </>
  )
}
const BackDrop: React.FC<{ filmData: PicturesId }> = ({ filmData }) => {
  return (
    <>
      {
        filmData.backdrop && filmData.backdrop.previewUrl ?
          <img src={filmData.backdrop.previewUrl} alt="" />
          :
          null
      }
    </>
  )
}
const Year: React.FC<{ filmData: PicturesId }> = ({ filmData }) => {
  return (
    <>
      {
        filmData.year ?
          <p>filmData.year</p>
          :
          null
      }
    </>
  )
}
const Watchability: React.FC<{ filmData: PicturesId }> = ({ filmData }) => {
  return (
    <>
      {
        filmData.watchability.items[0] ?
          filmData.watchability.items.map((item, index) => {
            if (item.url && item.name) return (
              <a href={item.url} key={`${item}${index}`}>{item.name} helloosdfdsfdsfdsf </a>
            )
          }
          )
          :
          null
      }
    </>
  )
}
