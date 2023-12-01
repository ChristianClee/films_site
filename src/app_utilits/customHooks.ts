import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useActions } from '../hooks/redux';
import { PREVIEWFILMPAGE } from '../constants/paths'
import { useSelector } from 'react-redux';
import { selectFilm } from '../redux/selectors/filmSelector'

export function useCloseTraller() {
  // useCloseTraller отслеживает url path и если клиент не находится на странице с треллером закрывает треллер по средствам redux
  const { falseTrallerState } = useActions()
  const { trallerState } = useSelector(selectFilm)
  const path = useLocation()
    .pathname
    .split("/")
    .slice(-1)[0]

  useEffect(() => { 
    if (path !== PREVIEWFILMPAGE) {
      if (trallerState) {
        falseTrallerState()
      }
    }
   },[path])
}