import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fetchingInitial } from '../initialStates/fetchingInitial'

export const fetchingSlice = createSlice({
  name: 'film',
  initialState: fetchingInitial,
  reducers: {
    getInputValue(state, action:PayloadAction<string>) {
      state.inputValue = action.payload
    }
  },

})

export const {actions,reducer} = fetchingSlice