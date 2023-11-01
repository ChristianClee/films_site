import { createAsyncThunk } from "@reduxjs/toolkit";
import { FETCHING } from '../../constants/reduxSlicesName'
import { FetchT, FilmItem } from '../../components/fetchingTypes'


const page = `page=1`
const limit = `limit=10`
const key = { 'X-API-KEY': '84V9Y55-Z63MR19-QY7VD56-P4YK8YF' }
const request = `https://api.kinopoisk.dev/v1.2/movie/search?${page}&${limit}`


export const fetchFilms = createAsyncThunk(
  `${FETCHING}/fetchBooks`,
  async (query: string, {rejectWithValue}) => {
    let url = `${request}&query=${query}`


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

