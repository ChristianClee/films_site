import { useMemo } from 'react'
import { useDispatch} from 'react-redux'
import type { AppDispatch } from '../redux/store/store'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actions as filmAction} from '../redux/reducers/filmReduser'

export const useAppDispatch: () => AppDispatch = useDispatch


  const rootActions = {
  ...filmAction,
}


export const useActions = () => {
  // useActions это специальная утилита, которая позволяет упростить порядок вызова dispatch в теле функций
  const dispatch = useAppDispatch()
  return useMemo(() => 
    bindActionCreators(rootActions, dispatch )
  ,[dispatch])
}
