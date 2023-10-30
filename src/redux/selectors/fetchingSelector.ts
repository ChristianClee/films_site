import { RootState } from "../store/store";

export function selectFetching(state: RootState) {
  return state.fetching;
}

