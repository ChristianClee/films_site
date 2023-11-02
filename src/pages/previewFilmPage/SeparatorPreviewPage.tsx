import React from 'react';
import { useSelector } from 'react-redux';
import { selectFetching } from '../../redux/selectors/fetchingSelector';
import { useLocation } from 'react-router-dom';
import type { PicturesId } from '../../components/types';
import PreviewFilmPage from './PreviewFilmPage'

const SeparatorPreviewPage: React.FC = () => {
  const { filmId } = useSelector(selectFetching)
  const location = useLocation()

  let filmData: PicturesId | null = null
  if (location?.state?.from) {
    filmData = JSON.parse(location.state.from)
  }
  console.log({filmData, filmId})

  if (!filmData) {
    return (
      <>
        {
          filmId ?
            <PreviewFilmPage filmData={filmId} />
            :
            <div>hekko</div>
        }
      </>
 
    )
  } else {
    return (
      <PreviewFilmPage filmData= {filmData} />
    )
  }
}
export default SeparatorPreviewPage;