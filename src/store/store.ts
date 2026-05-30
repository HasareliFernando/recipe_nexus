import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import type { WebStorage } from "redux-persist";
import { mealApi } from "./api/mealApi";
import favouritesReducer from "./favouritesSlice";
import authReducer from "./authSlice";

const storage: WebStorage = {
  getItem: (key: string) => Promise.resolve(localStorage.getItem(key)),
  setItem: (key: string, value: string) => {
    localStorage.setItem(key, value);
    return Promise.resolve();
  },
  removeItem: (key: string) => {
    localStorage.removeItem(key);
    return Promise.resolve();
  },
};

const favouritesPersistConfig = {
  key: "favourites",
  storage,
};

const authPersistConfig = {
  key: "auth",
  storage,
};

const persistedFavouritesReducer = persistReducer(
  favouritesPersistConfig,
  favouritesReducer,
);

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [mealApi.reducerPath]: mealApi.reducer,
    favourites: persistedFavouritesReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(mealApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
