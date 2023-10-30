import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { filmsInitial } from '../initialStates/filmInitial'

export const filmSlice = createSlice({
  name: 'film',
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