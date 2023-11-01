import { configureStore } from '@reduxjs/toolkit'
import { reducer as reducerFilm } from '../slices/filmReduser'
import { reducer as reducerFetching } from '../slices/fetchingReduser'

export const store = configureStore({
  reducer: {
    film: reducerFilm,
    fetching: reducerFetching,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch