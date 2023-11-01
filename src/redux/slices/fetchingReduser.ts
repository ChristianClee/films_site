import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fetchingInitial } from '../initialStates/fetchingInitial'
import { fetchFilms } from '../actions/fetchingActions'
import { fetchIdFilm } from '../actions/fetchingIdActions'
import { FetchT } from '../../components/fetchingTypes'
import { FETCHING } from '../../constants/reduxSlicesName'

export const fetchingSlice = createSlice({
  name: FETCHING,
  initialState: fetchingInitial,
  reducers: {
    getInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.pending, (state, action) => {
      console.log('download')
    })
    builder.addCase(fetchFilms.fulfilled, (state, action: PayloadAction<FetchT>) => {
      state.fetchFilms = action.payload.docs
      state.page = action.payload.page
      state.pages = action.payload.pages
      state.totall = action.payload.totall
      state.limit = action.payload.limit
        
    });
    builder.addCase(fetchFilms.rejected, (state, action) => {
      console.log(action.payload)
    });


    builder.addCase(fetchIdFilm.fulfilled, (state, action) => {
      
    })

    }
  })

export const {actions,reducer} = fetchingSlice