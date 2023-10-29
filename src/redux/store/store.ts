import { configureStore } from '@reduxjs/toolkit'
import { reducer as reducerFilm } from '../reducers/filmReduser'
export const store = configureStore({
  reducer: {
    film: reducerFilm,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch