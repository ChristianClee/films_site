import { FilmItem } from "../../components/fetchingTypes"
import { PicturesId } from "../../components/types"

type FilmsInitialT = {
  inputValue: string;
  fetchFilms: FilmItem[];
  page: number,
  pages: number,
  totall: number,
  limit: number,
  filmId: PicturesId | null
}

export const fetchingInitial: FilmsInitialT = {
  inputValue: "",
  fetchFilms: [],
  page: 0,
  pages: 0,
  totall: 0,
  limit: 0,
  filmId: null,
}
