import { RootState } from "../store";

export function getAdmin(state: RootState) {
  return state.book;
}


