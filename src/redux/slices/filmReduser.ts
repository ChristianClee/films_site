import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { FILM } from '../../constants/reduxSlicesName'
import { filmsInitial } from '../initialStates/filmInitial'
import type { PicturesId } from "../../components/types"

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
    togglePopUpContacts(state) {
      state.popUpContacts = !state.popUpContacts
    },
    addRemainLikedId(state, action: PayloadAction<PicturesId>) {
      const film_id = action.payload.id
      const condition = state.likedMovie.some(i => i.id === film_id)
      if (condition) state.likedMovie = state.likedMovie.filter(i => i.id !== film_id)
      else state.likedMovie.push(action.payload)
    },
    remainLikedId(state, action: PayloadAction<number>) {
      state.likedMovie = state.likedMovie.filter(i => i.id !== action.payload)
    }
  },

})

export const {actions,reducer} = filmSlice