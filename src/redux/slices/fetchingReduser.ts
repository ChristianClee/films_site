import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fetchingInitial } from '../initialStates/fetchingInitial'
import { fetchFilms } from '../actions/fetchingQuery'
import { fetchIdFilm } from '../actions/fetchingId'
import { FetchT } from '../../components/fetchingTypes'
import { FETCHING } from '../../constants/reduxSlicesName'

export const fetchingSlice = createSlice({
  name: FETCHING,
  initialState: fetchingInitial,

  reducers: {
    getInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload
    },
    increaseLimitView(state, action: PayloadAction<number>) {
      if (state.limitView <= action.payload) {
        state.limitView += 10
      } else {
        return 
      }
      
    },
    restartLimitView(state) {
      state.limitView = 10
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.pending, (state, action) => {
    })
    builder.addCase(fetchFilms.fulfilled, (state, action: PayloadAction<FetchT>) => {
      state.queryFilms = action.payload.docs
      state.page = action.payload.page
      state.pages = action.payload.pages
      state.totall = action.payload.total
      state.limit = action.payload.limit
    });
    builder.addCase(fetchFilms.rejected, (state, action) => {
      console.log(action.payload)
    });
    builder.addCase(fetchIdFilm.fulfilled, (state, action) => {
      state.filmId = action.payload
    })

    }
  })

export const {actions,reducer} = fetchingSlice