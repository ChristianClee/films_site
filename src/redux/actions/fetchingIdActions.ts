import { createAsyncThunk } from "@reduxjs/toolkit";
import { FETCHING } from '../../constants/reduxSlicesName'
import { FetchT, FilmItem } from '../../components/fetchingTypes'






const key = { 'X-API-KEY': '84V9Y55-Z63MR19-QY7VD56-P4YK8YF' }
const request = `https://api.kinopoisk.dev/v1.3/movie/`


export const fetchIdFilm = createAsyncThunk(
  `${FETCHING}/fetchIdFilm`,
  async (query: string, {rejectWithValue}) => {
    let url = `${request}${query}`

    try {
      const responce = await fetch(url, { headers: key })
      if (!responce.ok) throw new Error("Server Errorqweq")
      const data = await responce.json()
      return data
    }
    catch (e) {
      //@ts-ignore
      return rejectWithValue(e.message)
    }
});

