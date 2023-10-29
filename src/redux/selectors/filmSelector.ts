import { RootState } from "../store/store";

export function selectFilm(state: RootState) {
  return state.film;
}


