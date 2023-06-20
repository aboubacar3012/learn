import { configureStore, combineReducers, AnyAction, Reducer } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
//reducers
import authSlice from "./slices/auth.slice"
import versionSlice from "./slices/version.slice"

// reducers
const reducers = combineReducers({
  auth: authSlice,
  version: versionSlice,
})

const persistConfig = { key: "innotech", storage }

export const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
