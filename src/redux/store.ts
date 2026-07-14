import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slices/cartSlice";
import { wishlistSlice } from "./slices/wishlist-slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  Persistor,
  PersistConfig,
} from "redux-persist";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";


// SSR-safe storage (important for Next.js)
const createNoopStorage = () => ({
  getItem(_key: string) {
    return Promise.resolve(null);
  },
  setItem(_key: string, value: unknown) {
    return Promise.resolve(value);
  },
  removeItem(_key: string) {
    return Promise.resolve();
  },
});

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();


// Root reducer
const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  wishlist: wishlistSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;


// Persist config with typing
const persistConfig: PersistConfig<RootState> = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["cart", "wishlist"],
};


// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);


// Store
export const store = configureStore({
  reducer: persistedReducer as typeof rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }) as any,

  devTools: process.env.NODE_ENV !== "production",
});


// Types
export type AppDispatch = typeof store.dispatch;


// Persistor
export const persistor: Persistor = persistStore(store);

export default store;