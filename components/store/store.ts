import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/users/userSlice' 
import sidebarSlice from '../features/sidebar/sidebarSlice'
import taskSlice from '../features/tasks/taskSlice'
export const store = configureStore({
  reducer: {
    user: userReducer,
    sidebar: sidebarSlice,
    task: taskSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch