import { configureStore } from '@reduxjs/toolkit'
import { reducer as reducerFilm } from '../reducers/filmReduser'
import { reducer as reducerFetching } from '../reducers/fetchingReduser'

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