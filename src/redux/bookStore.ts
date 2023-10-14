import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IbookSlice {
  value: number
}

const initialState: IbookSlice = {
  value: 1
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {

  },
})


export const {actions,reducer} = bookSlice

