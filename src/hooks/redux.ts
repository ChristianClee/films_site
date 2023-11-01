import { useMemo } from 'react'
import { useDispatch} from 'react-redux'
import type { AppDispatch } from '../redux/store/store'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actions as filmAction} from '../redux/slices/filmReduser'
import { actions as fetchingAction} from '../redux/slices/fetchingReduser'
import { fetchFilms } from '../redux/actions/fetchingActions'
import { fetchIdFilm } from '../redux/actions/fetchingIdActions'

export const useAppDispatch: () => AppDispatch = useDispatch


  const rootActions = {
    ...filmAction,
    ...fetchingAction,
    fetchFilms,
    fetchIdFilm,

}


export const useActions = () => {
  // useActions это специальная утилита, которая позволяет упростить порядок вызова dispatch в теле функций
  const dispatch = useAppDispatch()
  return useMemo(() => 
    bindActionCreators(rootActions, dispatch )
  ,[dispatch])
}
