import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { FILM } from '../../constants/reduxSlicesName'
import { filmsInitial } from '../initialStates/filmInitial'

export const filmSlice = createSlice({
  name: FILM,
  initialState:filmsInitial,
  reducers: {
    toggleTrallerState(state) {
      state.trallerState = !state.trallerState
    },
    toggleRecomendFilmMoveState(state) {
      state.recomendFilmMoveState = !state.recomendFilmMoveState
    },
    falseTrallerState(state) {
      state.trallerState = false
    },
  },

})

export const {actions,reducer} = filmSlice