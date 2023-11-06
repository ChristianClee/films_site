import type { PicturesId } from "../../components/types"

type FilmsInitialT = {
  trallerState: boolean;
  recomendFilmMoveState: boolean;
  popUpContacts: boolean;
  likedMovie: PicturesId[];

}

export const filmsInitial: FilmsInitialT = {
  trallerState: false,
  recomendFilmMoveState: false,
  popUpContacts: false,
  likedMovie: [],

}

