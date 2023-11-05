import { createAsyncThunk } from "@reduxjs/toolkit";
import { FETCHING } from '../../constants/reduxSlicesName'
import { FetchT, FilmItem } from '../../components/fetchingTypes'
import { filter } from './utilitsQuery'



const limit = `limit=250`
const key = { 'X-API-KEY': '84V9Y55-Z63MR19-QY7VD56-P4YK8YF' }
const request = `https://api.kinopoisk.dev/v1.2/movie/search?${limit}`


export const fetchFilms = createAsyncThunk(
  `${FETCHING}/fetchBooks`,
  async ({query, page}:{query:string, page:number}, {rejectWithValue}) => {
    let url = `${request}&${page}&query=${query}`


    try {
      const responce = await fetch(url, { headers: key })
      if (!responce.ok) throw new Error("Server Errorqweq")
      const data: FetchT = await responce.json()
      return filter(data)
    }
    catch (e) {
      //@ts-ignore
      return rejectWithValue(e.message)
    }
});



