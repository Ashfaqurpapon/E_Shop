import { configureStore } from "@reduxjs/toolkit";
import carAuthReducer from "./features/carAuthSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { baseApi } from "./api/baseApi";

// const persistConfig = {
//   key: "auth",
//   storage,
// };

const persistConfigCar = {
  key: "carAuth",
  storage,
};

// const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedAuthReducerCar = persistReducer(
  persistConfigCar,
  carAuthReducer
);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    // auth: persistedAuthReducer,
    carAuth: persistedAuthReducerCar,
  },

  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
