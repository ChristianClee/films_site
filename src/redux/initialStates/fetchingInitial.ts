import { FilmItem } from "../../components/fetchingTypes"
import { PicturesId } from "../../components/types"

type FilmsInitialT = {
  inputValue: string;
  queryFilms: FilmItem[];
  page: number;
  pages: number;
  totall: number;
  limit: number;
  filmId: PicturesId | null;
  limitView: number;
  
}

export const fetchingInitial: FilmsInitialT = {
  inputValue: "",
  queryFilms: [],
  page: 0,
  pages: 0,
  totall: 0,
  limit: 0,
  filmId: null,
  limitView: 10,
}
