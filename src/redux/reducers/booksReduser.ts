import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { booksInitial } from '../initialStates/booksInitial'

export const bookSlice = createSlice({
  name: 'book',
  initialState:booksInitial,
  reducers: {
    
  },
})

export const {actions,reducer} = bookSlice